///<reference types = "cypress"/> 

const favIcon = '.mobile-right-side > .header-action-link > :nth-child(2) > .offcanvas-toggle > .fa';
const Favlist = '.offcanvas-wishlist';
const wishlistbtn = 'offcanvas-wishlist-action-button';
const validateUrlwishlist = '#Wishlist_area';

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
    //Não estou conseguindo realizar este teste pois o elemento de adição aos favoritos não é visível

    //Caso de teste para validar Funcionamento de exclusaõ dos itens Favoritos
    validateDeleteFav(){
        let tamInicial;

        cy.get(favIcon)
        .should('be.visible')
        .should('be.exist')
            .click()
              
        cy.get(Favlist).find('li').then(($li) => {
            tamInicial = $li.length;
        });
      
        cy.get(':nth-child(4) > .text-right > .offcanvas-wishlist-item-delete > .fa')
        .should('be.visible')
        .should('be.exist')
            .click();
        
        cy.get(Favlist).find('li').then(($li) => {
            const tamFinal = tamInicial - 1; 
            expect(tamInicial).to.be.greaterThan(tamFinal);
            expect(tamFinal).to.be.eq(3);
        });
    }

    //Validar exibição do wishlist
    validateWishList(){
        this.validateFavbarFunction();
        cy.get('.theme-btn-one ').contains('View wishlist')
            .click()
        cy.url().should('eq', 'https://www.automationpratice.com.br/wishlist')
        cy.get(validateUrlwishlist)
        .should('be.visible')
        .should('be.exist');
    }

    //Criação de casos de teste também para página de favoritos    
}



module.exports = new Favbar();