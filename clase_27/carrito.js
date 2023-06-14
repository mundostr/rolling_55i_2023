// Imports
// Empleando la estructura de módulos de Javascript, importamos la clase Producto
// definida en otro archivo, de esta manera se pueden seccionar los distintos componentes
// y lograr mayor organización y reutilización
import { Producto } from './clase_producto.js';


// Constantes y variables
// Generamos algunas referencias a elementos del DOM para poder interactuar
const listado_productos = document.getElementById('listado_productos');
const btn_agregar = document.getElementById('btn_agregar');
const listado_carrito = document.getElementById('listado_carrito');
const total_carrito = document.getElementById('total_carrito');
const cantidad = document.getElementById('cantidad');

// Por ahora los productos disponibles para compra, los tenemos cargados manualmente en un array,
// esto más adelante llegará de una consulta a una base de datos por ejemplo.
const productos_disponibles = [
    { codigo: 'ABC120', nombre: 'Aire acondicionado', precio: 230000 },
    { codigo: 'ABC121', nombre: 'Cocina eléctrica', precio: 110000 },
    { codigo: 'ABC122', nombre: 'Termotanque', precio: 130000 },
    { codigo: 'ABC123', nombre: 'Multijuguera', precio: 23000 },
];

// Carrito de compra, que comienza vacío
const carrito = [];


// Funciones
function actualizar_vista_productos() {
    // Recorre la lista de productos disponibles, y va creando los elementos option
    // para completar el select en el DOM, utilizando como valor el índice y como texto el nombre y precio
    for (let index = 0; index < productos_disponibles.length; index++) {
        const elemento = document.createElement('option');
        const producto = productos_disponibles[index];
        elemento.value = index;
        elemento.text = `${producto.nombre} ($ ${producto.precio})`;
        listado_productos.appendChild(elemento);
    }
}

function actualizar_vista_carrito() {
    listado_carrito.innerHTML = '';

    // Si no hay productos en el carrito, la lista del DOM solo se completa con un item Ninguno
    if (carrito.length === 0) {
        total_carrito.style.display = 'none';
        const elemento = document.createElement('li');
        elemento.classList.add('list-group-item');
        // elemento.textContent = 'Ninguno';
        elemento.innerHTML = '<img src="./carrito_vacio.png" style="width: 80px;">'
        listado_carrito.appendChild(elemento);
    } else {
        let importe_total = 0;

        // Si en cambio hay productos, se recorre el carrito y se van agregando items <li>
        // al la lista del DOM, cuyo contenido de texto se arma con nombre y precio.
        for (let item of carrito) {
            const elemento = document.createElement('li');
            elemento.classList.add('list-group-item');
            elemento.textContent = `${item.cantidad} x ${item.producto.nombre} ($ ${item.cantidad * item.producto.precio})`;
            listado_carrito.appendChild(elemento);
            
            // Se aprovecha para la sumatoria de un importe total
            importe_total += item.cantidad * item.producto.precio;
        }

        // y se muestra finalmente ese importe en el último párrafo.
        // Como el párrafo está oculto por defecto, se lo vuelve a mostrar y se cambia su contenido
        total_carrito.style.display = 'block';
        total_carrito.innerHTML = `<b>$ ${importe_total}<b>`;
    }
}


// Eventos
// Se activa un evento para estar atentos al click sobre el botón de Agregar producto
btn_agregar.addEventListener('click', function (event) {
    event.preventDefault();
    
    // Aquí se aprovecha el value del select de productos para buscar en el array los datos del producto elegido,
    // creando una nueva instancia de Producto y asociándole esos datos.
    const elegido = productos_disponibles[listado_productos.value];
    const producto_carrito = new Producto(elegido.codigo, elegido.nombre, elegido.precio);
    // Por último se agrega ese producto al carrito y se actualiza el listado en el DOM
    carrito.push({ cantidad: parseInt(cantidad.value), producto: producto_carrito });
    actualizar_vista_carrito();
});

cantidad.addEventListener('input', function() {
    cantidad.value = cantidad.value.replace(/[^0-9]/g, '');
    
    if (cantidad.value.length > 3) {
        cantidad.value = cantidad.value.slice(0, 3);
    } else if (cantidad.value < 1) {
        cantidad.value = 1;
    } else if (cantidad.value > 100) {
        cantidad.value = 100;
    }
});


// Flujo principal
// Al cargar la página, solo se completa el select de productos disponibles y se actualiza el listado inicial
actualizar_vista_productos();
actualizar_vista_carrito();