// Importamos la "base de datos" de productos disponibles, que por ahora es un simple objeto en archivo separado
import { productos_disponibles } from './productos_disponibles.js';


class Carrito {
    constructor(limite) {
        this.id = this.generarIdRandom(8);
        this.creado_el = this.retornarFechayHora();
        this.actualizado_el = this.retornarFechayHora();
        
        this.productos = [];
        this.total_productos = 0;
        this.limite_productos = limite;
        
        // Inicializamos el carrito con un array vacío de productos, pero si hay algo guardado en LocalStorage,
        // lo recuperamos y actualizamos tanto el array como el total de productos
        if (localStorage.getItem('carrito_carlos')) {
            this.productos = JSON.parse(localStorage.getItem('carrito_carlos'));
            this.total_productos = this.productos.reduce((total, obj) => total + obj['cantidad'], 0);
        }

        // Aquí cargamos los productos disponibles en el select y actualizamos el listado del carrito debajo
        this.completarSelectProductos();
        this.actualizarListado();
    }

    // Este es solo un método de muestra, para uso interno de la clase
    generarIdRandom(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        
        return result;
    }

    // Este es solo un método de muestra, para uso interno de la clase
    retornarFechayHora() {
        const fyh = new Date(Date.now());
        return fyh.toLocaleString();
    }

    // Este es solo un método de muestra, para uso externo
    retornarProductos() {
        return this.productos;
    }

    actualizarListado() {
        // Las constantes que enlazan con los elementos del DOM, que antes eran globales,
        // pueden definirse ahora solo dentro del ámbito que corresponda
        const listado_carrito = document.getElementById('listado_carrito');
        const total_carrito = document.getElementById('total_carrito');
        const titulo_pec = document.getElementById('titulo_pec');

        titulo_pec.innerHTML = `Productos en carrito (${this.total_productos})`;
        listado_carrito.innerHTML = '';
    
        // Si no hay productos en el carrito, la lista del DOM solo se completa con un item Ninguno
        if (this.productos.length === 0) {
            total_carrito.style.display = 'none';
            const elemento = document.createElement('li');
            elemento.classList.add('list-group-item');
            elemento.textContent = 'Ninguno';
            // elemento.innerHTML = '<img src="./carrito_vacio.png" style="width: 80px;">'
            listado_carrito.appendChild(elemento);
        } else {
            let importe_total = 0;
    
            // Si en cambio hay productos, se recorre el carrito y se van agregando items <li>
            // al la lista del DOM, cuyo contenido de texto se arma con nombre y precio.
            for (let item of this.productos) {
                const elemento = document.createElement('li');
                elemento.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start');
                
                elemento.innerHTML = `
                    <div class="ms-2 me-auto">
                        ${item.cantidad} x ${item.producto.nombre} ($ ${item.producto.precio})
                    </div>
                    <span>$ ${item.cantidad * item.producto.precio}</span>
                    <span style="margin-left: 12px;">
                        <button class="btn btn-success btn-borrar">Quitar</button>
                    </span>
                `;  // El botón Quitar del elemento li que agregamos, no tiene ninguna acción relacionada,
                    // pero sí la clase btn-borrar, que nos servirá más abajo para activar la escucha del evento

                listado_carrito.appendChild(elemento);
                
                // Se aprovecha para la sumatoria de un importe total
                importe_total += item.cantidad * item.producto.precio;
            }
    
            // y se muestra finalmente ese importe en el último párrafo.
            // Como el párrafo está oculto por defecto, se lo vuelve a mostrar y se cambia su contenido
            total_carrito.style.display = 'block';
            total_carrito.innerHTML = `<b>$ ${importe_total}<b>`;

            // Aquí activamos los eventos de escucha, para quedar atentos al click sobre los botones Quitar.
            // Observar que armamos un array con todos los botones que tengan asignada la clase btn-borrar.
            const btns_borrar = document.querySelectorAll('.btn-borrar');
            if (btns_borrar.length > 1) {
                for (let i = 0; i < btns_borrar.length; i++) {
                    btns_borrar[i].removeEventListener('click', () => {});
                }
            }
            for (let i = 0; i < btns_borrar.length; i++) {
                btns_borrar[i].addEventListener('click', () => {
                    // const indice = btns_borrar[i].getAttribute('indice');
                    this.quitarProducto(i);
                });
            }
        }
    }

    completarSelectProductos() {
        const listado_productos = document.getElementById('listado_productos');

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

    agregarProducto() {
        // Las constantes que enlazan con los elementos del DOM, que antes eran globales,
        // pueden definirse ahora solo dentro del ámbito que corresponda
        const mensaje = document.getElementById('mensaje');
        const mensajeBs = bootstrap.Toast.getOrCreateInstance(mensaje);
        const listado_productos = document.getElementById('listado_productos');

        // Aquí se aprovecha el value del select de productos para buscar en el array los datos del producto elegido
        const elegido = productos_disponibles[listado_productos.value];
        const producto_carrito = { codigo: elegido.codigo, nombre: elegido.nombre, precio: elegido.precio };
        const cantidad_items = parseInt(cantidad.value);

        // Si no hay stock suficiente, no se permite la carga en el carrito
        if (cantidad.value > elegido.stock) {
            document.getElementById('texto_mensaje').innerHTML = `Solo hay ${elegido.stock} productos de este tipo disponibles`;
        } else if (this.total_productos + cantidad_items <= this.limite_productos) {
            // Si hay stock y no nos pasamos del límite total de productos en carrito,
            // confirmamos si ya hay un producto en el carrito con ese código
            const encontrado = this.productos.findIndex((item) => {
                return item.producto.codigo === producto_carrito.codigo;
            });

            if (encontrado === -1) {
                // De no haberlo (-1), hacemos el push
                this.productos.push({ cantidad: cantidad_items, producto: producto_carrito });
            } else {
                // caso contrario solo actualizamos la cantidad
                this.productos[encontrado].cantidad += cantidad_items;
            }
                
            // Actualizamos el total de productos y el LocalStorage
            this.total_productos += cantidad_items;
            localStorage.setItem('carrito_carlos', JSON.stringify(this.productos));
            document.getElementById('texto_mensaje').innerHTML = `Se agregaron ${cantidad_items} items al carrito`;
            this.actualizarListado();
        } else {
            document.getElementById('texto_mensaje').innerHTML = `El límite de productos por carrito es de ${this.limite_productos}`;
        }

        mensajeBs.show();
    }
    
    quitarProducto(indice) {
        // Como ya tenemos el índice del producto en el array this.productos,
        // simplemente restamos la cantidad del total y hacemos un splice para sacarlo del array
        this.total_productos -= this.productos[indice].cantidad;
        this.productos.splice(indice, 1);
        localStorage.setItem('carrito_carlos', JSON.stringify(this.productos));
        this.actualizarListado();
    }
}

export { Carrito };