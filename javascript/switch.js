/*
Práctica con sintaxis alternativa switch case

Qué sucede si por ejemplo necesitamos mostrar un determinado mensaje
de acuerdo a un indicador que puede tomar 5 valores diferentes?.
*/

const campoResultado = document.getElementById('resultado');

let indicador = 3;
let txt_resultado = '';

// switch() nos brinda un formato alternativo a un paquete de ifs()
// logrando contemplar un paquete de posibles valores para la expresión evaluada
switch (indicador) {
    case 1:
        txt_resultado = 'Conectando';
        break;
    
    case 2:
        txt_resultado = 'Asignando';
        break;
    
    case 3:
        txt_resultado = 'Conectado';
        break;

    case 4:
        txt_resultado = 'Desconectado';
        break;

    case 5:
        txt_resultado = 'ERROR';
        break;
    
    default:
        txt_resultado = 'Código no válido';
}

campoResultado.innerHTML = '<i>' + txt_resultado + '</i>';