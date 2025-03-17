// Lista de amigos.
const listaAmigos = [];
const inpAmigo = document.getElementById("amigo");

// Amigos que se mostrarán al agregarlos.
const ulListaAmigos = document.getElementById("listaAmigos");

// Resultado del sorteo.
const ulResultado = document.getElementById("resultado")


// Función que agrega amigos a la lista.
function agregarAmigo() {

    if (!inpAmigo.value) {
        alert("Escriba el nombre de algún amigo.")
    };

    listaAmigos.push(inpAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inpAmigo.value}</li>`;

};

// Función para sortear amigo secreto.
function sortearAmigo() {

    const random = Math.floor((Math.random() * listaAmigos.length));

    // Verifica valor random.
    console.log(random);

    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>${amigoSecreto}</li>`

}