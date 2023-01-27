var listaDeCompras = [];
listaDeCompras[3] = "Tomates";
listaDeCompras[1] = "Lechuga";
// Lista los elementos del arreglo
console.log(listaDeCompras);
// Indica el elemento guardado en el indice especificado
var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);
// Indica la longitud del arreglo mediante el metodo lenght
console.log("La longitud del arreglo es: ", listaDeCompras.length);
// Metodo Push
var colores = ['Rojo','Blanco'];
colores.push("Negro");
console.log(colores);
// Metodo Unshift
colores.unshift('Verde');
console.log(colores);
// Metodo Pop
colores.pop();
console.log(colores);
// Metodo Shift
colores.shift();
console.log(colores);
// Metodo Includes
var pintores = ["Picasso","Velazquez","Van Gogh","Dali"];
var incluyeDali = pintores.includes("Monet");
console.log(incluyeDali);
// Metodo Every
var numeros = [10,6,8,9];
var cumplenCondicion = numeros.every((num) => {
    return num > 5;
});
console.log(cumplenCondicion);
// Metodo Split
var palabra = 'Henri';
var palabraSeparada =  palabra.split('');
palabraSeparada.pop();
palabraSeparada.push('y');
console.log(palabraSeparada);
// Metodo Join
var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);
// Metodo Foreach
var nros = [1,2,3,4];
nros.forEach((num)=> console.log(num));
//nros.forEach((num)=> {
//    if(num === 3) console.log(num);
//});
// Metodo Map
var masUno = nros.map(num => {return num + 1;});
console.log(masUno);
// BUCLES
// FOR
var arr = [1,2,3,4,5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);    
}

function encontrarLetraP(string){
    var letras = string.split('');
    for (let i = 0; i < letras.length; i++) {
        if(letras[i]==='p'){
            console.log("Si contiene letra P!");
        }
    }
}

encontrarLetraP("Hola");
encontrarLetraP("Constantinopla");

// WHILE
var arre = [];
while(arre.length < 5){
    arre.push('BOOM');
}
console.log(arre);