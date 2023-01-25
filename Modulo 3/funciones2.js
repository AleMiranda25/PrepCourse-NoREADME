//Ejemplo consolelog y return
function cuidadoConElConsoleLog(nombre){
    console.log(nombre);
    return nombre;
}

function otraFuncion () {
    return (`El nombre retornado por la funcion cuidadoConElConsoleLog es: ${cuidadoConElConsoleLog('Ale')}`);
}

function cuidadoConElReturn (nombre) {
    return nombre;
    console.log(nombre);
}