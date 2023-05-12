// Límites a respetar
const LIMITE_CUENTA = 25
const LIMITE_PERSONAS = 10

// Variables auxiliares para llevar control de la cuenta, qué persona está contando y en qué sentido va la ronda
let cuenta
let persona = 0
let sentido_horario = true

// La cuenta no es más que un simple ciclo que no para hasta llegar al límite, por eso todo queda dentro del for
// Podemos utilizar en el ciclo la misma variable definida arriba, e ir incrementándola
for (cuenta = 1; cuenta <= LIMITE_CUENTA; cuenta = cuenta + 1) { // equivalente a cuenta++
    // Esta condición nos permite saber si estamos en sentido horario o antihorario,
    // y de esa forma incrementar o decrementar persona, ya que no siempre debemos sumar, dependerá del sentido
    if (sentido_horario === true) {
        if (persona === LIMITE_PERSONAS) {
            persona = 1
        } else {
            persona = persona + 1
        }
    } else {
        if (persona === 1) {
            persona = LIMITE_PERSONAS
        } else {
            persona = persona - 1
        }
    }

    if (cuenta % 8 === 0) {
        // Aprovechamos el operador de negación (!) para invertir sentido horario; si es true va a false, si es false va a true
        sentido_horario = !sentido_horario
    }
    
    // Si bien podríamos colocar esta salida en otro lugar, normalmente lo más ordenado es procesar y mostrar el resultado al final
    console.log('Persona ' + persona + ' dice ' + cuenta + ' (' + sentido_horario + ')')
}