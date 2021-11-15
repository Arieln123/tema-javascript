try{
    
    console.log("TRY1=en el try pongo lo que quiero probar");//esta parte se ejecuta porque anda bien y de ahi para abajo no se ejecuta porque tiene error
    noexiste;
}catch{
    console.log("CATCH1=aca van los errores si hay algo mal en el try");
}/*finally{
    console.log("esta parte se ejecuta siempre pero no va mucho");
}*/
try{
    noexiste;
    console.log("TRY2=en el try pongo lo que quiero probar"); /// esta parte no se ejecuta porque noexiste es un error, no esta definida
    
}catch{
    console.log("CATCH2=aca van los errores si hay algo mal en el try");
}/*finally{
    console.log("esta parte se ejecuta siempre pero no va mucho");
}*/
