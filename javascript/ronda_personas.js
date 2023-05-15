const LIMITE_CUENTA = 100;
const LIMITE_PERSONAS = 10;

let cuenta;
let persona = 0;
let sentido = true;
let salto = 1;

for (cuenta = 1; cuenta <= LIMITE_CUENTA; cuenta++) {    
    if (sentido === true) {
        if (persona === LIMITE_PERSONAS) {
            persona = 1;
        } else {
            persona = persona + salto;
        }
    } else {
        if (persona === 1) {
            persona = LIMITE_PERSONAS;
        } else {
            persona = persona - salto;
        }
    }

    if (cuenta % 8 === 0) {
        sentido = !sentido;
    }

    if (cuenta % 11 === 0) {
        salto = 2;
    } else {
        salto = 1;
    }
    
    // console.log('Persona ' + persona + ' dice ' + cuenta + ' (' + sentido + ')')
    console.log(`Persona ${persona} dice ${cuenta} (${sentido ? 'horario': 'antihorario'})`)
}