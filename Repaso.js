/*********************************CONSUMIR API Fake store api***********************************************/
let api = 'https://fakestoreapi.com/products?limit=5'
fetch(api)
    .then( response => response.json())
    .then( data => mostrarData(data))
    .catch(err => console.log("error", err))

const mostrarData = (data) => {
    console.log(data[0].id);
    console.log(data[0].title);
    console.log(data[0].price);
    console.log(data[0].category);
    console.log(data[0].description);
    console.log(data[0].image);
}

/*********************************TYPEOF(Para saber el tipo de dato de una variable)***********************************************/

// let numero = 1;
// console.log(numero);
// console.log( typeof numero);

// let cadena = "Hola Mundo!";
// console.log(cadena)
// console.log(typeof cadena )
/****************************************************SENTENCIAS IF ELSE Y TERNARIO**********************************************/

let numero = "18";

if (isNaN (numero) ) {
    console.log("No es un numero")
}
else{
    console.log("Si es un numero we")
}

let ternario = isNaN (numero) ? "No es un numero" : "Si es un numero we";
console.log(ternario);

let convertirNumero = Number(numero);
console.log(convertirNumero)

/******************************************************CICLO WHILE Y DO WHILE*******************************************************/

let contador = 0;

while (contador < 3) {
    console.log(contador);
    contador++;
}

let contador2 = 0;

do{
    console.log(contador2);
    contador2++;
}while(contador2 < 3);

/***************************************OBJETOS, FUNCIONES CON METODOS, PARAMETROS Y ARGUMENTOS**************************************/
let persona = {
    nombre: "Fernando",
    apellido: "Coronel",
    edad: 30,
    idioma : "es",
    get lang(){
        return this.idioma.toUpperCase();//metodo para obetener el valor y uppercase hace cambiar las letras minusculas a mayusculas.
    },
    set lang( lang ){
        this.idioma = lang.toUpperCase();//metodo para asignar valores
    },     
    get nombreCompleto(){
        return `${this.nombre} ${this.apellido}`;
    }


}

persona.tel = "5555498712";
console.log(persona)

console.log(persona.nombreCompleto);//ya no es necesario poner parentecis de la funcion ya que tine el metodo get sino lo tuviera si es necesario ponerlos parentesis.

console.log(persona.lang);
persona.lang = "mex";
console.log(persona.lang);
console.log(persona.idioma);//se comprueba que se asigno el nuevo valor

let personaCadena = JSON.stringify( persona );//json.stringify es un metodo que convierte en string cualquier objeto que se le pase
console.log(personaCadena);

/*********************************************************CONSTRUCTOR**********************************************************************/
// function Persona(nombre, apellido, email){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.email = email;
//     this.nombreCompleto = function(){
//         return this.nombre + " " + this.apellido;
//     }
// }
//En este codigo se utlizara el metodo prototype
//Persona.prototype.tel = "5566778899"//prototype se utiliza para agregar un nuevo metodo al constructor Persona, seguido de un punto y despues el nuevo metodo que le va asignar en este caso .tel sera el nuevo elemento.

//let papa = new Persona("Fernando", "Coronel", "fer@mail.com");//New Persona es un metodo para crear personas
//console.log(papa.nombreCompleto());//cuando se manda a llamar una funcion dentro de un objeto debe tener los parentesis a veces si tiene el metodo GET ya no es necesario poner parentesis.

//let mama = new Persona("Elena", "Frias", "elena@mail.com");
//console.log(mama.nombreCompleto());

//papa.nombre = "Jose Luis";//aqui solo mdifica el argumento del objeto papa y no del constructor Persona
//console.log(papa);

//mama.email = "olivia@mail.com";
//console.log(mama);

//papa.tel = "5686975323";//asignando valor al metodo .tel
//console.log(papa.tel);

//mama.tel = "4448886633"
//console.log(mama.tel);

/**************************************************METODOS CALL Y APPLY***************************************************************/
let objeto1 = {
    nombre: "Peine",
    color: "Rojo",
    nombreCompleto: function(titulo, accion){
        //return this.nombre + " " + this.color;
        return titulo + ": " + this.nombre + " " + this.color + " " + accion;
    }
}

let objeto2 = {
    nombre: "Foco",
    color: "Blanco"
}
//en este codigo se utilizara metodo call
console.log(objeto1.nombreCompleto());
console.log(objeto1.nombreCompleto.call(objeto2));//el metodo call manda a llamar el metodo nombreCompleto del objeto1
console.log(objeto1.nombreCompleto.call(objeto2, "El", "enciende"));//en este ejemplo se le agregaron parametros al metodo nombreCompleto del objeto1
let foco = JSON.stringify(objeto2);
console.log(foco.toUpperCase());//uppercase convierte la cadena a mayusculas
console.log(foco.toLowerCase());//uppercase convierte la cadena a minisculas

//En este codigo se utilizara el metodo apply
console.log(objeto1.nombreCompleto.apply(objeto2));
let arreglo = ["El", "enciende"]
console.log(objeto1.nombreCompleto.apply(objeto2, arreglo));//en este caso con apply podemos pasarle un arreglo y se le asignan los valores del arreglo.


/***********************************************************CLASES**********************************************************************/
//Cuando se usan clases no aplica el Hoisting
//let seat = new Carro("Ibiza", 2020)//no se puede crear una instancia antes de declarar la clase 'Carro'.

class Carro {//Por buenas practicas las clases deben ir con la primer letra en mayuscula

    static contarCarros = 0;//Atributos para clases.
    email = "Valor default email";//Atributos para objetos.

