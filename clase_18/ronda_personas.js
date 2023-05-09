const CTD_PERSONAS = 10
const LIMITE_CUENTA = 100

let cuenta = 1
let persona = 0

for (let c = 1; c <= LIMITE_CUENTA; c++) {
    cuenta = c
    
    if (persona === CTD_PERSONAS) {
        persona = 0
    }
    persona = persona + 1

    const salida = `Persona ${persona} dice ${cuenta}`
    
    console.log(salida)
}