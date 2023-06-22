/*
Esta es una muestra de un par de funciones generales, exportadas para poder se utilizadas donde se necesite
*/


function mostrarPublicidad(duracion) {
    const dos_por_uno = document.getElementById('dos_por_uno');
    dos_por_uno.style.display = 'block';
    
    setTimeout(() => {
        dos_por_uno.style.display = 'none';
    }, duracion);
}

function verificarCookies() {
    console.log(navigator.cookieEnabled ? 'Cookies HABILITADAS' : 'Cookies DESHABILITADAS');
    // if (!navigator.cookieEnabled) { alert('Las cookies están deshabilitadas'); }
}

export { mostrarPublicidad, verificarCookies };