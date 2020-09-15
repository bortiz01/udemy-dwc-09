/* -------------------------------------------------------------------------- */
/*                               Function String                              */
/* -------------------------------------------------------------------------- */

let banda = 'Metallica',
    cancion = 'Enter Sandman';

let nombre;

//contenar variables
nombre = banda + ': ' + cancion;

//concatenar usando funcion
nombre = nombre.concat(' ', '-concatenado-');

//mayuscula
nombre = nombre.toUpperCase();

//minuscula
nombre = nombre.toLowerCase();

//split
let actividad = 'Estoy aprendiendo Javascript con el curso';
nombre = actividad.split(' ');

//reemplazar
nombre = actividad.replace('Javascript', 'JS');

//verificar si existe un texto en la cadena
let email = 'correo@domminio.com';
nombre = email.includes('@');

//repetir un valor
let master = 'Master ',
    puppets = 'Of Puppets';

console.log(master.repeat(3));
console.log(puppets);

//salida del valor de la variable
console.log(nombre);

//tamanho de la variable en caracteres
console.log(nombre.length); //determinar el tamanho del texto