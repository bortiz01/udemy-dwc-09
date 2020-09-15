/* -------------------------------------------------------------------------- */
/*                                   Numbers                                  */
/* -------------------------------------------------------------------------- */

const numero1 = 30,
    numero2 = '20',
    numero3 = 20.20,
    numero4 = -3,
    numero5 = 20;

let resultado;

//suma
resultado = numero1 + numero2;

//resta
resultado = numero1 - numero2;

//multiplicacion
resultado = numero1 * numero2;

//division 
resultado = numero1 / numero2;

//clase math
//redondeo normal
resultado = Math.round(2.5);
//redondeo hacia abajo
resultado = Math.floor(2.5);
//redondeo hacia arriba
resultado = Math.ceil(2.5);

//raiz cuadrada
resultado = Math.sqrt(144);
//valor absoluto
resultado = Math.abs(-20);
//potencia
resultado = Math.pow(8, 3);

//valor maximo
resultado = Math.max(10, 2, 54, 60, 5);
//valor minimo
resultado = Math.min(10, 2, 54, 60, 5);

//operaciones
resultado = (30 + 20) * 2;
//sumar un valor a la misma variable
resultado += 20;
//sumar 1 
resultado = ++resultado;
//restar 1
resultado = --resultado;
//restra un valor a la misma variable
resultado -= 50;

//salida en pantalla
console.log(resultado);

