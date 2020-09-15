/* -------------------------------------------------------------------------- */
/*                                   Arrays                                   */
/* -------------------------------------------------------------------------- */

//crear un arreglo
const numeros = [10, 20, 30, 40, 50];

console.log(numeros);
console.table(numeros);

//otr forma poco comun de crearlo
const meses = new Array('Enero', 'Febrero', 'Marzo');
console.log(meses);
console.log(meses[1]);

//puede contener lo que sea!!!
const arreglo = ['Hola', 10, true, 'si', null, undefined];
console.log(arreglo);

//verificar si la variable contiene un arreglo
let nombre = 'Bayron';
console.log(Array.isArray(nombre));

//adicionar valores a un array definido
//poco comun
console.log(meses);
meses[3] = 'Abril';
console.log(meses);

//utilizada (adiciona al final)
meses.push('Mayo');
console.log(meses);

//adiciona al inicio del arreglo
meses.unshift('Mes 0');
console.log(meses);

//eliminar el ultimo indice
meses.pop();
console.log(meses);

//eliminar el primer indice
meses.shift();
console.log(meses);

//eliminar un rango del arreglo (posicion de inicio y cantidad a borrar)
meses.splice(0, 1);
console.log(meses);

//invertir valores del arreglo
meses.reverse();
console.log(meses);

//ordenar un arreglo
meses.sort();
console.log(meses);