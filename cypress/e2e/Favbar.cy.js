///<reference types = "cypress"/>

const baseUrl = Cypress.config("baseUrl");
const favbar = require('../support/pages/FavBar.js');
describe('Cenaries of teste - FavBar', () =>{

    beforeEach(() => {  
        cy.visit(baseUrl);
        cy.reload();
        cy.clearAllCookies();
        cy.clearAllLocalStorage();  
    })

    //refazer todos os testes deste arquivo

    it('Deve adicionar um item ao FavBar', () => {
       favbar.validateFavbar();
    });  

    it('Deve adicionar um item ao FavBar', () => {
        favbar.validateFavbarFunction();
     });

   it('Adição de itens aos Favoritos', () =>{
        favbar.validateaddItensFavBar();
   });
   
   it('Validar exclusão de itens na FavBar', () =>{
        favbar.validateDeleteFav();
   });

   it('Validar exibição da Página WishList', () =>{    
          favbar.validateFavbarFunction();
          favbar.validateWishList();    
          
   });
})