///<reference types="cypress" />

const Home = require('../support/pages/Homepage');
const baseUrl = Cypress.config('baseUrl');



describe('Cenaries of teste / HomePage', () =>{

    beforeEach('', () =>{
        cy.visit(baseUrl);
        cy.reload();
        cy.clearAllCookies();
        cy.clearLocalStorage();
    });

    it('Acess Homepage of QaAutomation:/', () =>{
        Home.validateHomepage();
    });

    it('Validate carrosel of Homepage:/', () =>{
        Home.validateCarroselHome();
        
    });

    it('Redirect to promo:/', () =>{
        Home.validadeRedirectPromo();
    });

    it('Validate Top Products', () => {
        Home.validadeBannerTopicProducts()     
    });

    it.only('Validate Footer of Homepage:/', () =>{
        Home.validateFooterPage();
    });
})