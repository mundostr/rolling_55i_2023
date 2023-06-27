/*
Conceptos de funciones asíncronas, solicitudes remotas a APIs.
Listado de APIs interesantes para pruebas: https://github.com/public-apis/public-apis
*/

// const URL_API = 'https://api.oceandrivers.com/v1.0/getWebCams/';
// const URL_API = 'https://ergast.com/api/f1/2023/driverStandings.json';
const URL_API = 'https://api.open-meteo.com/v1/forecast?latitude=-31.2526&longitude=-61.4916&current_weather=true';


// Esta función muestra el uso del objeto XMLHttpRequest(), que fue la primer solución utilizada por JS
// para el manejo asíncrono de solicitudes, y sigue activa.
function clima_ajax_asincrono() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', URL_API, true);
    
    // Este evento onload se dispara cuando llega la respuesta a la solicitud
    xhr.onload = (e) => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    };
    
    xhr.onerror = (e) => {
        console.error(xhr.statusText);
    };
    
    xhr.send(null);
}

// Este es el método habitual utilizando Promesas (Promises), básicamente compromisos a futuro.
// Aquí podemos ver cómo generar manualmente una promesa y retornarla cumplida (resolve) o fallida (reject).
const generar_promesa = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            setTimeout(() => {
                resolve('Todo ok');
            }, 3000);
        } else {
            setTimeout(() => {
                reject('No anduvo');
            }, 3000);
        }
    });
}

// El método fetch es hoy parte de la estructura standard de JS, y utiliza internamente promesas.
// Mediante then() podemos capturar el resultado de la promesa cumplida (resolve) y, vía catch el de la fallida (reject).
const usar_promesa_fetch = () => {
    fetch(URL_API)
        // Encadenamos aquí 2 promesas, una es la que recibe la respuesta original
        // y genera una nueva promesa con esa respuesta convertida a JSON.
        .then((datos) => {
            return datos.json();
        })
        .then((datosJson) => {
            console.log(datosJson);
            console.log(datosJson.elevation);
        })
        .catch((err) => {
            console.warn(err);
        })
}

// Async / await es la sintaxis más actual, que permite un código más limpio. Internamente utiliza el mecanismo de promesas.
// Básicamente se define la función como asíncrona (async), y cada resultado de promesa se espera con await.
const usar_async_await = async () => {
    const datos = await fetch(URL_API);
    const datosJson = await datos.json();
    console.log(datosJson);
}

/* clima_ajax_asincrono(); */

/* generar_promesa()
    .then((resultado) => { console.log(resultado); })
    .catch((error) => { console.warn(error); }) */

/* usar_promesa_fetch(); */

usar_async_await();

console.log('Esto aparece antes o después?'); 