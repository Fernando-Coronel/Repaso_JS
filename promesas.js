let promesa = new Promise((resolve, reject) => {
    let expresion = false;
    if ( expresion ){
        resolve("Resolvio Correcto")
    }
    else{
        reject("Se produjo un error");
    }
});

// promesa.then(
//     valor => console.log(valor), 
//     error => console.log(error)
//);

//Otra forma de usar la promesa pero es la mas usada para buenas practicas y con el mismo identado.
promesa
.then( valor =>{console.log(valor)})
.catch( error => {console.log(error)});


//Promesas con la funcion setTimeOut

let promesa2 = new Promise((resolve) => {
    setTimeout( () => resolve("Respuesta desde set time out"), 3000)
});

promesa2
.then(valor =>{console.log(valor)})


//async: indica que una funcion regresa una promesa

async function miFuncion(){
    return "Promesa y async";
}

miFuncion().then(valor =>{console.log(valor)})


//await: Solo espera el resultado de la promesa, solo se puede utilizar await dentro de una funcion declara con async.

async function miFuncion2(){
    let promesa = new Promise(resolve => {
        resolve("Promesa con await");
    });

    console.log( await promesa);
}

miFuncion2();


//Promesas, await, async y setTimeOut

async function miFuncion3(){
    console.log("-----Inicio de la funcion------");
    let promesa = new Promise( resolve => {
        setTimeout( () => resolve("Promesa con await y async"), 6000)
    });
    console.log(await promesa);
    console.log("------Fin de la funcion----------");
}

miFuncion3();

let promesa3 = new Promise( (resolve, reject) =>{
    let expresion = false;
    if( expresion ){
        resolve("Respuesta aceptada");
    }
    else{
        reject("Conexion erronea");
    }
});

promesa3
.then( valor => { console.log(valor)})
.catch( error => { console.log(error)})