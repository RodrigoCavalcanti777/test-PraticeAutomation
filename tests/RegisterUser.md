# test-case - Project PraticeAutomatin

## Feature: Register User in QaAutomation Aplication

### TC-01: Complete process of Register User

- **Pré-condição:** Usuário estar Conectado na Aplicação
  1. Acessar a página de Cadastro de usuário([text](https://www.automationpratice.com.br/register))
  2. Preencher os campos validamente os campos de Nome, email e senha.
  3. Clicar em "Cadastrar"
- **Resultado Esperado:** Usuário é redirecionado para a página([text](https://www.automationpratice.com.br/my-account))

### TC-02: Register User with invalid "email"

- **Pré-condição:** Usuário estar Conectado na Aplicação
  1. Acessar a página de Cadastro de usuário([text](https://www.automationpratice.com.br/register))
  2. Preencher os campos validamente os campos de Nome, email e senha.
  3. Campo de email deve ser preenchido de forma inválida
- **Resultado Esperado:** Deverá ser exibida uma exceção abaixo do campo de email com a seguinte frase "O campo e-mail deve ser prenchido corretamente".

### TC-03: Register user with incorrect name

- **Pré-condição:** Usuário estar Conectado na Aplicação
  1. Acessar a página de Cadastro de usuário([text](https://www.automationpratice.com.br/register))
  2. Preencher os campos validamente os campos de Nome, email e senha.
  3. Campo de nome deve ser preenchido de forma incorreta.
- **Resultado Esperado:** Deverá ser exibida uma exceção abaixo do campo de nome com a seguinte frase "O campo nome deve ser preenchido corretamente". 

### TC-01: Register user with incorrect password 

- **Pré-condição:** Usuário estar Conectado na Aplicação
  1. Acessar a página de Cadastro de usuário([text](https://www.automationpratice.com.br/register))
  2. Preencher os campos validamente os campos de Nome, email e senha.
  3. Campo de password deve ser preenchido de forma incorreta.
- **Resultado Esperado:** Deverá ser exibida uma exceção abaixo do campo de nome com a seguinte frase "O campo password deve ser preenchido corretamente". 
