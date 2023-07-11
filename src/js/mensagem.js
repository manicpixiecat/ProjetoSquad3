function exibirMensagem() {
var mensagem = "Email encaminhado com sucesso.";
var paragrafo = document.createElement("p");
paragrafo.textContent = mensagem;
var mensagemTela = document.getElementById("mensagem");
mensagemTela.innerHTML = "";
mensagemTela.appendChild(paragrafo);
}

