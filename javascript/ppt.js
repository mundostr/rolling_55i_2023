/*
Reproducir lógica del tradicional juego piedra / papel / tijera, utilizando un array para las opciones
y un par de funciones para solicitar juego del participante y elegir jugada del bot (computadora).

Recordar:
    1) igual elección: empate
    2) TIJERA corta PAPEL
    3) PIEDRA rompe TIJERA
    4) PAPEL envuelve PIEDRA
*/


// Constantes y variables
const JUGADAS = ['PIEDRA', 'PAPEL', 'TIJERA'];


// Declaración de funciones
function elegirJugadaParticipante() {
    let ingresoParticipante;

    do {
        ingresoParticipante = parseInt(prompt("Ingrese su opción: 0 = PIEDRA | 1 = PAPEL | 2 = TIJERA"));
    } while(isNaN(ingresoParticipante) || ingresoParticipante < 0 || ingresoParticipante > JUGADAS.length - 1)
    
    return JUGADAS[ingresoParticipante];
}

function elegirJugadaMaquina() {
    // Permite obtener un subídince del array al azar
    const subindice_al_azar = Math.round(Math.random() * (JUGADAS.length - 1));
    return JUGADAS[subindice_al_azar];
}

function jugar() {
    const jugadaMaquina = elegirJugadaMaquina();
    const jugadaParticipante = elegirJugadaParticipante();

    // Comparar y mostrar
    console.log(`Jugada máquina: ${jugadaMaquina}`);
    console.log(`Jugada participante: ${jugadaParticipante}`);

    if (jugadaMaquina === jugadaParticipante) {
        console.log('EMPATE!');
    } else {
        if (jugadaMaquina == 'PIEDRA') {
            if (jugadaParticipante == 'PAPEL') {
                console.log('GANA PARTICIPANTE!');
            } else {
                console.log('GANA MAQUINA!');
            }

            // Alternativas equivalente compactas con operador ternario
            // jugadaParticipante == 'PAPEL' ? console.log('GANA PARTICIPANTE!') : console.log('GANA MAQUINA!');
            // console.log(jugadaParticipante == 'PAPEL' ? 'GANA PARTICIPANTE!' : 'GANA MAQUINA!');
        }

        // Completar con las demás opciones
    }
}


// Flujo principal
jugar();