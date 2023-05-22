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

do {
    cargar_producto = confirm('Desea cargar un producto al carrito?:');
    
    if (cargar_producto === true) {
        id_producto_a_cargar = prompt('Ingresar código:');
        productos_en_carrito.push(id_producto_a_cargar);
    }
} while (cargar_producto === true)

console.log('Productos en carrito:');
console.log(productos_en_carrito);

// Una de las alternativas para "iterar" (recorrer) una matriz
for (let c = 0; c < productos_en_carrito.length; c++) {
    console.log(productos_en_carrito[c]);
}