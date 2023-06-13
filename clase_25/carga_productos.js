/*
https://blog.logrocket.com/when-how-to-choose-html-form-validation/

Práctica de carga de productos mediante formulario
*/


// Constantes, variables, arrays
// Inicio con un array de productos vacío
const productos = [];
console.log(productos);

// Estos objetos me permiten operar sobre el DOM, ya sea para recibir como para enviar datos
const formulario = document.querySelector('form');
const id = document.getElementById('id');
const nombre = document.getElementById('nombre');
const precio = document.getElementById('precio');
const listado = document.getElementById('listado');


// Declaración de funciones


// Declaración de eventos
/*
addEventListener nos permite comenzar a "escuchar" un determinado evento sobre un elemento del DOM,
en este caso el submit sobre el formulario.
*/
formulario.addEventListener('submit', function (event) {
    // preventDefault evita que el sistema intente recargar la página y procesar de su lado
    // manejamos el proceso del formulario nosotros
    event.preventDefault();

    if (formulario.checkValidity()) { // El formulario está listo para procesar
        // Simplemente armamos un objeto temporal con los datos del nuevo producto, tomándolos
        // desde los campos de formulario a través de value, y hacemos un push para actualizar
        // el array
        const nuevoProducto = {
            id: id.value,
            nombre: nombre.value,
            precio: precio.value }
        productos.push(nuevoProducto);

        /*
        Actualizamos el párrafo de listado en la página, limpiamos los campos y retornamos el foco al primero.
        Aquí aprovechamos nuevamente el for() en su expresión compacta, para practicar el recorrido del array,
        podríamos también actualizar el array como lo hacemos arriba, y solo agregar el nuevo producto al listado
        sin limpiarlo y recorrer todo el array de nuevo.
        */
        listado.innerHTML = '';
        for (item of productos) {
            listado.innerHTML = `${listado.innerHTML}<br>${item.nombre}`;
        }
        id.value = '';
        nombre.value = '';
        precio.value = '';
        id.focus();
        
        // mensaje2.innerHTML = contenido_frm;
        // mensaje2.style.display = 'block';
    } else {
        console.log('Formulario ERROR');
        id.focus();
    }
})


// Flujo principal
