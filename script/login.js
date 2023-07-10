// FUNÇÃO LOGAR NA PAG LOGIN//

function logar() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    // VALIDAÇÃO DO CAMPO E-MAIL E SENHA
    if (email === "example@example.com" && senha.length >= 5) {
        alert("Logado com Sucesso!!");
        location.href =""; // PRECISAMOS COLOCAR O LINK DA PAGE HOME AQUI// 
    } else {
        alert("Usuário ou senha incorretos, tente novamente.");
    }

}