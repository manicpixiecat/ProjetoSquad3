const nome = document.getElementById('nome-registro').value 
const rg = document.getElementById('RG-registro').value
const email = document.getElementById('email-registro').value
const senha = document.getElementById('senha-registro').value
const confirmaçãoDeSenha = document.getElementById('confirmacao-senha-registro').value

const cep = document.getElementById('cep-registro')
const cidade = document.getElementById('cidade-registro')
const estado = document.getElementById('estado-registro')
const bairro = document.getElementById('bairro-registro')
const rua = document.getElementById('rua-registro')

const numero = document.getElementById('numero-registro').value
const complemento = document.getElementById('complemento-registro').value



//Função que consome a API e retorna um objeto contendo as informações do CEP
function consultaCep(entrada){
    fetch(`https://viacep.com.br/ws/${entrada}/json/`)
    .then(response => response.json())
    .then(data => {
        insereDados(data);
    })
}

//Função que preenche automaticamente os dados recebidos do CEP no HTML
function insereDados(dados){
    cidade.value = dados.localidade
    estado.value = dados.uf
    bairro.value = dados.bairro
    rua.value = dados.logradouro
}

//Evento que verifica a seleção do campo e executa a consulta do CEP
cep.addEventListener("blur", () => {
    if(cep.value.length == 8){
        consultaCep(cep.value)
    }else{
        limpaCampos()
    }
})

//Função que limpa os campos do registro
function limpaCampos(){
    cidade.value = ""
    estado.value = ""
    bairro.value = ""
    rua.value = ""
}


