//Como crear variables en JavaScript

let cadena =  "Cadena o String";
console.log(cadena);
console.log("Tipo de dato es: ", typeof(cadena));

let numero = 10;
console.log(numero);
console.log("El tipo de dato de", numero,  "es: ",typeof(numero));

let flotante = 10.3;
console.log(flotante);

let booleano = true;
console.log(booleano);

let nullo = null;
console.log(nullo);

//Scope: lo que este dentro de cada blocke no se mezclan los valores si ambas variables se llaman igual.

let musica = "Rock";

if(musica){
    let musica = "Pop";
    console.log("Dentro del if", musica);
}

console.log("Fuera del if", musica);

//Template string

const nombre = "Fernando";
const trabajo = "Desarrollador Web JR.";

//Concatenar cadenas simple.
console.log("Nombre:",nombre,",Trabajo:",trabajo);
//Concatenar con template strings.
console.log(`Nombre: ${nombre}, Trabajo:${trabajo}`);

//Concatenar con multiples lineas
const contenedorApp = document.querySelector("#app");
let html = `
<ul>
    <li>Nombre: ${nombre}</li>
    <li>Trabajo: ${trabajo}</li>
</ul>
`

contenedorApp.innerHTML = html;
console.log(contenedorApp.innerHTML = html)


//Funciones y distintos tipos de funciones

//Funcion declaration
//Se puede llamar antes de ser declarada la funcion.
saludar("Fernando");

function saludar (nombre){
    console.log(`Bienvenido ${nombre}`)
}

saludar("Fernando");

//Funcion expresion
//En este caso no se puede llamar la funcion antes de ser declarada.
// cliente("Fernando");
const cliente = function(nombreCliente) {
    console.log(`Mostrando datos del cliente: ${nombreCliente}`)
}

cliente("Fernando");

//Funciones con parametros

