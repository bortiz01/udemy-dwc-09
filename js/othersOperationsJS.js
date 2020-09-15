/* -------------------------------------------------------------------------- */
/*                            .Filter .Find .Reduce                           */
/* -------------------------------------------------------------------------- */

const personas = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Maria', edad: 15 },
    { nombre: 'Elias', edad: 28 },
    { nombre: 'Gabriel', edad: 21 },
    { nombre: 'Noel', edad: 36, aprendiendo: 'Oracle Server' },
    { nombre: 'Loren', edad: 16 }
]

/* --------------------------------- .filter -------------------------------- */
//obtener las personas mayores de 25

console.log('-- .FILTER --');
const mayores = personas.filter(persona => persona.edad > 25)

console.log(mayores);


/* ---------------------------------- .find --------------------------------- */
//extraer informacion 
console.log('\n');
console.log('-- .FIND --');

const getPerson = personas.find(persona => persona.nombre === 'Noel');

console.log(getPerson);

let { aprendiendo } = getPerson;
console.log(aprendiendo);


/* --------------------------------- .reduce -------------------------------- */
console.log('\n');
console.log('-- .REDUCE --');

//similar al having en SQL
let total = personas.reduce((edadTotal, persona) => edadTotal + persona.edad, 0);

console.log(total);
console.log((total / personas.length).toFixed(2));