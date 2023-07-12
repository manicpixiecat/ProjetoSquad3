# ProjetoDevinho


Este é o repositório do Projeto do Modulo 2 do curso Desenvolvimento Web Full Stack Resilia., desenvolvido pela equipe Squad3. O projeto consiste em uma plataforma de serviço por assinatura que atende às seguintes funcionalidades:

## Funcionalidades

- **Página de Login**: 
  - Contém um formulário com os campos de usuário (e-mail) e senha.
  - Realiza validação nos campos de entrada, exigindo que o e-mail seja válido e a senha tenha pelo menos 5 caracteres.
  - Redireciona para a página inicial (home) quando realizado um login fictício, ou seja, apenas a validação dos campos sem a chamada à API.
  - Possui um link para a página de recuperação de senha (esqueci minha senha).

- **Página de Recuperação de Senha**:
  - Contém um formulário com o campo de e-mail de cadastro.
  - Realiza validação no campo de entrada, exigindo que seja um e-mail válido.
  - Exibe uma mensagem de sucesso após a submissão do formulário de e-mail enviado.
  - Redireciona para a página de login.

- **Página Inicial (Home)**:
  - Apresenta uma breve descrição do serviço oferecido.
  - Possui um link para a página de inscrição na lista de espera do serviço.

- **Página de Detalhes do Serviço**:
  - Apresenta informações sobre o funcionamento do serviço.
  - Exibe os planos de assinatura disponíveis e os benefícios incluídos em cada um.

- **Página de Contato**:
  - Mostra as informações de contato dos participantes envolvidos no projeto.

- **Página de Cadastro na Lista de Espera**:
  - Contém um formulário de cadastro com os campos de Nome, E-mail, Senha, Confirmação de Senha, RG, CEP (que completa automaticamente os demais campos de endereço através de uma consulta à API e trata erros) e Campos de Endereço (estado, cidade, bairro, rua, número e complemento).

## Tecnologias Utilizadas

O Projeto Squad3 utiliza as seguintes tecnologias:

![Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- Classes e Programação Orientada a Objetos (POO)
- API ViaCEP para obter dados referentes aos CEPs utilizados no cadastro
  
## Organização do Projeto

A equipe Squad3 é composta pelos seguintes membros e papéis assumidos no squad:

- [João Victor] - Co-Facilitador
- [Isabelle Pontes] - Gestora de Conhecimento
- [Gabriel Elias] - Gestor de Pessoas
- [Tatielle Santos] - Pessoa Colaboradora
- [Thiago Souza] - Pessoa Colaboradora

