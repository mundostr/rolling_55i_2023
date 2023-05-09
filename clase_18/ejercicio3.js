const numero1 = 3;
const numero2 = 9;
 
/* if(numero1 <= numero2) {
    console.log("numero1 no es mayor que numero2");
}

if(numero2 > 0) {
    console.log("numero2 es positivo");
}

if(numero1 < 0 || numero1 !== 0) {
    console.log("numero1 es negativo o distinto de cero");
}
if(numero1 + 1 < numero2) {
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

// Calcular y mostrar el factorial de numero2
let factorial = 1;

// Alternativa 1, ciclo descendente
for (let c1 = numero2; c1 > 0; c1--) {
    factorial = factorial * c1
} // 5 4 3 2 1
console.log(factorial)

// Alternativa 2, ciclo ascendente
factorial = 1;
for (let c1 = 1; c1 <= numero2; c1++) {
    factorial = factorial * c1
} // 1 2 3 4 5
console.log(factorial) */

// Ciclo incremental de numero1 a numero2
/* for (let j = numero1; j <= numero2; j++) {
    console.log(j)
} */

let sumatoriaPares = 0;
for (let j = numero1; j <= numero2; j++) {
    console.log(j);

    if (j % 2 === 0) { // if (j % 2 !== 1) {
        sumatoriaPares = sumatoriaPares + j
    }
}
console.log(sumatoriaPares)