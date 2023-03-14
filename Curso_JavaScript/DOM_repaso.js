//Mostrar arrays en un archivo html
const elementos1 = ["Fernando", "Elena", "Fatima", "Leonel"];
let docHtml1 = document.getElementById("array1");
let html1 = "";

elementos1.forEach(elemento => {
    html1 += `<li>${elemento}</li>`
})

docHtml1.innerHTML = html1;

const elementos2 = ["Carro1", "Carro2", "Carro3", "Carro4"];
let docHtml2 = document.getElementById("array2");
let html2 = "";

elementos2.map(elemento => {
    html2 += `<li>${elemento}</li>`;
});

docHtml2.innerHTML = html2;

//Agregar estilos desde JavaScript
let palabra1 = document.getElementById("palabra1");
palabra1.addEventListener('dblclick', evento => {
    evento.target.style.color = "white";
});

palabra1.addEventListener('mouseover', evento => {
    evento.target.style.background = "orange";
});

palabra1.addEventListener('mouseout', evento => {
    evento.target.style.background = "white";
});

let input1 = document.getElementById("name");
input1.addEventListener('focus', evento => {
    evento.target.style.background = "yellow";
});

input1.addEventListener('blur', evento => {
    evento.target.style.background = "white";
});

let input2 = document.getElementById("dni");
input2.addEventListener('focus', evento => {
    evento.target.style.textTransform = "upperCase";
});

function mostrarDatos(){
    let nombre = document.getElementById('name').value
    let dni = document.getElementById('dni').value
    let mostrar = document.getElementById('mostrar');

    mostrar.innerHTML = `Su nombre es: ${nombre}\n 
                         su curp es: ${dni}.  
    `
}

let btn = document.getElementById('btn-mostrar')
btn.addEventListener('click', mostrarDatos)




