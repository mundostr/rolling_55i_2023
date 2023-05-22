/*
Variables vs matrices (arrays)
Una matriz no es más que un conjunto de datos manejados como unidad, a diferencia de una variable común
que gestiona un único dato.
*/

// Recordemos cómo declarar una variable común
let variableUnitaria = 23

// En el caso de una matriz, utilizamos corchetes y los valores dentro separados por comas
// En Javascript una matriz puede mezclar tipos de valores (enteros, flotantes, cadenas, booleanos)
// si bien en la práctica no mezclaremos generalmente, para ese tipo de casos utilizaremos los objetos
let matriz01 = [1, "Pedro", true, false, "Juan", 22.5]

let lecturas_sensor = [
    22.5,
    23.1,
    24.1,
    22.3,
    22.1,
    20.5,
    20.4
]

console.log(lecturas_sensor.length);

/* lecturas[1]

let promedio = 0

// Podemos recorrer una matriz para ir viendo sus elementos
// El método length nos devuelve la cantidad de elementos que contiene
for (let c = 0; c < lecturas.length; c++) {
    // Cómo hacemos referencia a un elemento en particular dentro de la matriz?.
    // Utilizamos un índice (o subíndice), en este caso lecturas[c], así en cada iteracción
    // del ciclo for(), lecturas[c] toma el valor del item de turno
    promedio = promedio + lecturas[c]
    console.log(lecturas[c])
}
promedio = promedio / lecturas.length
console.log(promedio) */