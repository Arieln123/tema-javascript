const arreglo=Array(100000),
    numeros=[1,2,3,4,5],
    vocales=["a","e","i","o","u"];
console.time("cuanto tarda mi codigo");


for(let i=0;i<arreglo.length;i++){
    arreglo[i]=i;
}
console.timeEnd("cuanto tarda mi codigo"); // con esto veo cuanto tardo en hacer el for

console.table(numeros); // hago una tabla re cheta para mostrar las cosas con indice y valor

console.table(vocales);
console.log(`aca va una letra %s y aca va un valor %d`,vocales[2],numeros[2]); // otra forma de mostrar las cosas como en c
