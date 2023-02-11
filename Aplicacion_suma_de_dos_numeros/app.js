
function suma(){
    const formulario = document.getElementById("formulario");
    let numero1 = formulario["numero1"];
    let numero2 = formulario["numero2"];
    let resultado = parseInt(numero1.value) + parseInt(numero2.value);

    if( isNaN(resultado) ){
        resultado = "Debes agregar los números";
    }

    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}

let botonSumar = document.getElementById("sumar");
botonSumar.addEventListener("click", suma);