class Empleado{
    static contadorEmpleados = 0;

    constructor(nombre, sueldo){
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado:${this._idEmpleado}, nombre: ${this._nombre}, sueldo:$${this._sueldo}.`;
    }
}

class Gerente extends Empleado{
    static contadorGerentes = 0;

    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._idGerente = ++Gerente.contadorGerentes;
        this._departamento = departamento;
    }


    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    obtenerDetalles(){
        return `Gerente: ${this._idGerente}, ${super.obtenerDetalles()}, Departamento:  ${this._departamento}.`;
    }

}

function imprimir(tipo) {
    console.log(tipo.obtenerDetalles());
    if( tipo instanceof Gerente ){
        console.log("Es de tipo Gerente");
        console.log("Departamento: " + tipo.departamento);
    }
    else if( tipo instanceof Empleado ){
        console.log("Es de tipo Empleado");
        console.log("Departamento: " + tipo.departamento);
    }
    else if( tipo instanceof Object ){
        console.log("Es de tipo Object");
    }        
}

//Prueba de la clase Empleado
let empleado1 = new Empleado("Fernando", 8000);
console.log(empleado1.obtenerDetalles());
let empleado2 = new Empleado("Elena", 5000);
console.log(empleado2.obtenerDetalles());

//Prueba de clase Gerente
let gerente1 = new Gerente("Jose Luis", 7500, "Sistemas");
console.log(gerente1.obtenerDetalles());
let gerente2 = new Gerente("Olivia", 6000, "Ventas");
console.log(gerente2.obtenerDetalles());

//Prueba del tipo instancia
imprimir( empleado1 );
imprimir( empleado2 );

imprimir( gerente1 );
imprimir( gerente2 );













