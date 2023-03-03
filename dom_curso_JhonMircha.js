//Curso de DOM de JhonMircha.
// let texto = "Hola wey, no mames... si esta muy cabrón la lógica con javascript ya me harte, naaa no es cierto es solo una pinche bromita XD";

// const hablar = texto => {
//     speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
// }

// hablar(texto);

console.log("----------------> Elementos del documento <--------------------"); 

console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000);


console.log("----------------> Nodos, elementos y selectores <--------------------"); 

console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('card'));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector(".card"));
console.log(document.querySelector("li"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("#menu"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll("li"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach(elemento => {
    console.log(elemento);
});
console.log(document.querySelectorAll(".card")[2]);//Muestra el elemento de la posicion 2 que es Personas.

console.log("----------------> Atributos y Data-Attributes <--------------------"); 

console.log(document.documentElement.lang);
//Formas de obtener los valores de los atributos
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

//Formas de cambiar los valores de los atributos
document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");
$linkDOM.setAttribute("target", "_blank");//Se le esta asignando un atributo target con el valor_blank qe sirve para abrir la pagina en otra pestaña.
$linkDOM.setAttribute("href", "https://github.com");//Se le cambio el link del enlace a otra pagina;
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.hasAttribute("rel");//Devuelve un true o false porqe pregunta si tiene ese atributo. en este caso devuelve true y si se vuelve a preguntar despues del metodo removeAttribute devolvera un false porque ya se elimino el atributo.
$linkDOM.removeAttribute("rel")//Elimina el atributo

//Data-attribute
console.log($linkDOM.getAttribute("data-descripcion"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.descripcion);
console.log($linkDOM.dataset.id);

console.log("----------------> Estilos y variables CSS <--------------------"); 
//Obtener propiedades y valores CSS de un elemento
const $linkDOM2 = document.querySelector(".link-dom2");
console.log($linkDOM2.style);//Muestras todas las propiedades CSS validad para JavaScript.
console.log($linkDOM2.style[0]);//Accede a la propiedad de posicion 0.
console.log($linkDOM2.getAttribute("style"));//Muestra la propiedad y valores CSS del elemento.
console.log($linkDOM2.style.backgroundColor);//Muestras el valor de la propiedad CSS.
console.log($linkDOM2.style.color);//Muestras el valor de la propiedad CSS.

//Asignar propiedades y valores a un elemento.
$linkDOM2.style.setProperty("text-decoration", "none");
$linkDOM2.style.setProperty("display", "block");
$linkDOM2.style.width = "50%";
$linkDOM2.style.textAlign = "center";
$linkDOM2.style.marginLeft = "auto";
$linkDOM2.style.marginRight = "auto";
$linkDOM2.style.padding = "20px";
$linkDOM2.style.borderRadius = "20px";
$linkDOM2.style.fontFamily = "sans-serif";
$linkDOM2.style.fontWeight = "bold";
$linkDOM2.style.textTransform = "lowercase";
console.log($linkDOM2.style);//Muestras todas las propiedades CSS validad para JavaScript.
console.log($linkDOM2.getAttribute("style"));//Muestra la propiedad y valores CSS del elemento.
console.log(getComputedStyle($linkDOM2));

//Variables CSS - Custom Properties CSS
const $html = document.documentElement;
const $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
console.log(varDarkColor);
console.log(varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor);



// Ejercicios de logica del DOM de curso JhonMircha.