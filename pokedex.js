const url = "https://pokeapi.co/api/v2/pokemon/";

const busqueda = document.getElementById("search");
const pokedex = document.getElementById("pokedex");

function mostrarError(mensaje){
    pokedex.innerHTML = `<p class="error">${mensaje}</p>`
}

async function buscarPokemon(){
    const pokemonBuscado = busqueda.value.toLowerCase();

    try {
        const respuesta = await fetch(url + pokemonBuscado)
        
        if(!respuesta.ok){
            mostrarError(`No se encontro el pokemón: ${pokemonBuscado}`);
            return
        }
        const datos = await respuesta.json();


        pokedex.innerHTML = `
            <h2> ${datos.name.toUpperCase()} </h2>
            <img src=" ${datos.sprites.front_default} "/>
            <p>Numero: ${datos.id}</p>
            <p>Altura: ${datos.height}</p>
            <p>Peso: ${datos.weight}</p>
        `
    } catch (error) {
        console.error("No hay conexion con el servidor", error);
        mostrarError("No ingreso datos");
    }
}

const botonBusqueda = document.getElementById("btn-search");
botonBusqueda.addEventListener("click", buscarPokemon);