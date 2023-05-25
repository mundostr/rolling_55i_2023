/*

0) Crear un index.html con formato base e insertar referencias css y javascript para poder utilizar Bootstrap.
   El título en el head debe ser Módulo II Javascript - Prácticas grupales, y lo mismo debe verse en un h1 en el body.
   Colocar el código JS que se solicita debajo en un archivo por separado, e insertarlo con la etiqueta script para
   poder probar su salida de consola desde el navegador.
   
1) Declarar 2 arrays con al menos 5 items cada uno, el primero conteniendo nombres de frutas, el otro de verduras.

2) Mostrar por consola los arrays completos, como conjunto.

3) Mostrar por consola el contenido de los arrays item por item.

4) Insertar un nuevo item al final del array de frutas y mostrarlo actualizado como conjunto.

5) Quitar el 2do item del array de verduras y mostrarlo actualizado como conjunto.

6) Mostrar solo el valor del 3er item del array de frutas.

7) Qué nombre de método se puede utilizar para "unir" los dos arrays en otro llamado alimentos?. Tenés ganas de chequear cómo usarlo?.

*/

// 1
let frutas = ['Frutilla', 'Manzana', 'Pera','Tomate','Naranja'];
let verduras = ['Lechuga', 'Zanahoria', 'Papa','Apio','Cebolla'];

// 2
console.log(frutas);
console.log(verduras);

// 3
for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index]);
}
for (let index = 0; index < verduras.length; index++) {
    console.log(verduras[index]);
}

// 4
frutas.push('mango');
console.log(frutas);

// 5
verduras.splice(1, 1);
console.log(verduras);

// 6
console.log(frutas[2]);

// 7
const alimentos = frutas.concat(verduras);
console.log(frutas);
console.log(verduras);
console.log(alimentos);