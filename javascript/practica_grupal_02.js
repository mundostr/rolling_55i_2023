/*

1) Generar un array con listado de alimentos (puede aprovecharse el array concatenado de la parte I).

2) Generar otro array vacío para guardar los items del pedido.

3) Simular un pedido. La cantidad de items a cargar en el pedido se debe elegir al azar entre 1 y 10. Se puede utilizar esta fórmula: Math.floor(Math.random() * 10) + 1;

4) Generar un ciclo hasta esa cantidad, y en cada iteración del ciclo, elegir también al azar un item
   del array de alimentos (el subíndice al azar puede obtenerse con Math.floor(Math.random() * nombre_array.length))
   y una cantidad entre 1 y 10.

   Ir agregando al array del pedido cada nuevo item (push), que estará compuesto en este caso por un objeto:
   { producto: "pera", cantidad: 12 }
   el nombre del producto debe obtener del array de alimentos usando el subíndice al azar del paso previo, y la
   cantidad es directamente la ya generada al azar.

5) Mostrar finalmente por consola la cantidad de items en el pedido y el listado de items, uno por uno.

6) Qué problema podemos observar al probar varios pedidos?. Intentar al menos 2 o 3 variantes para resolver la situación.

*/

// Definiciones de constantes y variables
const LIMITE_AZAR = 10;
const alimentos = ['Frutilla', 'Manzana', 'Pera','Tomate','Naranja', 'Lechuga', 'Zanahoria', 'Papa','Apio','Cebolla', 'Pepino'];
const pedido = [];

const ctd_items_pedido = Math.floor(Math.random() * LIMITE_AZAR) + 1;


// Declaraciones de funciones
function mostrar_mensaje() {
    console.log('Esta es la expresión más básica de una función');
}

function generar_nro_al_azar(limite) {
    const nro_al_azar = Math.floor(Math.random() * limite) + 1;
    return nro_al_azar;
}


// Flujo principal de código
for (let c = 0; c < ctd_items_pedido; c++) {
    const indice_al_azar = generar_nro_al_azar(alimentos.length - 1);
    const cantidad_al_azar = generar_nro_al_azar(LIMITE_AZAR);

    const nuevo_item = {
        producto: alimentos[indice_al_azar],
        cantidad: cantidad_al_azar
    };

    pedido.push(nuevo_item);
}

console.log('Cantidad de items en pedido:', pedido.length);
for (let c = 0; c < pedido.length; c++) {
    console.log(pedido[c]);
}
mostrar_mensaje();
console.log('Ejecución finalizada');