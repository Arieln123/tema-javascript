/*cortocircuito OR--- cuando el valor de 
la izquiera en la expresion siempre 
pueda validar a true, es el valor
que se va a cargar por defecto---
cortocicuito AND, cuando el valor de la izquierda en la 
expresion pueda validar false ,es el valor que se va a cargar por defecto*/



console.log("aca es con ||");
console.log("cadena"||"valor de la derecha");
console.log(19||"valor de la derecha");
console.log(true||"valor de la derecha");
console.log(""||"valor de la derecha");
console.log([]||"valor de la derecha");
console.log(false||"valor de la derecha");
console.log(null||"valor de la derecha")


console.log("aca es la parte con &&");
console.log("cadena"&&"valor de la derecha");
console.log(19 &&"valor de la derecha");
console.log(true &&"valor de la derecha");
console.log(undefined &&"valor de la derecha");
console.log([] &&"valor de la derecha");
console.log(false &&"valor de la derecha");
console.log(null &&" valor de la derecha");