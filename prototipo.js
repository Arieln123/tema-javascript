/*
clase= modelo a seguir.
objeto= es una instancia de una clase
atributos= es una caracteristica o propiedad del objeto
metodo = son las acciones que el objeto puede realizar ( funciones)*/



const  Persona={
    nombre:"Ariel",
    apellido:"Nicosia"     // esto se hace  para un objeto, el tema viene cuando tenes 400 objetos, se repite el codigo
    // por eso uso una funcion constructora...
}



//funcion constructora


function serhumano(nombre,apellido){
    //atributos
    this.nombre=nombre;
    this.apellido=apellido;
    //metodos
    this.habilidad=function(){
        console.log("se sumar");
    }
}
serhumano.prototype.poder=function(){ // aca al metodo lo pego a la funcion, la funcion no viene con el metodo por defecto
    console.log("soy fuerte");// es mejor  pegar el metodo a la funcion asi no se  usa espacio al pedo
}

/*class serhumano {
    constructor(nombre, apellido) {
        //atributos
        this.nombre = nombre;        /
        this.apellido = apellido;

        this.habilidad = function () {
            console.log("se sumar");
        };
    }
}*/ //  esto seria en la verios mas moderna

const ariel=new serhumano("Ariel","Nicosia");

console.log(ariel);
ariel.habilidad();
ariel.poder();