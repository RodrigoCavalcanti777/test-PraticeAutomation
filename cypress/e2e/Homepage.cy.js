///<reference types="cypress" />

const Home = require('../support/pages/Homepage');

describe('Cenaries of teste / HomePage', () =>{

    beforeEach('', () =>{
        cy.visit('https://www.automationpratice.com.br/');
    })

    it('Acess Homepage of QaAutomation:/', () =>{
        Home.validateHomepage();
    })

    it('Validate carrosel of Homepage', () =>{
        Home.validateCarroselHome();
    })
})