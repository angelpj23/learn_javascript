const list = 
["fulano", "de tal", "chipero", function(){console.log("DNCD");
return "asi mismo";}]; // el return es para no mostrar undifined
console.log(list[3]());

// el indice 3 esta dentro de una funcion, por lo que se le agrega () al imprimir