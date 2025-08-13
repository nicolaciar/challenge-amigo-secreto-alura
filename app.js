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
    }
    // Limpia la caja de texto
    input.value = "";
}
