// Declaro una matriz llamada matriz01 que contiene 5 elementos
let variableUnitaria = 23

let matriz01 = [1, "Pedro", true, false, "Juan", 22.5]

let lecturas = [22, 23, 23, 24, 25, 26, 25, 23, 22, 21, 20]
let promedio = 0

for (let c = 0; c < lecturas.length; c++) {
    promedio = promedio + lecturas[c]
    console.log(lecturas[c])
}
promedio = promedio / lecturas.length
console.log(promedio)

/* console.log(variableUnitaria)
console.log(matriz01)
console.log(`El primer elemento es ${matriz01[0]} y el quinto es ${matriz01[4]}`) */
