'use strict'

// Arrays, Arreglos, Matrices

var nombre = "Sebastian";

var nombres = ["Sebastian","Juan", "Jose", "Sandra"]
//                  0       1       2       3
var lenguajes = new Array("PHP", "Wordprees", "Angular");
/*
var elemento = parseInt(prompt("Que elemento del array quieres??",0));

if(elemento >= nombres.length){
   alert("Introduce el numero correcto menor que " +nombres.length);
   }else{
       alert("El usuario seleccionado es: "+nombres[elemento]);
   }
*/

document.write("<h1>Lenguajes de Programacion</h1>");
document.write("<ul>");
/*
for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
*/

lenguajes.forEach((elemento) =>{
   document.write("<li>"+elemento+"</li>"); 
});


document.write("</ul>");