function actividad(nombre = "Sin nombre", actividad = "Cualquier"){
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`)
}

actividad("Fernando", "Aprender JavaScript");
actividad("Fernando", "Aprender ReactJS");
actividad("Elena", "Reabrir su negocio");
actividad();//Regresa los valores default que tienen los parametros.

//Arrow functions

let viajando = (destino, dias) => `Viajando a ${destino} ${dias} dias.`


let viaje;
viaje = viajando("Iztapalapa", 2);
console.log(viaje);
viaje = viajando("Verazcruz", 2);
console.log(viaje);

//Objetos en JavaScript

function mostrarInformacion(tarea, prioridad){
    return `La tarea ${tarea} y su prioridad es ${prioridad}`
}


//Object literal

const persona = {
    nombre: "Fernando",
    profesion: "Desarrollador Web JR",
    edad:30
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.profesion);
console.log(persona.edad);
console.log(persona["edad"]);//Otra forma de acceder al valor del objeto.

// const mostrarCliente = mostrarInformacion(persona.nombre, persona.profesion);
// console.log(mostrarCliente);

//Object constructor
// function Tarea(nombre, urgencia){
//     this.nombre = nombre;
//     this.urgencia = urgencia;
// }

//Agregar un prototype a tarea
//El prototype te permite agregar funciones a un objeto.
// Tarea.prototype.mostrarInformacion = function(){
//     return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
// }


//Crear una nueva tarea.
// const tarea1 = new Tarea("Aprender JavaScript", "Alta");
// const tarea2 = new Tarea("Aprender ReactJS", "Media");
// console.log(tarea1);
// console.log(tarea1.mostrarInformacion());
// console.log(tarea2);
// console.log(tarea2.mostrarInformacion());

//Destructurin object

const aprendiendoJS = {
    version: {
        nueva: "ES6+",
        anterior: "ES5"
},
    frameworks:["React", "Angular", "VueJS"]
}

console.log(aprendiendoJS);

//Version anterior
// let version = aprendiendoJS.version.nueva;
// console.log(version);
// let framework = aprendiendoJS.frameworks;
// console.log(framework);

//Nueva version
//El destructuring se utiliza para extrear los valores de un objeto.
let {nueva} = aprendiendoJS.version;
console.log(nueva);//Nueva seria una variable.

//Object literal enhancement

const banda = "Metallica";
const genero = "Heavy Metal";
const canciones = ["Master of puppets", "Seek & destroy", "Enter Sandman"];

//Forma anterior
// const metallica = {
//     banda: banda,
//     genero: genero,
//     canciones: canciones
// }
//console.log(metallica);

//Forma nueva
const metallica = {banda, genero, canciones};
console.log(metallica);

//Funciones o metodos en un objeto

const persona1 = {
    nombre:"Fernando",
    trabajo:"Desarrollador web JR",
    edad:30,
    musicaRock: true,
    mostrarInformacion1(){
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
    }
}

persona1.mostrarInformacion1();

//Arreglos, map y object.keys

//Arreglos y map
const carrito = ["Producto 1", "Producto 2", "Producto 3"];
console.log(carrito);

const contenedorCarrito = document.querySelector("#carritoForeach");
let html1 = "";

//Forma de agregar arreglos al html con forEach
carrito.forEach(producto =>{html1 += `<li>${producto}</li>`});
contenedorCarrito.innerHTML = html1;

const carrito2 = ["Producto 4", "Producto 5", "Producto 6"];
console.log(carrito2);
let html2 = "";
//Forma de agregar arreglos al html con Map
const contenedorCarrito2 = document.querySelector("#carritoMap");
carrito2.map(producto => { html2 += `<li>${producto}</li>`});
contenedorCarrito2.innerHTML = html2;


//Object.keys: Srive para ver las propiedades de un objeto.
const persona2 = {
    nombre: "Fernando",
    profesion: "Desarrollador Web JR",
    edad: 30
}

console.log(Object.keys(persona2));

//Spread operator ...

let lenguajes = ["JavaScript", "PHP", "Python"];
let frameworks = ["ReactJS", "Laravel", "Django"];

//Anterior con concat
let combinacion = lenguajes.concat(frameworks);
console.log(combinacion);

//Nueva forma de unir arrays con spread operator
let nuevaCombinacion = [...lenguajes, ...frameworks];
console.log(nuevaCombinacion);

//Funciones con spread operator.
function suma1(a,b,c){
    console.log(a+b+c);
}

const numeros = [1,2,3];
suma1(...numeros);

function resta(d,e,f){
    console.log(d-e-f);
}

resta(...numeros);


//Metodos en arreglos

const personas = [
    {nombre:"Fernando", edad: 30, aprendiendo:"ReactJS"},
    {nombre:"Elena", edad: 36, aprendiendo:"JavaScript"},
    {nombre:"Fatima", edad: 3, aprendiendo:"PHP"},
    {nombre:"Leonel", edad: 1, aprendiendo:"Python"},
    {nombre:"Olivia", edad: 56, aprendiendo:"Java"},
    {nombre:"Jose Luis", edad: 57, aprendiendo:"C++"},
    {nombre:"Adrian", edad: 24, aprendiendo:"C#"},
];

console.log(personas);

//Mayores de 26 años
const mayor26 = personas.filter(persona => {
    return persona.edad >28
});
console.log(mayor26);

//Que aprendio elena y su edad
const elena = personas.find(persona =>{
    return persona.nombre === "Elena";
});
console.log(elena);

//Promesas o promises

const aplicarDescuento = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        let descuento = true;
        
        if(descuento){
            resolve("Se aplico el descuento");
        }else{
            reject("No aplico el descuento");
        }
    },3000);
});


aplicarDescuento.then(resultado =>{
    console.log(resultado);
}).catch(error => {
    console.log(error);
});


//Promesas con ajax
const descargarUsuarios = cantidad => new Promise((resolve, reject) =>{
    //Pasar cantidad a la api
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //Llamado ajax
    const xhr = new XMLHttpRequest();

    xhr.open('GET', api, true);

    //on load
    xhr.onload = () => {
        if(xhr.status === 200){
            resolve(JSON.parse(xhr.responseText).results);
        }else{
            reject(Error(xhr.statusText));
        }
    }

    //Opcional(on error)
    xhr.onerror = (error) => reject(error);

    //send
    xhr.send();

});

descargarUsuarios(15)
    .then(
        miembros => imprimirHTML(miembros), 
        error => console.error(
            new Error("Hubo un error " + error)
        )    
    );

function imprimirHTML(usuarios){
    let html3 ="";
    usuarios.forEach(usuario =>{
        html3 += `
            <li>
                Nombre: ${usuario.name.first} ${usuario.name.last}
                Pais: ${usuario.nat}
                Imagen:
                <img src="${usuario.picture.medium}">
            </li>
        `;
    });

    const contenedorApi = document.querySelector("#contenedorApi");
    contenedorApi.innerHTML = html3;
};

//Programacion Orientada a Objetos
// //Clases

// class Tarea {
//     constructor(nombre, prioridad){
//         this._nombre = nombre;
//         this._prioridad = prioridad;
//     }

//     mostrar(){
//         return (`${this._nombre} tiene una prioridad ${this._prioridad}`)
//     }

// }

// class ComprasPendientes extends Tarea{
//     constructor(nombre,prioridad,cantidad){
//         super(nombre, prioridad)
//         this._cantidad = cantidad;
//     }

//     mostrar(){
//         super.mostrar();
//         console.log(`y la cantidad de ${this._cantidad}`)
//     }

//     hola(){
//         return "Hola";
//     }
// }



// //Crear objetos

// let tarea = new Tarea("Aprender JavaScript", "Alta");
// console.log(tarea.mostrar());
// let compra = new ComprasPendientes("Jabon", "Urgente", 3);
// console.log(compra);

// //Modulos

//Importar
// import nombreTarea from "./tareas.js";
// console.log(nombreTarea);

//Importar funciones
// import { crearTarea } from "./tareas.js";
// import { tareaCompletada } from "./tareas.js";

// const tarea1 = crearTarea("Aprender ReactJs", "Alta");
// console.log(tarea1);

// tareaCompletada();

//Importar clases
import Tarea from './tareas.js';


const tarea5 = new Tarea("Aprender JavaScript", "Media-alta");
console.log(tarea5);

tarea5.mostrar();

let multiplo5 = 5;

while (multiplo5 <= 50) {
    console.log(multiplo5);
    multiplo5 += 5;
}






