/* -------------------------------------------------------------------------- */
/*                                   Metodos                                  */
/* -------------------------------------------------------------------------- */

//declaracion inicial
const musica = {
    reproducir: function (cancion) {
        console.log(`Reproduciendo la cancion: ${cancion}`);
    },
    pausar: function () {
        console.log('Pausada...');
    }
}

//se puede agregar nuevos metodos/funciones por fuera de la declaracion inicial
musica.borrar = function (id) {
    console.log(`Borrando la cancion #${id}`)
}


musica.reproducir('Hotel California');
musica.pausar();
musica.borrar(2);