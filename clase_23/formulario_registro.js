// Constantes, variables, arrays

// querySelector nos permite localizar el primer elemento que coincida con el tag (form en este caso)
const formulario = document.querySelector('form');
// getElementById es el que ya veníamos utilizando, para hacer referencia a cualquier elemento
// del DOM mediante un id (recordar que el id debe ser único, no puede repetirse en el documento)
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const usuario = document.getElementById('usuario');
const clave = document.getElementById('clave');
const mensaje = document.getElementById('mensaje');
const formacion = document.getElementById('formacion');
const postgrado = document.getElementById('postgrado');

const usuarios = [];
// Declaramos un array que nos va a servir luego para completar un menu desplegable en el HTML
const opcionesFormacion = [ 'Primario', 'Secundario', 'Terciario', 'Universitario' ];


// Declaración de funciones
function cargar_campos_formacion() {
    // Recorremos el array y vamos creando elementos tipo option utilizando createElement
    // y se los agregamos a formacion (formacion no es más que el objeto a través del cual interactuamos con el campo select del HTML)
    for (let i = 0; i < opcionesFormacion.length; i++) {
        const opcion = document.createElement('option');
        opcion.text = opcionesFormacion[i];
        opcion.value = opcionesFormacion[i].toLowerCase();
        formacion.add(opcion);
    }
}


// Declaración de eventos
// Los eventos son pieza importante de la dinámica web, se "disparan" por sucesos que pueden ocurrir a intervalos regulares
// o por acciones del usuario u otros elementos. En este caso el submit sobre el formulario, ocurrirá cuando el usuario
// haga click sobre el botón Registrar
formulario.addEventListener('submit', function (event) {
    // preventDefault nos permite anular el comportamiento predeterminado del formulario HTML (que es intentar recargar la página
    // dirigiéndose al destino que tenga especificado en action). En este caso le indicamos que no queremos nada de eso,
    // lo procesaremos nosotros aquí.
    event.preventDefault();

    // checkValidity devuelve true o false según el formulario sea válido o no (de acuerdo a las restricciones que hayamos
    // agregado en los distintos campos dentro del código HTML).
    if (formulario.checkValidity()) { // El formulario está listo para procesar
        // const contenido_frm = `Datos de formulario listos para procesar:<br>${formacion.value}<br>${nombre.value}<br>${apellido.value}<br>${usuario.value}<br>${clave.value}<br>${postgrado.checked}`;
        // mensaje2.innerHTML = contenido_frm;
        // mensaje2.style.display = 'block';

        // Simplemente como repaso, creamos un nuevo objeto con los distintos datos que vienen desde los campos del formulario
        const nuevo_usuario = {
            formacion: formacion.value,
            nombre: nombre.value,
            apellido: apellido.value,
            usuario: usuario.value,
            clave: clave.value,
            postgrado: postgrado.checked ? 'activo': 'inactivo'
        }

        console.log(nuevo_usuario);

        // Podemos luego agregarlo a un array
        // Aquí veremos más adelante como verificarlo y guardarlo por ejemplo en archivo o en base de datos
        // usuarios.push(nuevo_mensaje);
    } else {
        console.log('Formulario ERROR');
        formacion.focus();
    }
});

clave.addEventListener('invalid', function (event) {
    event.preventDefault();
    
    mensaje.innerText = 'Clave no válida (min 8, max 12 caracteres)';
    mensaje.style.display = 'block';
});

postgrado.addEventListener('click', function (event) {
    if (postgrado.checked && (formacion.value === 'primario' || formacion.value === 'secundario')) {
        mensaje.innerText = 'Se requiere como mínimo Universitario para aplicar a postgrado';
        mensaje.style.display = 'block';
    } else if (!postgrado.checked) {
        mensaje.style.display = 'none';
    }
})


// Flujo principal
// El flujo principal queda en este ejemplo muy limpio, es solo una llamada a la función que carga el select,
// a partir de allí el código queda a la espera de eventos que se sucedan y va ejecutando lo que corresponda en cada momento
cargar_campos_formacion();