/* -------------------------------------------------------------------------- */
/*                       Conditions / Control Structure                       */
/* -------------------------------------------------------------------------- */

/* ------------------------------- Sentence IF ------------------------------ */
const puntaje = 1000;

// == compara solo el valor
// === compara el valor y el tipo de dato
// != diferente del valor
// !== diferente del valor o el tipo
console.log('-- IF --');
if (puntaje != '1000') {
    console.log('No es igual');
} else if (puntaje === '1000') {
    console.log('Es de igual valor, y del mismo tipo');
} else if (puntaje == '1000') {
    console.log('Es de igual valor, pero de tipo diferente')
} else {
    console.log('No es igual');
}

console.log('\n');
let valor = 0;

if (valor === 0) {
    console.log('Igual a 0');
} else if (valor < 0) {
    console.log('Menor a 0');
} else if (valor > 0) {
    console.log('Mayor a 0');
} else {
    console.log('Valor no definido');
}


/* ----------------------------- Sentence SWITCH ---------------------------- */
console.log('\n')
console.log('-- SWITCH --');

const metodoPago = 'cheque';

switch (metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}. Revisaremos los fondos`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago} espere un momento...`)
        break;
    default:
        sinPago();
}

function sinPago() {
    console.log('Aun no has pagado');
}