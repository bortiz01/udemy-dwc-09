/* -------------------------------------------------------------------------- */
/*                                    Scope                                   */
/* -------------------------------------------------------------------------- */

//es la visibilidad de una variable

/* ----------------------------------- var ---------------------------------- */
//El var tiene un scope muy amplio y tiende a complicarse 
//al momento de definir variables con el mismo nombre 
//dentro de funciones o condicones
console.log('-- Sin scope definido --');

var musica = 'Rock';

if (musica) {
    var musica = 'Balada';
    console.log(musica);
}

console.log(musica);


/* ------------------------------- let / const ------------------------------ */
//con LET o CONST podemos definir variables que puedan ser 
//nombradas igual que una variable de fuera como dentro de 
//una condicion o funcion
console.log('\n');
console.log('-- Scope definido --');

let musica2 = 'Rock';

if (musica2) {
    let musica2 = 'Balada';
    console.log(musica2);
}

console.log(musica2);