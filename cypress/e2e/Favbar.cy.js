///<reference types = "cypress"/>

const baseUrl = Cypress.config("baseUrl");
const FavBar = require('../support/pages/FavBar');

describe('Cenaries of teste - FavBar', () =>{

    beforeEach(() => {  
        cy.visit(baseUrl);
        cy.reload();
        cy.clearAllCookies();
        cy.clearAllLocalStorage();  
    })

    it('Deve adicionar um item ao FavBar', () => {
       FavBar.validateFavbar();
    })  

    it.only('Deve adicionar um item ao FavBar', () => {
        FavBar.validateFavbarFunction();
     })
})