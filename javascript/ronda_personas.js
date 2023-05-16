/*
Una ronda de 10 personas debe contar hasta 100, iniciando en sentido horario de una en una.
Si la cuenta es perfectamente divisible por 8, se debe invertir el sentido de giro de la ronda y seguir contando.
Si la cuenta es perfectamente divisible por 11, se debe saltar una persona, cualquiera sea el sentido de giro.
*/

// Constantes para los límites
const LIMITE_CUENTA = 100;
const LIMITE_PERSONAS = 10;

// Variables para llevar control del valor actual de la cuenta, la persona que está contando,
// el sentido de giro de la ronda y el salto de persona (una en una o de a dos si es perfectamente divisible por 11)
let cuenta;
let persona = 0;
let sentido = true;
let salto = 1;

// La base del ejercicio es un simple ciclo hasta el límite de la cuenta
for (cuenta = 1; cuenta <= LIMITE_CUENTA; cuenta++) {    
    // Se verifica el sentido de giro, para saber si se debe incrementar o decrementar persona
    // y también se chequea que persona no se exceda de la cantidad
    if (sentido === true) {
        if (persona === LIMITE_PERSONAS) {
            persona = 1;
        } else {
            persona = persona + salto; // equivalente a persona += salto
        }
    } else {
        if (persona === 1) {
            persona = LIMITE_PERSONAS;
        } else {
            persona = persona - salto; // equivalente a persona -= salto
        }
    }

    // Operador de negación para invertir el sentido de giro
    if (cuenta % 8 === 0) {
        sentido = !sentido;
    }

    // Cambio del valor de salto según se deba justamente saltar una persona o no,
    // sin importar el sentido de giro, ya que eso se evalúa en la primer condición arriba
    // Esta condición doble puede reemplazarse por una expresión ternaria en una sola línea:
    // cuenta% 11 === 0 ? salto = 2: salto = 1;
    // El ? reemplaza al if() y el : al else().
    if (cuenta % 11 === 0) {
        salto = 2;
    } else {
        salto = 1;
    }
    
    // Para formar la salida, puede usarse la concatenación común con el signo +
    // o bien lo que se llama Template Literals, que utiliza la comilla invertida (backtick)
    // y el formato ${} para encerrar variables u otras expresiones
    // const salida = 'Persona ' + persona + ' dice ' + cuenta + ' (' + sentido + ')';
    const salida = `Persona ${persona} dice ${cuenta} (${sentido ? 'horario': 'antihorario'})`;
    
    // Finalmente se muestra la salida
    console.log(salida)
}