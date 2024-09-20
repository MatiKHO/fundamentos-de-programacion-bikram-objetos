// Objetos
const Coche = {
    marca: 'Peugueot',
    modelo: '308',
    matricula: 'MNL 1234'
}

const Casa = {
    codPostal:21304,
    calle: 'Calle de la Amargura 23',
    portal: '8',
    piso: '3 DCHA',
}

const FullStackDeveloper = {
    lenguajes: ['HTML', 'CSS', 'Javascript'],
    proyectos: ['Pagina 1', 'Pagina 2', 'Pagina 3'],
}

const Perro = {
    nombre: 'Lisa',
    raza: 'Podenco',
    color: 'Marrón',
    edad: '2 años',
    ladrar: function () {
        return console.log('Guau!');
    },
    popo: function() {
        return Math.random() * 3;
    },
}

// Lectura de propiedades

let marcaPortatil = Portatil.marca;

let marcaPortatil2 = Portatil['marca'];

let grupos = Concierto['grupos'];

let RGB = [Led.rojo, Led.verde, Led.azul];

// Modificación de propiedades

Portatil.modelo = 'P345'; // Modificación de propiedad

Concierto.cartelera.push("Guns N' Roses"); // -> Añadimos la propiedad con push() ya que se trata de un array.

Concierto.fecha = new Date();

Impresora.imprimiendo = {
    nombreArchivo:'Archivo', 
    copias: 1, 
    numPaginas: 2,
}; // Para un objeto, usamos {} y dentro ponemos las propiedades asginándoles un valor.

// Objetos - Declaración

const Noticia = {
    titular:'Robert Downey Jr será Dr. Doom', cuerpo:'lorem impsum',
};

const Persona = {
    nombre: 'Matías',
    apellidos: 'Gómez Suárez',
    edad: 27,
};

const Avion = {
    numPasajeros: 100,
    despegar: function() {
        return console.log('despegando');
    },
    volar: function() {
        return console.log('llegando al destino');
    },
    aterrizar: function() {
        return console.log('aterrizando');
    },
};

const Paquete = {
    contenido: ['caja','envoltorio','regalo']
};

const Pais = {
    numHabitantes: 45000000,
    continente: 'Europa',
    gentilicio: 'Españoles',
};

// Lectura de propiedades

let codError = O_Error.codigo;

let integrantes = Grupo['integrantes'];

let nivelesTinta = Impresora.tinta;

let pixeles = Pantalla['pixeles'];

let especificaciones= Movil['especificaciones'];

//  Modificación de propiedades

Grupo.numIntegrantes = 5;

Pantalla.dimensiones = '1920x1080';

Led.encendido = !Led.encendido;

Movil.temperatura = '20º'








  

