// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Crea un array para los amigos ingresados:
let amigos = [];

function agregarAmigo() {
    // Obtenemos el nombre del amigo ingresado en la caja de texto
    let input = document.getElementById("amigo");
    let amigo = input.value;

    // Verifica que la cadena no esté vacía
    if (amigo.trim().length === 0) {
        alert("Ingrese un nombre válido");
        return
    }
    // Si no lo está, agrega el amigo a la lista
    else {
        amigos.push(amigo.trim());
        // Actualiza la lista de amigos en pantalla
        actualizarLista();
    }

    // Limpia la caja de texto
    input.value = "";
}

function actualizarLista() {
    let ulAmigos = document.getElementById("listaAmigos");
    ulAmigos.innerHTML = ""; // Limpia la lista actual

    //Recorremos el array amigos y agregamos los items il
    for (let amigo of amigos){
        let liAmigo = document.createElement("li");
        liAmigo.textContent = amigo;
        ulAmigos.appendChild(liAmigo);
    }

}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoAleatorio = amigos[indiceAleatorio];
    let mensaje = `El amigo secreto sorteado es: ${amigoAleatorio}`;

    let lista = document.getElementById("listaAmigos");
    let contResultado = document.getElementById("resultado");

    // Limpia la lista
    lista.innerHTML = "";           
    // Limpia resultados anteriores
    contResultado.innerHTML = "";   

    let mensajeElemento = document.createElement("h4");
    mensajeElemento.textContent = mensaje;
    contResultado.append(mensajeElemento);
}