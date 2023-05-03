const list = ["fulano", "de tal", "chipero", "DNCD", "asi mismo"];

for (let index = 0; index < list.length; index++)
//el indice debe ser menor (<) a la lista para cuando cuente todos 
//los valores se detenga el bucle
{
    console.log(index);
}

//------------------------------------------------------------------
//tambien se hace con un for tradicional
// const list = ["fulano", "de tal", "chipero", "DNCD", "asi mismo"];
// for (const l of list)
// {
//     console.log(l);
// }