/* -------------------------------------------------------------------------- */
/*                                  Fetch API                                 */
/* -------------------------------------------------------------------------- */

function descargaUsuarios(cantidad) {
    const api = `https://randomuser.me/api/?results=${cantidad}`;

    fetch(api)
        .then(respuesta => respuesta.json())            //primer valor debe ser el tipo
        // .then(datos => console.log(datos.results));     //secgundo valor debe ser el resultado
        .then(datos => imprimirHTML(datos.results));
}

function imprimirHTML(datos) {
    datos.forEach(usuario => {
        const li = document.createElement('li');

        const { name: { first }, name: { last }, picture: { medium }, nat } = usuario;

        li.innerHTML = `
            Nombre: ${first} ${last}
            Pais: ${nat}
            Imagen: <img src=${medium}>
        `;
        document.querySelector('#app').appendChild(li);
    });
};

descargaUsuarios(3);