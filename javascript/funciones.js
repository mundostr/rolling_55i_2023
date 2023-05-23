/*
Conceptos primarios de funciones
Función: bloque de código definido por separado, que puede ser
invocado en cualquier momento desde el flujo principal
*/

// Declaración de constantes y variables
let var01 = 23;


// Definición de funciones
function mostrar_multiplicacion() {
    const n1 = 2;
    const n2 = 3;
    console.log('El resultado de la multiplicación es:', n1 * n2);
}


// Flujo principal de código
console.log('SISTEMA INICIADO');
console.log('Primer acción del sistema:');
// Invocamos a la función a través de su nombre
mostrar_multiplicacion();