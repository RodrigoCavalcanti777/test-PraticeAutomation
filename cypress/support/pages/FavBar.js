///<reference types = "cypress"/> 

const favIcon = '.mobile-right-side > .header-action-link > :nth-child(2) > .offcanvas-toggle > .fa';

class Favbar {

    //Caso de teste de validação do icon dos favoritos 
    validateExistFavbar(){
        cy.get(favIcon)
        .should('be.visible')
        .should('be.exist');
    }
    //Caso de teste para validação do aparecimento da FavBar na página
    validateFavbarFunction() {
        cy.get(favIcon)
            .click();
        cy.wait(1000);
        cy.url().should('eq', 'https://www.automationpratice.com.br/#offcanvas-wishlish');
    }
    //Adicionar um item aos favoritos
    validateaddItensFavBar(){

    }
    //Validar exibição do icone de exclusão
    //Validar funcionamento da exclusao dos itens
    //Validar funcionamento do wishlist

        
}



module.exports = new Favbar();