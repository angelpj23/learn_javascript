'use strict'

var categorias = ['accion', 'terror', 'miedo'];

var peliculas = ['Torrente', 'Torrente2','Torrente3','Torrente4'];

var cine = [categorias, peliculas];

// console.log(cine[0][1]);

var elemento = prompt("Introduce tu pelicula:");

while(elemento != "acabar"){
      elemento = prompt("Introduce tu pelicula:");
    peliculas.push(elemento);
      }

console.log(peliculas);

/*
 PUSh: Agrega algo en un array
*/





