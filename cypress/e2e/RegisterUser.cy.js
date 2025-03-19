///<reference types="cypress" />

const RegisterPage = require("../support/pages/RegisterPage");
const baseUrl = Cypress.config('baseUrl');
import { faker, Faker } from "@faker-js/faker";


const email = faker.internet.email();
const name = faker.person.fullName();
const password = faker.internet.password();

describe('Cenaries of test / RegisterUser', () =>{
    beforeEach('', () =>{
        cy.visit(baseUrl);
        cy.reload();
        cy.clearAllCookies();
        cy.clearLocalStorage();
    });

    //Caso de teste de validação completa do registerUser
    it('Complete process of Register User', () =>{
        RegisterPage.validateLogin(name, email, password);
    })

    
})