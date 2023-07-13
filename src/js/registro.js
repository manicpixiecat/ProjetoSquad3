//const nome = document.getElementById('nome-registro')
const rg = document.getElementById('RG-registro')
const email = document.getElementById('email-registro')
const senha = document.getElementById('senha-registro')
const confirmaSenha = document.getElementById('confirmacao-senha-registro')

//Constantes recebendo os campos de endereço
const cep = document.getElementById('cep-registro')
const cidade = document.getElementById('cidade-registro')
const estado = document.getElementById('estado-registro')
const bairro = document.getElementById('bairro-registro')
const rua = document.getElementById('rua-registro')

const numero = document.getElementById('numero-registro')
const complemento = document.getElementById('complemento-registro')

//Botão de registro 
const botao = document.getElementById('botao-registro')

//Função que consome a API e retorna um objeto contendo as informações do CEP
function consultaCep(entrada) {
    fetch(`https://viacep.com.br/ws/${entrada}/json/`)
        .then(response => response.json())
        .then(data => {
            insereDados(data);
        })
}

//Função que preenche automaticamente os dados recebidos do CEP no HTML
function insereDados(dados) {
    cidade.value = dados.localidade
    estado.value = dados.uf
    bairro.value = dados.bairro
    rua.value = dados.logradouro
}

//Função que limpa os campos do registro
function limpaCampos() {
    cidade.value = ""
    estado.value = ""
    bairro.value = ""
    rua.value = ""
}


//Evento que verifica a seleção do campo e executa a consulta do CEP
cep.addEventListener("blur", () => {
    if (cep.value.length == 8) {
        consultaCep(cep.value)
    } else {
        limpaCampos()
    }
})

//Função que verifica se as senhas são iguais e troca a cor do campo se não cumprir os requisitos
function validaSenha() {
    if (senha.value.length < 1 || confirmaSenha.value.length < 1) {
        confirmaSenha.style.backgroundColor = "white"
        senha.style.backgroundColor = "white"
        return false
    } else if (senha.value.length < 5 && confirmaSenha.value.length < 5 || senha.value != confirmaSenha.value) {
        confirmaSenha.style.backgroundColor = "rgba(223, 64, 64, 0.76)"
        senha.style.backgroundColor = "rgba(223, 64, 64, 0.76)"
        return false
    } else if (senha.value === confirmaSenha.value) {
        confirmaSenha.style.backgroundColor = "rgba(53, 218, 53, 0.76)"
        senha.style.backgroundColor = "rgba(53, 218, 53, 0.76)"
        return true
    }
}

//Função que verifica o RG
function validaRg() {
    if (rg.value.length < 1) {
        rg.style.backgroundColor = "white"
        return false
    } else if (rg.value.length !== 9) {
        rg.style.backgroundColor = "rgba(223, 64, 64, 0.76)"
        return false
    } else {
        rg.style.backgroundColor = "rgba(53, 218, 53, 0.76)"
        return true
    }
}

//Evento que verifica e troca a cor do campo do RG
rg.addEventListener("blur", () => {
    validaRg()
})

//Evento que verifica e troca a cor do campo da senha
senha.addEventListener("blur", () => {
    validaSenha()
})

//Evento que verifica e trocar a cor do campo da Confirmação de senha
confirmaSenha.addEventListener("blur", () => {
    validaSenha()
})

//Evento verificar e validar os campos ao clicar no botão
botao.addEventListener('click', () => {
    //Uso do jQuery para utilizar uma função de outro arquivo
    $(document).ready(function () {
        if (validarEmail(email.value)) {
            email.style.backgroundColor = "rgba(53, 218, 53, 0.76)"
        }else{
            email.style.backgroundColor = "rgba(223, 64, 64, 0.76)"
            alert('Insira um email válido!')
        }
    });
    if(validaRg() == true && validaSenha == true){
        alert("Registro realizado!")
    }
})


