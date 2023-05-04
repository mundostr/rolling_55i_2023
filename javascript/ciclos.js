/*
Ejemplos de alternativas de ciclos
Un ciclo no es más que un bloque de código que se repite de 3 posibles maneras:
    1- infinita (mientras dure la ejecución del código)
    2- indefinida (hasta que se verifique una determinada condición)
    3- finita (una x cantidad de veces)
*/

// Ej 1: contar hasta límite
// Iniciamos en cero contador para que los 3 ciclos debajo lo vayan incrementando

const LIMITE = 10;
const LIMITE2 = 20;
let contador = 0;

// va incrementando y mostrando por consola mientras contador no llegue a LIMITE
while (contador < LIMITE) {
    contador++; // contador = contador + 1
    console.log(contador);
}

// ejecuta LIMITE veces
for (let ciclo = 1; ciclo <= LIMITE; ciclo++) {
    contador++;
    console.log(contador);
}

// idem while, pero el do while nos asegura que el paquete de instrucciones del ciclo se ejecute al menos una vez.
// es por esta razón que contador llega a 21 en este caso, aunque LIMITE2 se encuentre en 20.
do {
    contador++;
    console.log(contador);
} while(contador < LIMITE2)