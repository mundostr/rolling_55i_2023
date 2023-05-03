const campoResultado = document.getElementById('resultado');

const nro = 103;
const limite = 100;
const rta_cero = 'El número es cero';
const rta_par = 'El número es par';
const rta_impar = 'El número es IMPAR';

let respuesta = '';

/* if (nro === 0) {
    console.log("Es cero");
    campoResultado.innerHTML = "El número es cero";
} else {
    if (nro % 2 === 0) { // si
        console.log("Es par");
        campoResultado.innerHTML = "El número es par";
    } else { // sino
        console.log("Es impar");
        campoResultado.innerHTML = "El número es impar";
    }
} */

if (nro === 0) {
    respuesta = rta_cero;
} else if (nro % 2 === 0) {
    respuesta = rta_par;
} else {
    respuesta = rta_impar;
}
console.log(respuesta);
campoResultado.innerHTML = respuesta;

/* if (nro % 2 === 0 && nro > limite) { // si
    console.log("El número es par y mayor a 100");
    campoResultado.innerHTML = "El número es par y mayor a 100";
} else if (nro % 2 === 0) { // sino
    console.log("El número es impar y menor a 100");
    campoResultado.innerHTML = "El número es impar y menor a 100";
} else {
    
} */