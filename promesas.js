function cuadradoPromise(value) {
    if (typeof value !== "number") {
    return Promise.reject(`Error, el valor " ${value} " ingresado no es un número`); // eso es si la promesa se rechaza
    }
    return new Promise((resolve, reject) => {   // esto es si la promesa se cumple resolve lo positivo y reject lo negativo
    setTimeout(() => {
        resolve({                 //resolve es la parte que se cumple de la promesa
        value,                         //este es un objeto que tiene value:value  y es lo que devuelve la primesa
          result: value * value                     
        });
      }, 0 | Math.random() * 1000);   // la promesa devuelve un objeto no un valor ojo!!
    });
}
cuadradoPromise(0)
    .then(obj => {             // si la promesa se cumple vamos al then si no va al catch
        //console.log(obj);
        console.log('Inicio Promise');
        console.log(`Promise: ${obj.value}, ${obj.result}`);  // tengo un objeto y lo escribo
        return cuadradoPromise(1);
    })
    .then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
    })
    .then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(3);
    })
    .then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise("4");
    })
    .then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(5);
    })
    .then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log('Fin Promise');
    })
    .catch(err => console.error(err));      // en esta parte anda si la promesa no anda