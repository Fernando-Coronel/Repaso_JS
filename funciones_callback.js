function miFuncion1(){
    console.log("Funcion 1");
}


function miFuncion2(){
    console.log("Funcion 2");
}

miFuncion2();
miFuncion1();

//Funciones de tipo callback

function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let resultado = op1 + op2;
    funcionCallback(`Resultado: ${resultado}`) 
}

sumar(3, 4, imprimir);


//Llamadas asincronas con el uso del metodo setTimeOut

function miFuncion3(){
    console.log("llamada asincrona después de 3 segundos");
}

setTimeout(miFuncion3, 3000);//los 3000 son milisegundos que equivalen a 3 segundos.

//Otro ejemplo de setTimeOut pero declarando la funcion dentro del metodo.

setTimeout( function(){
    console.log("Llamada asincrona2");
}, 4000);

//Otro ejemplo pero declarando una funcion flecha

setTimeout( () => {
    console.log("Llamada asincrona3");
}, 5000);


//Llamadas asincronas con el uso del metodo setInterval

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
};

setInterval(reloj, 1000);//La funcion callback se llama cada segundo.