/* -------------------------------------------------------------------------- */
/*                          Object Literal Enhacement                         */
/* -------------------------------------------------------------------------- */

//adicionar nuevos valores a un objeto

const banda = 'Metallica',
    genero = 'Rock',
    canciones = ['Master of Puppets', 'Seek & Destroy', 'Enter Sandman'];

/* ----------------------------- Forma anterior ----------------------------- */
console.log('-- Forma Antigua --');

const metallica = {
    banda: banda,
    genero: genero,
    canciones: canciones
}

console.log(metallica);


/* ------------------------------- Forma nueva ------------------------------ */
console.log('\n');
console.log('-- Forma Nueva --');

//el nombre de la llave y el valor debe de ser el mismo 
//para autoincluir los valores

const metallica2 = { banda, canciones, genero }

console.log(metallica2);

