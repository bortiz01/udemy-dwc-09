/* -------------------------------------------------------------------------- */
/*                                    LOOPS                                   */
/* -------------------------------------------------------------------------- */

/* ----------------------------------- For ---------------------------------- */
console.log('-- For --')

const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
}


/* ---------------------------------- While --------------------------------- */
console.log('\n');
console.log('-- While --');

let i = 0;
while (i < carrito.length) {
    console.log(`Articulo: ${carrito[i]}`);
    i++;
}


/* -------------------------------- Do While -------------------------------- */
//La diferencia entre los dos anteriores, es que este se ejecuta al menos una vez.
console.log('\n');
console.log('-- Do While --');

let j = 0;
do {
    console.log(j);
    j++;
} while (j < 10);


/* --------------------------------- For - JS -------------------------------- */
console.log('\n');
console.log('-- For JS --');

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];
const compras = [
    { id: 1, producto: 'Libro' },
    { id: 2, producto: 'Camisa' },
    { id: 3, producto: 'Disco' },
];

const automovil = {
    modelo: 'Camaro',
    Motor: '6.0',
    anio: 2015,
    marca: 'Chevrolet'
}

for (pendiente of pendientes) {
    console.log(pendiente);
}

console.log('\n');
for (compra of compras) {
    console.log(compra.producto);
}

console.log('\n');
for (info of Object.values(automovil)) {
    console.log(info);
}


/* ---------------------------- For Each / Map -------------------------------- */
console.log('\n');
console.log('-- For Each --');

pendientes.forEach(pendiente => {
    console.log(pendiente);
});

console.log('\n');
pendientes.map(pendiente => {
    console.log(pendiente);
})

//no retorna los valores a la variables
let nuevoArreglo = pendientes.forEach(pendiente => pendiente);

//si retorna los valores a la variables
let nuevoArreglo2 = pendientes.map(pendiente => pendiente);

console.log('\n');
console.log(nuevoArreglo);
console.log(nuevoArreglo2);

console.log('\n');
Object.values(automovil).forEach(info => {
    console.log(info);
})

console.log('\n');
Object.keys(automovil).forEach(info => {
    console.log(info);
})