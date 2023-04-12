// const nombreTarea = "Aprender VueJs";

// export default nombreTarea;

//Exportar una funcion o funciones

// export const crearTarea = (tarea, urgencia) => {
//     return `La tarea ${tarea} tiene una urgencia ${urgencia}.`;
// }

// export const tareaCompletada = () =>{
//     console.log("La tarea se completo");
// }



//Clases

 export default class Tarea {
    constructor(nombre, prioridad){
        this._nombre = nombre;
        this._prioridad = prioridad;
    }

    mostrar(){
        return (`${this._nombre} tiene una prioridad ${this._prioridad}`)
    }

}

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



//Crear objetos

// let tarea = new Tarea("Aprender JavaScript", "Alta");
// console.log(tarea.mostrar());

// let compra = new ComprasPendientes("Jabon", "Urgente", 3);
// console.log(compra);

//Modulos