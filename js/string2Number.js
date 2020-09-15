/* -------------------------------------------------------------------------- */
/*                              String To Number                              */
/* -------------------------------------------------------------------------- */

let numero1 = 50,
    numero2 = '10',
    numero3 = 'tres',
    numero4 = '20.20';

//concatena los valores debido el numero string y al signo +
console.log(numero1 + numero2);

//convierte el valor string en numerico - entero
console.log(parseInt(numero2) + numero1);

//convierte el valor string en numerico - decimal
console.log(parseFloat(numero4) + numero1);

//no es posible convertir un numero en texto a su valor numerico
console.log(Number(numero3));

//convertir un valor string de numero, en completo numerico
console.log(Number(numero4));

//convertir un bool a su representacion numerica
console.log(Number(true));
console.log(Number(false));

//indicar posiciones decimales fijas
let numero5 = '102023050.256336',
    numero6 = 2132154646.654654;

console.log(Number(numero5).toFixed(3))
console.log(numero6.toFixed(3))
