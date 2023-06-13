/*
Primeros conceptos de clases

Recordar que una clase es esencialmente un molde, con el cual definimos las distintas características (propiedades)
y métodos (acciones) que nos interesan sobre un objeto, para luego utilizar ese molde y crear tantas copias (instancias)
como necesitemos
*/

// Desde hace tiempo, Javascript soporta la sintaxis standard mediante class
// Por lo general las clases se nombran en singular y con la primer letra en mayúscula
class Deportista {
    // El contenido del constructor se ejecuta de manera automática cada vez que se crea un
    // nuevo objeto (nueva instancia) del tipo de la clase.
    constructor(nombre, peso, estatura, edad) {
        if (typeof(nombre) === 'undefined' || typeof(peso) === 'undefined' || typeof(estatura) === 'undefined' || typeof(edad) === 'undefined') {
            throw new Error('Faltan parámetros obligatorios');
        }

        // La palabra reservada this, hace referencia a cada instancia, es decir, asigna en este caso
        // los parámetros nombre, peso, estatura y edad a las variables internas de la instancia
        this.codigo = this.generar_id_automatico();
        this.nombre = nombre;
        this.peso = peso;
        this.estatura = estatura;
        this.edad = edad;
    }

    // Método normal
    // Los métodos no son más que funciones declaradas, que se pueden invocar utilizando su nombre
    // mediante la notación de puntos.
    generar_id_automatico() {
        return 'ABC123';
    }

    enviar_cv_deportivo() {
    }

    imprimir_datos() {
        console.log(`${this.nombre} (${this.peso} kg), ${this.estatura} m, ${this.edad} años`);
    }
}


// Creamos una nueva instancia de tipo Deportista, es decir, en otras palabras un nuevo deportista,
// utilizando como molde la clase que acabamos de definir.
const deportista_01 = new Deportista('Carlos Perren', 86, 1.74, 48, 'J Basco 100');

// Una vez instanciado el objeto, a través de la notación de puntos podemos acceder a sus métodos y propiedades
deportista_01.imprimir_datos();