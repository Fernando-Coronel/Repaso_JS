let palabra1 = document.getElementById("palabra");
palabra1.addEventListener("mouseover", (evento) => {
  evento.target.style.color = "red";
});

palabra1.addEventListener('mouseout', evento =>{
    evento.target.style.color = "white";
});

palabra1.addEventListener("click", evento =>{
    evento.target.style.background = "dodgerblue";
});

let palabra2 = document.getElementById("palabra2");
palabra2.addEventListener('dblclick', evento => {
    evento.target.style.color = "dodgerblue";
});

palabra2.addEventListener('mouseover', evento =>{
    evento.target.style.background = "yellow";
});

let palabra3 = document.getElementById("palabra3");

palabra3.addEventListener('click', evento => {
    evento.target.style.color = "crimson";
});

// Carrito 1
const carrito1 = ["Producto 1", "Producto 2", "Producto 3"];
let contenedorCarrito1 = document.getElementById("carrito1");
contenedorCarrito1.innerHTML = carrito1;

// Carrito 2
const carrito2 = ["Producto 4", "Producto 5", "Producto 6"];
let html1 = "";
const contenedorCarrito2 = document.getElementById("carrito2");

carrito2.forEach(producto => {
    html1 += `<li>${producto}</li>`
});
contenedorCarrito2.innerHTML = html1;

// Carrrito 3
const carrito3 = ["Producto 7", "Producto 8", "Producto 9"];
let html2 = "";
const contenedorCarrito3 = document.getElementById("carrito3");

carrito3.map(producto =>{
    html2 += `<li>${producto}</li>`
});
contenedorCarrito3.innerHTML = html2;

//Agregar datos de un input a una tabla.

function datos(){
    let name = document.getElementById("name");
    let lastName = document.getElementById("lastName");
    let age = document.getElementById("age");
    let dni = document.getElementById("dni");
    let profesion = document.getElementById("profesion");

    console.log(name.value);
    console.log(lastName.value);
    console.log(age.value);
    console.log(dni.value);
    console.log(profesion.value);

    let resultado = document.getElementById("result");

    resultado.innerHTML += `Su perfil completo es: ${name.value} ${lastName.value} tiene ${age.value} años, su curp es ${dni.value} y su empleo es ${profesion.value}.\n`;

    let perfil = document.getElementById("datos");
    perfil.innerHTML += `
    <tr>
        <td>${name.value}</td>
        <td>${lastName.value}</td>
        <td>${age.value}</td>
        <td>${dni.value}</td>
        <td>${profesion.value}</td>
    </tr>` 
}

const botonAgregar = document.getElementById("agregar");
botonAgregar.addEventListener('click', datos);

//Object keys

const persona = {
    nombre: "Fernando",
    apellido: "Coronel",
    edad: 30
} 
console.log(Object.keys(persona));//Muestra los atributos de un objetos.

//Concatenar arrays
//Primer forma con metodo concat.
let lenguajes = ["JavaScript", "Python", "PHP"];
let frameworks = ["ReactJS", "Django", "Laravel"]; 
 console.log(lenguajes.concat(frameworks));
//Segunda forma con spread operator.
let combinacion2 = [...lenguajes, ...frameworks];
console.log(combinacion2);

//Agregar datos de un array en HMTL
//Primer forma con forEach
let array1 = ["Elemento 1", "Elemento 2", "Elemento 3"];
let html3 = "";
let contenedorArray1 = document.getElementById("array1");
array1.forEach(elemento => {
    html3 += `<li>${elemento}</li>`;
}); 
contenedorArray1.innerHTML = html3;

let array2 = ["Elemento 4", "Elemento 5", "Elemento 6"];
let html4 = "";
let contenedorArray2 = document.getElementById("array2");

array2.map(elemento => {
    html4 += `<li>${elemento}</li>`;
})
contenedorArray2.innerHTML = html4;

//Programación Orientada a Objetos.

class Persona {
    static contadorPersona = 0;
    constructor(nombre, apellido){
        this._idPersona = ++Persona.contadorPersona;
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    toString(){
        return `ID: ${this._idPersona}, Nombre: ${this._nombre}, Apellido: ${this._apellido}`;
    }
}

//Prueba de la clase Persona
let persona1 = new Persona("Fernando", "Coronel");
console.log(persona1);
console.log(persona1.toString());
let persona2 = new Persona("Elena", "Frias");
console.log(persona2);
console.log(persona2.toString());
let persona3 = new Persona("Fatima", "Cruz");
console.log(persona3);
console.log(persona3.toString());
let persona4 = new Persona("Leonel", "Cruz");
console.log(persona4);
console.log(persona4.toString());

//Herencia de la clase Persona
class Empleado extends Persona{
    static contadorEmpleado = 0;
    constructor(nombre, apellido, puesto, sueldo){
        super(nombre, apellido)
        this._idEmpleado = ++Empleado.contadorEmpleado;
        this._puesto = puesto;
        this._sueldo = sueldo;
    }

    get puesto(){
        return this._puesto;
    }

    set puesto(puesto){
        this._puesto = puesto;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `${super.toString()}, ID empleado: ${this._idEmpleado}, Puesto: ${this._puesto}, Sueldo:$${this._sueldo} bruto.`
    }
}
//Pruebas de Clase Empleado
let empleado1 = new Empleado(persona1.nombre,persona1.apellido,"Desarrollador web jr.","10,000");
console.log(empleado1);
console.log(empleado1.toString());
let empleado2 = new Empleado(persona2.nombre,persona2.apellido,"Chef","9,000");
console.log(empleado2);
console.log(empleado2.toString());
let empleado3 = new Empleado(persona3.nombre,persona3.apellido,"Recursos Humanos","8,000");
console.log(empleado3);
console.log(empleado3.toString());
let empleado4 = new Empleado(persona4.nombre,persona4.apellido,"Chofer","7,500");
console.log(empleado4);
console.log(empleado4.toString());

//Funciones callback

function imprimir(mensaje){
    console.log(mensaje);
}

function suma(n1, n2, callback){
    let resultado = n1 + n2;
    callback(`El resultado de la suma es: ${resultado}`);
}
suma(2, 3, imprimir);

function resta(n1, n2, callback){
    let resultado = n1 - n2;
    callback(`El resultado de la resta es: ${resultado}`);
}

resta(9, 2, imprimir)

//Recorrer un string con FOR

let palabra4 = "Hola programador Fernando";

for(let i = 0; i < palabra4.length; i++){
    console.log(palabra4[i].split(","));
}

//Otra forma de recorrer un string
let palabra5 = "Hola Mundo";
for(let palabra of palabra5){//Con of muestra los caracteres. 
    console.log(palabra);
}

for(let palabra in palabra5){
    console.log(palabra);//Con in muestra el espacio que ocupa desde el cero.
}



