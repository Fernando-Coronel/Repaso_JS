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
// const $html = document.documentElement;
// const $body = document.body;

// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
// let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
// console.log(varDarkColor);
// console.log(varYellowColor);

// $body.style.backgroundColor = varDarkColor;
// $body.style.color = varYellowColor;

// $html.style.setProperty("--dark-color", "#222");
// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

// $body.style.setProperty("background-color", varDarkColor);

console.log("----------------> Clases CSS <--------------------"); 

const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));//el contains pregunta si contiene esa clase y devuelve true o false, en este caso muestra false ya que no tiene esa clase.
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));//el contains pregunta si contiene esa clase y devuelve true o false, en este caso muestra true ya que tiene esa clase.
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45")//Quita la clase que se le agrego al elemento
console.log($card.className);
console.log($card.classList);
$card.classList.toggle("rotate-45");//Toggle funciona como palanca
console.log($card.classList.contains("rotate-45"));//el contains pregunta si contiene esa clase y devuelve true o false, en este caso muestra true ya que tiene esa clase.
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));//el contains pregunta si contiene esa clase y devuelve true o false, en este caso muestra false ya que no tiene esa clase.
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");//Replace:Reemplaza la clase que es el primer parametro y el segundo es la clase que se va a tener el elemento.
$card.classList.add("opacity-80", "sepia");//Aqui se esta agregando 2 clases en un elemento.
$card.classList.remove("opacity-80", "sepia")//Aqui esta quitando dos clases que se le agregaron al elemento.
$card.classList.remove("opacity-80", "sepia");
$card.classList.remove("rotate-45", "rotate-135");

console.log("----------------> Texto y HTML <--------------------"); 

const $queEsDom = document.querySelector("#que-es");

let text = `
<p>
Las siglas (<b><i>DOM significan Document Object Model</i></b>), o lo que es lo mismo, la estructura del documento HTML.
</p>
<p>
Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra. 
</p>
<p>
<mark>formando un árbol de etiquetas relacionadas entre sí, que se denomina árbol DOM (o simplemente DOM).</mark>
</p>
`;

$queEsDom.innerText = text;//innerText ya no forma parte del standar ecmascript 6
$queEsDom.textContent = text;//textContent ya no forma parte del standar ecmascript 6
$queEsDom.innerHTML = text;//La forma actual de agregar dom al html.

console.log("--------------> DOM Traversing(Recorriendo el DOM) <--------------"); 

const $cards = document.querySelector(".cards");
console.log($cards)
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));


console.log("--------------> Creando elementos y fragmentos <--------------"); 

const $figure = document.createElement("figure");
const $img = document.createElement("img");
const $figcaption = document.createElement("figcaption");
const $figcaptionText = document.createTextNode("Animales");
const $cards2 = document.querySelector(".cards");
const $figure2 = document.createElement("figure");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animales");
$figure.classList.add("card")
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards2.appendChild($figure);

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/tech" alt="Tecnologia">
<figcaption>Tecnología</figcaption>
`;

$figure2.classList.add("card");
$cards2.appendChild($figure2);
console.log($cards2);


const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
const $ul1 = document.createElement("ul");

estaciones.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul1.appendChild($li);
});

document.write("<h2>Estaciones del año</h2>")
document.body.appendChild($ul1);

const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"];
const $ul2 = document.createElement("ul");
$ul2.innerHTML = "";

continentes.forEach(el => {
    $ul2.innerHTML += `<li>${el}</li>`;
})

document.write("<h2>Continentes</h2>")
document.body.appendChild($ul2);

const meses = [
    "Enero", 
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];

const $ul3 = document.createElement("ul");
const $fragment = document.createDocumentFragment();

meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h2>Meses del año</h2>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);

console.log("--------------> Creando elementos y fragmentos <--------------"); 

const $cards3 = document.querySelector(".cards");
const $template = document.getElementById("template-card").content;
const $fragment2 = document.createDocumentFragment();
const cardContent = [
    {
        title: "Animales",
        img: "https://placeimg.com/200/200/animals"
    },
    {
        title: "Arquitectura",
        img: "https://placeimg.com/200/200/arch"
    },
    {
        title: "Personas",
        img: "https://placeimg.com/200/200/people"
    },
    {
        title: "Naturaleza",
        img: "https://placeimg.com/200/200/nature"
    },
    {
        title: "Tecnologia",
        img: "https://placeimg.com/200/200/tech"
    }
]

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;
    
    let $clone = document.importNode($template, true);
    $fragment2.appendChild($clone);
});

$cards3.appendChild($fragment2);

console.log($cards3.appendChild($fragment2));

console.log("--------------> Manejo de elementos(event Handler) <--------------"); 

function holaMundo(e){
    alert("Hola Mundo");
    console.log(event);
}

let $eventoSemantico = document.getElementById("evento-semantico");
$eventoSemantico.onclick = holaMundo;

let $eventoMultiple = document.getElementById("evento-multiple");

$eventoSemantico.onclick = function(e){
    alert("Evento semantico");
    console.log(e);
    console.log(event);
}

$eventoMultiple.addEventListener('click', (e) => {
    alert("evento multiple");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
})

// Ejercicios de logica del DOM de curso JhonMircha.