// Por ahora los productos disponibles para compra, los tenemos cargados manualmente en un array,
// esto más adelante llegará de una consulta a una base de datos por ejemplo.


// Esta es una API de prueba generada para la comisión rolling_55i
const URL_API = 'http://pad19.com:3050/';


// Como es el único elemento declarado en el archivo, podemos exportarlo directamente
/* export const productos_disponibles = [
    { codigo: 'ABC120', nombre: 'Aire acondicionado', precio: 230000, stock: 20 },
    { codigo: 'ABC121', nombre: 'Cocina eléctrica', precio: 110000, stock: 20 },
    { codigo: 'ABC122', nombre: 'Termotanque', precio: 130000, stock: 20 },
    { codigo: 'ABC123', nombre: 'Multijuguera', precio: 23000, stock: 2 },
]; */

// Conociendo ahora el manejo de promesas, podemos aprovechar async/await para recuperar el listado de productos
// mediante una llamada a una API externa.
const recuperar_productos = async () => {
    const productos = await fetch(URL_API);
    const productosJson = await productos.json();
    return productosJson;
}

export const productos_disponibles = await recuperar_productos();