// funcion anonima autoejecutable


(function(){
    console.log("esto anda");
})()


(function(a,b){
    console.info( a+b ); /// bueno no se por que no anda, abajo hay otras forma de escribir las funciones anonimas
}(10,30));


(function(nombre){
    console.log("esto tambien anda ${nombre}");
})(ariel);





/*
// Classic
(function(){})();
 
// Crockford's favorite
(function(){}());
 
// Unary versions
+function(){}();
 
// Facebook version
!function(){}();
 
// Crazy version
!1%-+~function(){}();*/