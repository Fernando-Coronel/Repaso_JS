const agregar = document.getElementById("agregar");

function agregarDatos(){
    let name = document.getElementById("name").value;
    let puesto = document.getElementById("puesto").value;
    let age = document.getElementById("age").value;

    // console.log(name);
    // console.log(puesto);
    // console.log(age);

    document.getElementById("datos").innerHTML += `
        <tr>
            <td>${name}</td>
            <td>${puesto}</td>
            <td>${age}</td>
        </tr>
    
    `;
}

agregar.addEventListener("click", agregarDatos);