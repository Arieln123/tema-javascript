let nombre="Ariel",
    edad=30;


const persona={
    nombre:nombre,
    edad:edad,
    sumar:function(){
        console.log("2+2= 4 :D");
    }
}    
console.log(persona); // aca muestro todo lo que hay en persona
persona.sumar(); // aca uso la funcion que hay en persona

const arielNicosia={
    nombre,     // aca  podria ir nombre:nombre pero es lo mismo  asi que es mas facil dejar solo nombre
    edad,
    apellido:"Nicosia",
    restar(){              // esta forma de escribir funciones es mas facil
        console.log("2-2=0");
    }
}
console.log(arielNicosia);
arielNicosia.restar();