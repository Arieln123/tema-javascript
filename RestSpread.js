// parametro rest  lo  usas cuando no sabes la cantidad de parametros son los ...variable


function sumar(a,b,...c){
    let resultado=a+b;

    c.forEach(function(n){
        resultado+=n;
    });
    return resultado;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,5)); // todos los numeros que vaya agregando van a in en el parametro c

/////////operador spread


const arr1=[1,2,3,4,5],
    arr2=[6,7,8,9,0];

console.log(arr1,arr2); // son dos arreglos
const arr3=arr1+arr2; // aca los uni en un string
const arr4=[...arr1,...arr2]; // aca los uni en un mismo arreglo

console.log(arr3);
console.log(arr4);
console.log(typeof arr3);     // el tipo de 3 es string 
console.log(typeof arr4);     // el tipo es object  ya que es un arreglo