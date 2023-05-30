/*
Este ejercicio permite calcular la superficie de círculo, triángulo y rectángulo.
Se debe solicitar al usuario que indique cuál de los 3 tipos de figura desea, y luego pedir el ingreso de los valores necesarios,
recordando las fórmulas: 1) círculo: PI * radio * radio, 2) triángulo: (base * altura) / 2, 3) rectángulo: base * altura
Integrar un array y una función para practicar el uso de las mismas.
*/

// Constantes y variables
// Lo declarado en esta zona es GLOBAL, es decir, puede ser utilizado desde cualquier parte del código
const PI = 3.14;
const tiposPermitidos = ['C','T', 'R'];
// Utilizando Javascript Vanilla (sin ningún tipo de framework), hacemos referencia a un par de elementos HTML
// utilizando su id (resultado e input01) (ver index.html en esta carpeta).
// A partir de ahora estos objetos nos permitirán manejar esos elementos HTML desde Javascript.
const res01 = document.getElementById('resultado');
const input01 = document.getElementById('input01');

let tipoFigura = '';


// Declaración de funciones
// Forma de declaración habitual
function cambiarColorInput() {
    input01.style.backgroundColor = '#fc0';
}

function mostrarValorInput() {
    console.log(input01.value);
}

function mostrarResultadoPlano(mensaje) {
    // Lo declarado dentro de la función, como la variable v1, es LOCAL,
    // solo existe en el ámbito de la función, no afuera.
    let v1 = 15;

    // Aquí se aprovechan los objetos declarados al principio, para modificar propiedades de esos
    // elementos HTML y lograr modificar la salida que se observa en el navegador.
    res01.style.color = '#ff3300';
    res01.innerHTML = `<b>${mensaje}</b>`;
}

// Forma de declaración alternativa con Arrow notation / notación tipo flecha
// Se verá mucho esta notación actualmente, aunque la tradicional con function es totalmente válida
mostrarResultadoFormateado = (mensaje) => {
    alert('********************************\n' + mensaje + '\n********************************');
}


// Flujo principal
// Mientras lo ingresado no esté incluído en el array tiposPermitidos, continuamos solicitando.
do {
    tipoFigura = prompt('Seleccione entre círculo (C), triángulo (T) y rectángulo (R):').toUpperCase();
} while(tiposPermitidos.includes(tipoFigura) === false)

// Podemos calcular en función de lo ingresado utilizando una secuencia de if()s
/* if (tipoFigura === 'C') {
} else if (tipoFigura === 'T') {
} else {
} */

// o bien una notación alternativa con switch / case, en ambos casos funcionará
switch (tipoFigura) {
    case 'C':
        const radio = prompt('Indique radio del círculo');
        // Llama a la función mostrarResultadoFormateado que solo abre un alert()
        mostrarResultadoFormateado(`La superficie del círculo es ${radio * radio * PI}`);
        break;
    
    case 'T':
        const base = prompt('Indique base del triángulo');
        const altura = prompt('Indique altura del triángulo');
        // Llama a la función mostrarResultadoPlano que pasa el resultado al HTML
        mostrarResultadoPlano(`La superficie del triángulo es ${(base * altura) / 2}`);
        break;

    case 'R':
        const baseR = prompt('Indique base del rectángulo');
        const alturaR = prompt('Indique altura del rectángulo');
        mostrarResultadoPlano(`La superficie del rectángulo es ${baseR * alturaR}`);
        break;
    
    default:
        alert('Error en el tipo de figura');
}