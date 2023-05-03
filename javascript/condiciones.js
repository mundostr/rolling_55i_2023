// Generamos un objeto con el cual manejar un elemento del HTML
// en este caso la etiqueta h1 que tiene el id resultado
const campoResultado = document.getElementById('resultado');

const nro = 103;
const limite = 100;
const rta_cero = 'El número es CERO';
const rta_par = 'El número es PAR';
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

/*
Utilizamos condiciones para evaluar si nro es 0, par o impar,
aprovechando la posibilidad de anidar ifs.

Práctica personal: cómo utilizarías los operadores lógicos (&&, ||)
para evaluar varias condiciones juntas y poder discernir si nro
es 0, par, impar, mayor o menor a 100?.
*/
if (nro === 0) {
    respuesta = rta_cero;
} else if (nro % 2 === 0) {
    respuesta = rta_par;
} else {
    respuesta = rta_impar;
}
console.log(respuesta);
campoResultado.innerHTML = respuesta;
