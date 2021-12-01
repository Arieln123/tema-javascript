setTimeout(() => {
    
}, timeout);               // despues de un tiempo ejecuto las instrucciones


setInterval(() => {
    console.log("asdasdasd");
}, interval);       // se va a ejecutar varias cada cierto tiempo 



const tiempo=setTimeout(() => {
    console.log("asdasd");
}, con);                          //guardo mi funcion dentro de una variable

                    // pongo set interval en una variable
clearTimeout(tiempo)     // me anula el time out
clearInterval(funcion) // anulo el interval  que esta en una variable