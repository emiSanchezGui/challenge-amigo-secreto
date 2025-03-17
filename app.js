// Lista de amigos.
const listaAmigos = [];
const inpAmigo = document.getElementById("amigo");

// Amigos que se mostrarán al agregarlos.
const ulListaAmigos = document.getElementById("listaAmigos");

// Función que agrega amigos a la lista.
function agregarAmigo() {
    listaAmigos.push(inpAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inpAmigo.value}</li>`;
};

