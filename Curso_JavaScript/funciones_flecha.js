//Funcion sencilla
function miFuncion(){
    console.log("Funcion sencilla");
}

miFuncion();

//Funcion anonima

let miFuncion2 = function(){
    console.log("Funcion anonima");
}

miFuncion2();

//Funcion flecha

let miFuncion3 = () => {
    console.log("Funcion flecha o arrow function");
}

miFuncion3();

//Ejemplo funcion flecha

const miFuncion4 = () => console.log("Ejemplo de funcion flecha");//aqui no utiliza las llaves ya que es una sola linea de codigo
miFuncion4();

const miFuncion5 = () => {
    return "Saludos de funcion flecha";
}

console.log(miFuncion5());

const miFuncion6 = () => "Saludos desde funcion flecha 2"
console.log(miFuncion6());


const miFuncion7 = () => ({nombre: "Fernando", apellido: "Coronel"});//Se utiliza para recibir un objeto.
console.log(miFuncion7().nombre);
console.log(miFuncion7().apellido);


const miFuncion8 = (mensaje) => console.log(mensaje);
miFuncion8("Funcion con parametros"); 


const miFuncion9 = mensaje2 => console.log(mensaje2);//Solo se declara asi si solo es un parametro si ya son mas debe ir dentro de parentesis.
miFuncion9("Funcion con parametros más simplificada");


const miFuncion10 = (parametro1, parametro2) => {
    let resultado = parametro1 + parametro2;
    return  `Resultado: ${resultado}`;
}

console.log(miFuncion10(3, 2));