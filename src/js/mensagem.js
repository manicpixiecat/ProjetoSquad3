function exibirMensagem() {
    // Definir a mensagem a ser exibida 
var mensagem = "Email encaminhado com sucesso.";
var paragrafo = document.createElement("p");
paragrafo.textContent = mensagem;
// Colocando a mensagem para aparecer na tela 
var mensagemTela = document.getElementById("mensagem");
mensagemTela.innerHTML = "";
mensagemTela.appendChild(paragrafo);
}

function redirecionar() {
    // Colocando a pagina de destino
    var url = "login.html";
    // Definir quantos milisegundos 
    var atraso = 900
    // Redireciona para a pagina
    setTimeout(function() {
        window.location.href = url;
    }, atraso);
    }

    function cadastro() {
        // colocando a pagina de destino 
        var link = "registro.html";
        // definindo quantos milisegundos
        var tempo = 1000
        // Redireciona para a pagina 
        setTimeout(function(){
        window.location.href = link;
    }, tempo);
}