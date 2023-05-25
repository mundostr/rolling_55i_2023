// Array
const lecturas = [
    22,
    23,
    24,
    22,
    21,
    20
];

for (let c = 0; c < lecturas.length; c++) {
    console.log(lecturas[c]); // Para acceder a los items del array, utilizo el subíndice
}

// Objeto
const datosPersonales = {
    "nombre": "Carlos",
    "apellido": "Perren",
    "localidad": "Rafaela",
    "cp": 2300,
    "saldo": 122300.50,
    "activo": true
}

console.log(datosPersonales.localidad);