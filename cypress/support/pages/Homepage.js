///<reference types="cypress" />

const acessHomepage = '.logo';
const carrosel = '#electronics_banner';
const promo = '.top_header_left';

const TopProduct = {
    titleTopProduct: '.left_heading_three',
    bannerProducts: '#electronics_top_product',
    navTopicProducts: '.tabs_right_button',
    tabsTopicProduct: '.tabs_right_button > .nav > li ' ,
    itensTopProduct: '#video > .row > div'

}

class HomePage {

    //Caso de Teste de validação de acesso a Homepage da aplicação
    validateHomepage(){
        cy.get(acessHomepage)
            .should('be.visible')
            .should('be.exist');
    }

    //Caso de teste de validação do carrosel da Homepage
    validateCarroselHome(){
        cy.get(carrosel)
            .should('be.visible')
            .should('be.exist');
    }

    //Caso de teste de validação de redirecionamento para a PromoPage
    validadeRedirectPromo(){
    //Aplicação com  erro nesta validação:?
    //Bug aparentemente estranho, pois é um problema de network/requisição realizada de forma anormal pela aplicação.
        cy.contains(promo,'Aproveitar...')
            .should('be.visible')
            .should('be.exist')
        .click();
        cy.wait(1000);
        cy.url().should('eq', 'https://www.automationpratice.com.br/shop');
       
    }

    //Caso de teste para validação dos tópicos
    //Este caso de teste realiza validação do tópicos de produtos da homepage
    validadeBannerTopicProducts(){
        cy.get(TopProduct.bannerProducts)
            .should('be.visible')
            .should('be.exist')
        cy.get(TopProduct.bannerProducts).contains('Top Product')
            .should('be.visible')
            .should('be.exist')
        cy.get(TopProduct.tabsTopicProduct)
            .should('have.length',4);
        cy.get(TopProduct.itensTopProduct).should('have.length.greaterThan', 5);
    }
   

}



module.exports = new HomePage();