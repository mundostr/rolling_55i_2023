// Conforme lo visto en clase.js, creamos una nueva clase llamada Producto,
// con una estructura muy básica de 3 propiedades (atributos) y solo un método.
// Por supuesto podremos luego ir agregando otros.

class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimir_datos() {
        console.log(`(${this.codigo}) ${this.nombre}: ${this.precio}`);
    }
}

// Exportamos la clase para poder así importarla y utilizarla en otros archivos
export { Producto };