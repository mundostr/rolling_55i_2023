/*
Supongamos que contamos con una página que ofrece determinados productos.

Para poder comprar, el usuario es consultado si desea pedir un producto, si es así,
se le listan los disponibles y se le pide el id del producto elegido, para almacenarlo en el carrito.

Hay un límite de 3 productos por pedido.
*/

let id_producto_01;
let id_producto_02;
let id_producto_03;
let cargar_producto;

/* cargar_producto = confirm('Desea pedir el producto 1?:');
if (cargar_producto === true) {
    id_producto_01 = prompt('Ingresar código producto 1');
}

cargar_producto = confirm('Desea pedir el producto 2?:');
if (cargar_producto === true) {
    id_producto_02 = prompt('Ingresar código producto 2');
}

cargar_producto = confirm('Desea pedir el producto 3?:');
if (cargar_producto === true) {
    id_producto_03 = prompt('Ingresar código producto 3');
} */

for (let x = 1; x <= 3; x++) { // x++ equivalente a x = x + 1
    cargar_producto = confirm('Desea pedir el producto ' + x + '?:');

    if (cargar_producto === true) {
        if (x === 1) id_producto_01 = prompt('Ingresar código producto 1');
        if (x === 2) id_producto_02 = prompt('Ingresar código producto 2');
        if (x === 3) id_producto_03 = prompt('Ingresar código producto 3');
    }
}

console.log('Productos en carrito:');
console.log(id_producto_01);
console.log(id_producto_02);
console.log(id_producto_03);
