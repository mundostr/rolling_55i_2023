// Primeros conceptos de objetos

// Constantes y variables
// Así como declaro variables individuales o arrays, puedo declarar
let var01 = 23;
let array01 = [23, 15, 40];

// puedo declarar objetos que agrupan distintas propiedades
const heladera = {
    id: 1430,
    nombre: 'Heladera Whirpool',
    precio: 400000,
    en_stock: true
};
// Como ya mencionamos en varias oportunidades, los arrays en Javascript permiten almacenar
// distintos tipos de datos, no tienen por qué ser todos los items del mismo tipo, no obstante
// la notación de objeto es muy cómoda y ordenada cuando hay que manejar paquetes de diferentes
// tipos de datos relacionados a un elemento (como en este ejemplo la heladera)


// Declaraciones de funciones
function mostrarDatos(producto) {
    // El acceso a las propiedades de un objeto, se realiza cómodamente mediante la notación de punto
    console.log(producto.nombre);
    console.log(producto.precio);
    console.log(producto.en_stock);
}


// Flujo principal
mostrarDatos(heladera);
// Alternativamente podemos utilizar la notación de corchetes para acceder o modificar una propiedad,
// pero en lugar de un subíndice utilizaremos por supuesto el nombre de la propiedad
heladera['precio'] = 415000; // equivalente a heladera.precio = 415000
mostrarDatos(heladera);