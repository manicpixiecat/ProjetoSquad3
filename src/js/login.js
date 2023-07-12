// FUNÇÃO LOGAR NA PAG LOGIN//

function logar() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;


    // VALIDAÇÃO DO CAMPO E-MAIL E SENHA
    if (validarEmail (email) && senha.length >= 5) {
        alert("Logado com Sucesso!!");
        location.href =""; // PRECISAMOS COLOCAR O LINK DA PAGE HOME AQUI// 
    } else {
        alert("Usuário ou senha incorretos, tente novamente.");
    }

}
//FUNÇÃO RESPONSÁVEL POR VALIDAR OS CARACTERES DO E-MAIL
function validarEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}