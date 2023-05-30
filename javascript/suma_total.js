const LIMITE_SUMA = 50;

let ingreso;
let suma = 0;
let contador = 0;
let numeros = [];

do {
    ingreso = parseInt(prompt('Ingresar número'));
    numeros.push(ingreso);
    suma = suma + ingreso; // suma += ingreso
    // contador = contador + 1;
} while(suma < LIMITE_SUMA)

// console.log(`Se ingresaron ${contador} números, dando un total de ${suma}`);
console.log(`Se ingresaron ${numeros.length} números, dando un total de ${suma}`);
console.log(numeros);