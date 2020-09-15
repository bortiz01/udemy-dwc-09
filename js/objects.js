/* -------------------------------------------------------------------------- */
/*                                   Objects                                  */
/* -------------------------------------------------------------------------- */

/* ------------------------ object literal - estatico ----------------------- */
console.log('-- Object Literal --');

//crear un objeto
const persona = {
    nombre: 'Bayron',
    apellido: 'Ortiz',
    edad: 31,
    trabajo: true,
    musica: ['Rock', 'Balada', 'Merengue', 'Bachata'],
    hogar: {
        ciudad: 'Choluteca',
        pais: 'Honduras'
    },
    anioNacimiento: function () {
        return new Date().getFullYear() - this.edad;
    }
}

//acceder a los valores de un objeto
console.log(persona);
console.log(persona.edad);
console.log(persona.musica);
console.log(persona.musica[1]);
console.log(persona.hogar);
console.log(persona.hogar.ciudad);
console.log(persona.anioNacimiento());

//otra forma poco comun de acceder
console.log(persona['hogar']['ciudad']);


/* --------------------------- object constructor --------------------------- */
console.log('\n');
console.log('-- Object Constructor --');

//crear objecto
function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

const tarea1 = new Tarea('Aprender Javascript', 'Urgente');
console.log(tarea1);

/* ---------------------------------- object Class --------------------------------- */
console.log('\n');
console.log('-- Object Class --');

//crear objeto
class Tarea2 {
    constructor(nombre, urgencia) {
        this.nombre = nombre;
        this.urgencia = urgencia;
    }
}

const tarea2 = new Tarea2('Preparar Cafe', 'Media');
console.log(tarea2);