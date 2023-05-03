// el callbak llama una funcion para ejecutar otra funcion
function calculator(n1, n2, operator){
    return operator (n1, n2)
}
function add(n1, n2){
    return n1 + n2;
}
const result = calculator (5, 5, add);
console.log(result);
