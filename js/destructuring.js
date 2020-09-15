/* -------------------------------------------------------------------------- */
/*                                Destructuring                               */
/* -------------------------------------------------------------------------- */

//creamos un objeto
const cliente = {
    nombre: 'Alejandra',
    tipo: 'Preimum',
    datos: {
        ubicacion: {
            ciudad: 'Choluteca',
            pais: 'Honduras',
        },
        cuenta: {
            desde: '10-12-2012',
            saldo: 4000
        }
    }
}

console.log(cliente);


/* ----------------------------- Forma anterior ----------------------------- */
console.log('-- Forma anterior --');

let nombreCliente = cliente.nombre,
    tipoCliente = cliente.tipo,
    ciudadCliente = cliente.datos.ubicacion.ciudad;

console.log(nombreCliente);
console.log(ciudadCliente);


/* ------------------------------- Forma nueva ------------------------------ */
console.log('\n');
console.log('-- Forma nueva --');

let { nombre } = cliente;
let { datos: { ubicacion: { ciudad } } } = cliente;

console.log(nombre);
console.log(ciudad);