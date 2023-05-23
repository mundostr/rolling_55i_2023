/*
Se desea solicitar números e ir almacenándolos en una matriz. No hay límite en la cantidad de números a ingresar.
Cuando se decida no ingresar más, indicar cuántos elementos tiene almacenados la matriz y mostrarlos uno por uno.
*/

let numeros = [];
let ingreso;

do {
    ingreso = prompt('Ingresar un número:');
    if (ingreso !== '0') numeros.push(ingreso);
} while(ingreso !== '0')

console.log('Cantidad de números ingresados:', numeros.length);

for (let c = 0; c < numeros.length; c++) {
    console.log(numeros[c]);
}