class Persona{
    static contadorPersonas = 0;
    constructor(nombre, apellido, edad){
        this._idPersonas = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersonas(){
        return this._idPersonas
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
    return `ID Persona: ${this._idPersonas}, Nombre: ${this._nombre}, Apellido: ${this._apellido}, Edad: ${this._edad}.`
    }
};

//Prueba de clase persona
let persona1 = new Persona("Fernando", "Coronel", 30);
console.log(persona1.toString());
let persona2 = new Persona("Elena", "Frias", 36);
console.log(persona2.toString());

class Empleado extends Persona{
    static contadorEmpleados = 0;
    
    constructor(nombre, apellido, edad, puesto, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._puesto = puesto;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
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
        return `${super.toString()},
        ID Empleado: ${this._idEmpleado}, Puesto: ${this._puesto}, Sueldo:$${this._sueldo}.
        `
    }
}

//Prueba de clase empleado que extiende de clase persona
let empleado1 = new Empleado("Fernando", "Coronel", 30, "Desarrollador web JR.", 12000);
console.log(empleado1.toString());

let empleado2 = new Empleado("Elena", "Frias", 36, "Secretaria", 7500);
console.log(empleado2.toString())














