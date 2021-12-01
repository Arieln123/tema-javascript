/*2) Programa una función que te devuelva el texto recortado 
según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

const cadena="Hola Mundo";
let cadena2="",cadena3="";
const palabras={
    texto:"Hola Mundo"
}
function miFuncion(texto,dato){
    
    return texto.slice(0,dato);
}

for(let i=0; i<4;i++){
    cadena2+=cadena[i];
}
cadena3=palabras.texto.slice(0,4);
console.log(miFuncion(cadena,4));
console.log(cadena2);
console.log(cadena3);








let saludo = "Hola Mundo  como andas";
let n= 15;

function recortado(texto,valor){
    let saludo2 = texto.slice(0,valor);
return saludo2;
}


console.log(recortado(saludo,n));