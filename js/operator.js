/* -------------------------------------------------------------------------- */
/*                                  Operator                                  */
/* -------------------------------------------------------------------------- */

/* ----------------------------- Operador Normal ---------------------------- */
console.log('-- Operador && || --')

let valor;
valor = 1000;

if (valor < 0) {
    console.log('Valor negativo');
} else if (valor >= 0 && valor <= 999) {
    console.log('Entre 0 y 99')
} else if (valor >= 1000 || valor === undefined) {
    console.log('Valor no esperado');
}


/* -------------------------------- Ternario -------------------------------- */
console.log('\n');
console.log('-- Operador Ternario --')

let logueado;

logueado = true;

//CONDICION ? SI ES VERDADERO : SINO
console.log(logueado ? 'Si se logueo' : 'No se logueo');