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
    });  

    it('Deve adicionar um item ao FavBar', () => {
        FavBar.validateFavbarFunction();
     });

   it('Adição de itens aos Favoritos', () =>{
        FavBar.validateaddItensFavBar();
   });
   
   it('Validar exclusão de itens na FavBar', () =>{
        FavBar.validateDeleteFav();
   });

   it.only('Validar exibição da Página WishList', () =>{
        FavBar.validateWishList();
   });
})