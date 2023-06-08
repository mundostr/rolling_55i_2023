/*
Prácticas de declaración de objetos y carga en array
*/

// Declaración de objetos
// Declaramos 3 objetos para almacenar datos de personas, que contienen el mismo tipo de propiedades
// (nombre, edad, dni, domicilio, hijos, profesion)
const persona1 = {
    nombre: 'Felipe Saed',
    edad: 20,
    dni: 44376253,
    domicilio: 'Marco Avellaneda 548',
    hijos: 0,
    profesion: 'estudiante'
};

const persona2 = {
    nombre: 'Carlos Mario',
    edad: 35,
    dni: 12364563,
    domicilio: 'Juan Bautista Alberdi 234',
    hijos: 2,
    profesion: 'ingeniero de software'
}

const persona3 = {
    nombre: 'Carlos Mario',
    edad: 36,
    dni: 12364563,
    domicilio: 'Juan Bautista Alberdi 234',
    hijos: 2,
    profesion: 'ingeniero de software'
}

// Carga de array de objetos
// Declaramos un array vacío, y agregamos los objetos previos al array con push
const personas = [];
personas.push(persona1);
personas.push(persona2);
personas.push(persona3);

console.log(personas);

// Recorrido de array de objetos (alternativa tradicional)
// Con un simple for() y aprovechando el método length, podemos recorrer el array
// objeto por objeto.
for (let i = 0; i < personas.length; i++) {
    const item = personas[i];
    console.log(item.nombre);
}

// Recorrido de array de abjetos (expresión reducida)
// Esta expresión alternativa corta, es muy cómoda
for (let x of personas) {
    console.log(x.domicilio);
}

// Encontrar una persona en personas por nombre
// También aprovechando otros métodos como find(), podemos buscar en el array
// find() en este caso, ejecuta la función que le pasemos como argumento para cada
// elemento del array. En caso de verificarle la coincidencia (de item.nombre en el ejemplo)
// nos permite retornar el item
const personaBuscada = personas.find(function (item) {
    if (item.nombre === 'Carlos Mario') {
        return item;
    }
});

console.log(personaBuscada);