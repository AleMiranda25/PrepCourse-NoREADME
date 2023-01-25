// Funcion para sumar 3
function SumaTres (x){
    console.log(`El resultado de la funcion es: ${x + 3} `);
}
SumaTres(5);
SumaTres(8);
//Formas de definir una funcion
// Forma 1
function sumaTres(x) {
    return x + 3;
}
//Forma 2
var sumTres = function (x) {
    return x + 3;
};
//Forma 3
var sumTre = (x) => {
    return x + 3;
};
