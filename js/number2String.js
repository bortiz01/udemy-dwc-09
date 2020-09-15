/* -------------------------------------------------------------------------- */
/*                              Number to String                              */
/* -------------------------------------------------------------------------- */

let dato = 8956654654321321;

//number to string
dato = String(dato);

console.log(dato);

//el length funciona solo con string
console.log(dato.length)

dato = String(true);
console.log(dato);

//date type
dato = new Date();
console.log(dato);

//date in string
dato = String(new Date());
console.log(dato);

//array string
dato = [1, 2, 5, 6, 8];
console.log(dato);
dato = String(dato);
console.log(dato);
console.log(dato.length);