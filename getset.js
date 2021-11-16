// un metodo estatico se puede ejecutar sin necesidad de una clase


class persona {
    constructor(nombre, apellido) {
        //atributos
        this.nombre = nombre;        
        this.apellido = apellido;
        this.edad=null;
        this.musica="";
        this.habilidad = function () {
            console.log("se sumar");
        };
    }
    static hola(){
        console.log("hola como andas??"); // se puede ejecutar sin necesidad de instanciar la clase, no me queda muy claro
    
    }
    get  getEdad(){
        this.edad=edad;
    }
    set setEdad(edad){
        this.edad=edad;
    }
    get getMusica(){
        this.musica=musica;
    }
    set setMusica(musica){
        this.musica=musica;
    }
}

// get y set son metodos que nos permiten  poner los  valores de atributo en nuestra clase


const ariel=new persona("Ariel","Nicosia");

persona.hola();
console.log(ariel);
ariel.setEdad=31;
console.log(ariel);

ariel.habilidad();
ariel.setMusica="linkin park";
console.log(ariel);

