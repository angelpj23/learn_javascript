'use strict'

// Funciones de flecha y Callback

// Es una funcion que no tiene nombre


var pelicula = nombre => {
    return "La pelicula es: "+nombre;
}

// Un Callback

// Es una funcion que ejecuta otra funcion dentro

function sumame(numero1, numero2){
    var sumar = numero1 + numero2;
    
    return sumar;
}

console.log(sumame(4,5));






