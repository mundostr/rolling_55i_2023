// Generamos las referencias al formulario y el cuadro de mensaje
const formulario = document.querySelector('form');
const mensaje_estado = document.getElementById('mensaje_estado');

// Quedamos en escucha del evento submit del formulario, que se produce en este caso
// cuando el usuario pulsa sobre el botón Ingresar, ya que es de tipo submit
formulario.addEventListener('submit', function (event) {
    // Generamos las referencias a los dos campos de datos
    const email = document.getElementById('email');
    const clave = document.getElementById('clave');
    
    // Esto previene que el navegador intente recargar la página, nos permite manejar
    // manualmente el procesamiento del formulario
    event.preventDefault();

    if (formulario.checkValidity()) {
        // Llamamos a una función que nos devuelve la lista de usuarios recuperados desde localStorage
        const lista_usuarios = recuperarUsuarios();

        // por defecto usuario_valido es false, recorremos el array de usuarios con forEach
        // y si algún email y clave coinciden, cambiamos usuario_valido
        let usuario_valido = false; // bandera = flag
        lista_usuarios.forEach((item) => {
            if (item.email === email.value && item.clave === clave.value) { usuario_valido = true; }
        });

        // Actualizamos la marca de usuario_valido en el localStorage,
        // si es true redireccionamos a la página privada, sino volvemos al primer campo
        sessionStorage.setItem('estado_usuario', usuario_valido);
        
        if (usuario_valido) {
            window.location.href = './privada.html';
        } else {
            // Mostramos el mensjae de error y pasamos el foco al campo email
            mensaje_estado.innerHTML = 'Error en email y/o clave';
            mensaje_estado.classList.remove('invisible');
            mensaje_estado.classList.add('visible');
            email.focus();
            ocultarMensaje();
        }
    } else {
        mensaje_estado.innerHTML = 'Datos faltantes o no válidos';
        mensaje_estado.classList.remove('invisible');
        mensaje_estado.classList.add('visible');
        email.focus();
        ocultarMensaje();
        console.log('Formulario ERROR');
    }
});

// Esta función es solo para práctica, lógicamente esta línea única podría colocarse
// directamente donde llamamos a la función.
function recuperarUsuarios () {
    // El operador || nos permite retornar un array vacío si no se encuentra lista_usuarios en el localStorage
    return JSON.parse(localStorage.getItem('lista_usuarios')) || [];
}

function ocultarMensaje () {
    setTimeout(() => {
        // Luego de 3 segundos ocultamos el cuadro de mensaje
        mensaje_estado.classList.remove('visible');
        mensaje_estado.classList.add('invisible');
    }, 3000);
}


// cargarUsuarios solo es una función temporal para cargar algunos contenidos
// al localStorage que nos permitan probar
/* function cargarUsuarios() {
    const usuarios = [
        { email: 'juan@juan.com', clave: 'abc111' },
        { email: 'pepe@pepe.com', clave: 'abc123' },
        { email: 'jose@jose.com', clave: 'cba123' }
    ];
    localStorage.setItem('lista_usuarios', JSON.stringify(usuarios));
}

cargarUsuarios(); */