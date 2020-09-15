/* -------------------------------------------------------------------------- */
/*                               Template String                              */
/* -------------------------------------------------------------------------- */

const nombre = 'Bayron',
    trabajo = 'Desarrollador';

//clasico
console.log('Nombre: ' + nombre + ', Trabajo: ' + trabajo);
//template string
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

const contenedorApp = document.querySelector('#mensaje');

//clasico
let html = '<ul>' +
    '<li> Nombre: ' + nombre + '</li>' +
    '<li> Trabajo: ' + trabajo + '</li>' +
    '</ul>';

//template string
let html2 = `<ul>
                <li> Nombre2: ${nombre} </li>
                <li> Trabajo2: ${trabajo} </li>
            </ul>`;

contenedorApp.innerHTML = html2;