const numeros=[1,2,3];

const  [uno,dos,tres]=numeros;
console.log(uno,dos,tres);
console.log(uno,dos);

const persona={
    nombre:"Ariel",
    apellido:"Nicosia",
    edad:30
}
let {apellido,nombre,edad}=persona; // busco en el objeto algo con el mismo nombre y se lo asigno,
// puedo tomar menos parametros de los que tengo
console.log(nombre,apellido);
console.log(nombre,apellido,edad);
console.log(edad,apellido,nombre);

// la destructuracion es cuando  tengo un arreglo u objeto que no se bien que tiene y 
//lo mando a mis variables que si conozco, puedo tomar menos valores pero no mas