    constructor(marca, modelo){
        this._marca = marca;
        this._modelo = modelo;
    }
    
    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    get modelo(){
        return this._modelo;
    }

    set modelo(modelo){
        this._modelo = modelo;
    }

    caracteristicas(){//Los metodos en la clase padre no es necesario inicializarlos en el metodo super de las clases hijas.
        return " Marca: " + this._marca + ", " + " Modelo: " + this._modelo + ", ";
    }
    
    toString(){//Este metodo se le conoce como polimorfismo(multiples formas en tiempo de ejecucion). el metodo se ejecuta depende si es una    referencia de tipo Padre o de tipo hijo.
        return this.caracteristicas();
    }

    static saludar(){ 
        console.log("Saludos desde metodo static");
    }
}

console.log(Carro.saludar());
console.log(Carro.contarCarros);//se puede acceder a una variable o metodo static desde una clase

let bocho = new Carro("Volkswagen", 1992);
console.log(bocho);
console.log(bocho.marca);
bocho.marca = "VW"//Se le asigna un nuevo valor
console.log(bocho.marca);
console.log(bocho.caracteristicas());
console.log(bocho.toString());
//caddy.saludar();//No se puede llama un metodo static desde un objeto;
console.log(bocho.email);//accediento a los atributos de email


let chevy = new Carro("Chevrolet", 1994);
console.log(chevy);
console.log(chevy.marca);
chevy.marca = "CV";//Se le asigna un nuevo valor
console.log(chevy.marca);
console.log(chevy.caracteristicas());
console.log(chevy.toString());
console.log(chevy.contarCarros);//No se puede acceder a la variable estatica desde un objeto sino desde una clase.

/***************************************************************HERENCIA**************************************************/

class Camioneta extends Carro {//Extends: Permite reutilizar o heredar código de la clase Padre a las clases hijas.
    constructor(marca, modelo, capacidad){
        super(marca, modelo);//se debe utilizar para mandar a llamar el constructor de la clase Padre, en este caso clase Carro.
        this._capacidad = capacidad;
    }

    get capacidad(){
        return this._capacidad;
    }

    set capacidad(capacidad){
        this._capacidad = capacidad;
    }
    //Metodo de sobreescritura: ayuda agregar los metodos de la clase Padre
    caracteristicas(){
        return super.caracteristicas() + " " + " Capacidad: " +this._capacidad;
    }
}

let caddy = new Camioneta("Volkswagen", 2022, "10 toneladas");
console.log(caddy);
console.log(caddy.marca);
console.log(caddy.modelo);
console.log(caddy.capacidad);
console.log(caddy.caracteristicas());
console.log(caddy.toString());

let lobo = new Camioneta("Ford", 2023, "15 toneladas");
console.log(lobo);
console.log(lobo.marca);
console.log(lobo.modelo);
console.log(lobo.capacidad);
console.log(lobo.caracteristicas());
console.log(lobo.toString());//

Camioneta.saludar();


/*************************************************************REPASO***********************************************/
class automovil extends Carro{
    constructor(marca, modelo, capacidad){
        super(marca, modelo);
        this._capacidad = capacidad;
    }

    get capacidad(){
        return this._capacidad;
    }

    set capacidad(capacidad){
        this._capacidad = capacidad;
    }

    caracteristicas(){
        return super.caracteristicas() + " " + " Capacidad: " +this._capacidad;
    }
}

let seat = new automovil("Ibiza", 2022, " 5 personas");
console.log(seat);
console.log(seat.marca);
console.log(seat.modelo);
console.log(seat.capacidad);
console.log(seat.caracteristicas());

/**************************************************EJERCICIO: HERENCIA EN JAVASCRIPT******************************/
class Persona {
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona(){
        return this._idPersona;
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

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return `ID: ${this._idPersona}, 
                Nombre: ${this._nombre}, 
                Apellido: ${this._apellido}, 
                Edad: ${this._edad}`; 
    }
}

class Empleado extends Persona{
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `${super.toString()}, 
                ID empleado: ${this._idEmpleado}, 
                Sueldo:$${this._sueldo}`;
    }
}

class Cliente extends Persona{
    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `${super.toString()}, 
                ID cliente: ${this._idCliente}, 
                Fecha de registro: ${this._fechaRegistro}`;
    }
}

//Prueba de clase Persona
let persona1 = new Persona("Fernando", "Coronel", 30);
console.log(persona1.toString());

let persona2 = new Persona("Elena", "Frias", 36);
console.log(persona2.toString());

//Prueba de clase Empleado
let empleado1 = new Empleado("Fatima", "Cruz", 3, 3000);
console.log(empleado1.toString());

let empleado2 = new Empleado("Leonel", "Cruz", 1, 4500);
console.log(empleado2.toString());

//Prueba de la clase Cliente
let cliente1 = new Cliente("Jose Luis", "Cruz", 56, new Date());
console.log(cliente1.toString());

let cliente2 = new Cliente("Olivia", "Coronel", 55, new Date());
console.log(cliente2.toString());

//Perfil Fernando Coronel.
const DesarrolladorWebJr = {
    nombre: "Fernando",
    apellido: "Coronel",
    edad: 30,
    email: "fernando.coronel.dev@gmail.com",
    tel: "55 85512942",
    softskills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    perfilCompleto(){
      return  `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años, actualmente estoy aprendiendo de forma autodidacta como desarrollador Front-End y eh adquirido softskills básicos como ${this.softskills} y una vez que tenga bien reforzados esos skills seguire con framework de React para aprender a crear Aplicaciones web que es una de mis grandes metas, dejo por aqui mi correo ${this.email} y mi número ${this.tel}.`
    }
}