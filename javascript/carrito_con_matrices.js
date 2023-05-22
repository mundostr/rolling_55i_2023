/*
Supongamos que contamos con una página que ofrece determinados productos.

Para poder comprar, el usuario es consultado si desea pedir un producto, si es así,
se le listan los disponibles y se le pide el id del producto elegido, repitiendo indefinidamente
mientras quiera continuar comprando.

No hay límite de productos para el pedido.
*/

// Declaramos una matriz vacía
let productos_en_carrito = [];
let cargar_producto;
let id_producto_a_cargar;

// Utilizamos un do while para garantizar que el contenido del ciclo
// se ejecute al menos una vez
do {
    // El confirm nos retorna true / false
    cargar_producto = confirm('Desea cargar un producto al carrito?:');
    
    if (cargar_producto === true) {
        // prompt nos permite ingresar un valor
        id_producto_a_cargar = prompt('Ingresar código:');
        // push agrega el elemento al final de la matriz
        productos_en_carrito.push(id_producto_a_cargar);
    }
} while (cargar_producto === true)

console.log('Productos en carrito:');
console.log(productos_en_carrito);

// Una de las alternativas para "iterar" (recorrer) una matriz
for (let c = 0; c < productos_en_carrito.length; c++) {
    console.log(productos_en_carrito[c]);
}