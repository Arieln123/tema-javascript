const saludo1=function(){
    console.log("hola 1")       //funcion declarada
}
saludo1();



const saludo2= ()=> console.log("saludo 2"); // arrow  de una linea
saludo2();
const saludo3=(nombre)=> console.log(`saludo 3 ${nombre}`); //arrow co nun parametro

saludo3("ariel");


const sumar=(a,b)=> a+b;        //una sola linea, no necesito return
console.log(sumar(1,4));


const promedio=(a,b)=>{         //mas lineas con parametro, hay que poner el return
    let suma=a+b;
    let promedio=(a+b)/2;
    return promedio
}
console.log(promedio(3,6));

// las arrowf se saltan el contexto en el que estan, si pongo una arrowf en un objeto, 
//el this toma a windows o el objeto globar y no el objeto particular asi que ojo con poner arrowf en objetos


const ariel={
    nombre:"Ari",
    apellido:"nicosia",
    edad:function(){
        console.log(this)
    },
    altura:()=>console.log(this) 
}
ariel.edad();// aca reconoce todo el objeto
ariel.altura(); // aca toma todo lo que hay mas arriba