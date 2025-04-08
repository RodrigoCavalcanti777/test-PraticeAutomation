///<reference types="cypress" />

const RegisterUser = '.top_header_right';
const Registername = '#user';
const Registeremail = '#email';
const Registerpassword = '#password';
const btnRegister = '.theme-btn-one ';
const RegisterAlert ='.swal2-popup';


class RegisterPage {

    //Fluxo para se chegar na rota de registro de user
    registrationFlow(){
        cy.get(RegisterUser).contains('Cadastro')
        .should('be.exist')
        .should('be.visible')
            .click()
        cy.url().should('eq', 'https://www.automationpratice.com.br/register')
    }

    //Validar footer da página
    //Realizar Todo o fluxo de Registro de usuario
    validateLogin(name,email,password){
        cy.get(Registername)
        .should('be.exist')
        .should('be.visible')
            .type(name)

        cy.get(Registeremail)
        .should('be.exist')
        .should('be.visible')
            .type(email)

        cy.get(Registerpassword)
        .should('be.exist')
        .should('be.visible')
            .type(password)

        cy.get(btnRegister).contains('Cadastrar')
        .should('be.exist')
        .should('be.visible')
            .click();
        
        cy.get(RegisterAlert)
        .should('be.visible');
        
    }
}

module.exports = new RegisterPage();
