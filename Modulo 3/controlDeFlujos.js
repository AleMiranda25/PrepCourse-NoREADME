function viajar (destino) {
    if(destino === "Brasil") {
        console.log("Gire a la Izquierda");
    } else if(destino === "Argentina") {
        console.log("Gire a la Derecha");
    } else console.log("Te has perdido");
}

//viajar("Brasil");
//viajar("Argentina");
viajar("Uruguay");

function puedeManejar (edad) {
    if(edad >= 18){
        console.log("Puede Manejar!");
    } else console.log("No puede Manejar!");
}

puedeManejar(25);
//puedeManejar(16);