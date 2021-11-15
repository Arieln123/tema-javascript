class animal{
    //el constructor es un metodo especial que se ejecuta en el momento de instancia de clase
    constructor(nombre,genero){
        this.nombre=nombre;
        this.genero=genero;
    }
    sumar(){
        console.log("2+2=4");
        console.log(this);
    }
    restar=()=>{
        console.log(this);
        console.log("5-3=2");} 
}

class gato extends animal{
    constructor(nombre,genero,tamanio){
        super(nombre,genero)
    
    this.tamanio=tamanio;
    }
    sonido(){
        console.log("maulla");
    }
    sumar=()=> console.log("10+3=13");
    restar=()=> console.log("4-3=1");  // reescribi de nuevo sumar y restar
}


const lyon=new gato("lyon","macho","flaco");

const niza=new animal("niza","hembra");

console.log(niza);
niza.sumar();  // aca sumar vale 2+2 porque viene de la clase animal
//niza.restar();
console.log(lyon);
lyon.sumar();    // sumar lo modifique en la case gato por eso cambio

//lyon.restar(); // a restar lo modifico en la clase gato
//lyon.sumar(); // viene de la calse constructora animal

//lyon.sonido();//sonido lo creo en la clase gato