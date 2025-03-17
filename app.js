// Lista de amigos.
const listaAmigos = [];
const inpAmigo = document.getElementById("amigo");

// Amigos que se mostrarán al agregarlos.
const ulListaAmigos = document.getElementById("listaAmigos");

// Resultado del sorteo.
const ulResultado = document.getElementById("resultado");


// Función que agrega amigos a la lista.
function agregarAmigo() {

    // Alerta si no hay amigos.
    if (inpAmigo.value == "") {
        alert("Escriba el nombre de algún amigo.")
    };

    // Agrega amigos a la lista.
    listaAmigos.push(inpAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inpAmigo.value}</li>`;

    // Limpia el cuadro de int.
    function limpiar() {
        inpAmigo.value = ""
    };
    limpiar();

};

// Función para sortear amigo secreto.
function sortearAmigo() {

    // Alerta en caso de que no haya amigos en la lista.
    if (listaAmigos.length == 0) {
        alert("No hay amigos para sortear.")
    }
    else {
        // Generar valor random.
        const random = Math.floor((Math.random() * listaAmigos.length));

        // Verifica valor random.
        console.log(random);

        // Arroja amigo secreto.
        const amigoSecreto = listaAmigos[random];
        ulResultado.innerHTML = `<li>Su amigo secreto es: ${amigoSecreto} !!!</li>`

        // Limpia y reinicia la lista.
        function limpiarLista() {
            ulListaAmigos.innerHTML = "";
            listaAmigos.length = 0;
        };
        limpiarLista();
    };

};

