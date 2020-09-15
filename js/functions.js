/* -------------------------------------------------------------------------- */
/*                                  Funciones                                 */
/* -------------------------------------------------------------------------- */

/* -------------------------- function declaration -------------------------- */
//es posible declararla despues de utilizarla
console.log('-- Function Declaration --');

saludar('Bayron', 'Desarrollador');

function saludar(nombre = 'Visitante', trabajo = 'No sabemos') {
    console.log(`Hola ${nombre}, tu trabajo es de ${trabajo}`);
}

saludar();
saludar('Juan');
saludar('Tecnico');

function raiz(val = 0) {
    return Math.sqrt(val);
}

let raizC = raiz(25);
console.log(`La raiz cuadrada es: ${raizC}`);


/* --------------------------- function expression -------------------------- */
//debe de estar declarada antes de utilizarla
console.log('\n');
console.log('-- Function Expression --');

const suma = function (val1 = 0, val2 = 0) {
    console.log(val1 + val2);
}

suma(10, 20);
suma(10);
suma(20);
suma();


const multiplicar = function (a = 0, b = 0) {
    return a * b;
};

let resultado = multiplicar(100, 5);
console.log(resultado);


/* ---------------------------------- IIFE ---------------------------------- */
//invocacion inmediata
console.log('\n');
console.log('-- IIFE --');

(function (tecnologia) {
    console.log(`Aqui estoy aprendiendo ${tecnologia}`);
})('Javascript');

let residuo = (function (a = 0, b = 0) {
    return a - b;
})(200, 1000);

console.log(residuo);


/* ----------------------------- arrow functions ---------------------------- */
console.log('\n');
console.log('-- Arrow Functions --');

// let viajando = function (destino) {
//     return `Viajando a la ciudad de ${destino}`;
// }

let viajando = destino => `Viajando a la ciudad de ${destino}`;

let viaje = viajando('Roma');
console.log(viaje);

let info = (nombre, apellido, edad = 0, profesion = 'Sin definir') => `Nombre: ${nombre}, Apellido: ${apellido}, Edad: ${edad}, Profesion: ${profesion}`;

console.log(info('Bayron', 'Ortiz', 0, 'Sistemas'));
console.log(info('Bayron', 'Ortiz'));