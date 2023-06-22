/*
Por hacer:
    - Verificar stock al confirmar carrito.
    ## - Verificar stock al agregar carrito.
    ## - Controlar duplicados.
    ## - Límitar items totales en carrito.
    ## - Indicar items actuales en carrito.
    ## - Quitar items en carrito.
    - Modificar cantidad de items en carrito.
    - Agregar nuevos productos en stock.
*/


// Imports
// Importamos la clase y un par de funciones separadas para utilidades generales
import { Carrito } from './clase_carrito.js';
import { mostrarPublicidad, verificarCookies } from './auxiliares.js';


// Constantes, variables, BOM, DOM
// Vemos que ahora solo declaramos un par de constantes a nivel global
// para poder manejar el botón general de Agregar y el campo de cantidad
const btn_agregar = document.getElementById('btn_agregar');
const cantidad = document.getElementById('cantidad');


// Eventos
// Utilización de arrow function
btn_agregar.addEventListener('click', (event) => {
    event.preventDefault();
    // Ya no realizamos el control aquí mismo, delegamos la responsabilidad
    // al método agregarProducto de la clase Carrito.
    // Recordar que podemos utilizar el nombre carrito_carlos porque estamos creando
    // más abajo esas instancia (const carrito_carlos = new Carrito(10);)
    carrito_carlos.agregarProducto();
});

// Utilización de sintaxis tradicional con function
cantidad.addEventListener('input', function () {
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
// Queda muy limpio, solo creamos la instancia del carrito, y en este caso
// llamamos a las dos funciones generales de muestra, podrían quitarse de aquí
// y llamarse desde alguno de los métodos de la clase.
const carrito_carlos = new Carrito(10);
verificarCookies();
mostrarPublicidad(5000);