// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Agregar amigo a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert(" Por favor escribe un nombre válido.");
    return;
  }

  if (amigos.includes(nombre)) {
    alert(" Ese nombre ya fue agregado.");
    input.value = "";
    return;
  }

  amigos.push(nombre);
  mostrarLista();
  input.value = "";
  input.focus();
}

// Mostrar lista en pantalla
function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
}

// Sortear un amigo secreto
function sortearAmigo() {
  const resultado = document.getElementById("resultado");

  if (amigos.length < 2) {
    alert("Necesitas al menos 2 amigos para sortear.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[indice];

  resultado.innerHTML = ` El amigo secreto es: <strong>${ganador}</strong>`;
}
