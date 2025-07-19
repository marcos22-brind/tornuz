
function enviarPergunta() {
  const prompt = document.getElementById("userPrompt").value;
  const respostaDiv = document.getElementById("resposta");
  respostaDiv.innerText = "🔄 Processando com IA (simulado)...\nPergunta: " + prompt;

  // Simulação de chamada IA (coloque seu endpoint real)
  setTimeout(() => {
    respostaDiv.innerText = "🤖 Resposta da IA: Isso é apenas uma resposta simulada para '" + prompt + "'.";
  }, 1500);
}

function postarComentario() {
  const comentario = document.getElementById("comentario").value;
  if (!comentario.trim()) return;
  const lista = document.getElementById("listaComentarios");
  const li = document.createElement("li");
  li.innerText = comentario;
  li.className = "bg-gray-700 p-2 rounded";
  lista.appendChild(li);
  document.getElementById("comentario").value = "";
}
