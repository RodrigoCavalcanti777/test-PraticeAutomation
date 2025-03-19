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

const footerPage = {
    footer: '#footer_one',
    containerFooter: '#footer_one  >  .container  >  .row > div',
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
        cy.contains(promo,'Aproveitar...')
            .should('be.visible')
            .should('be.exist')
        .click();
        cy.wait(1000);
        cy.url().should('eq', 'https://www.automationpratice.com.br/shop');
        //Aplicação com  erro nesta validação:?
        //Bug aparentemente estranho, pois é um problema de network/requisição realizada de forma anormal pela aplicação.
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
        cy.get(TopProduct.itensTopProduct)
            .should('have.length.greaterThan', 5);
    }

    validateBannerPromotion(){
        //Caso de teste para validação do banner de promoção na página
    }

    validateBannerWeeklyProduct(){
        //Caso de teste para validação do banner de produtos semanais na página
    }

    validateInstagramBanner(){
        //Caso de teste para validação do banner do Instagram na página
    }

    //Caso de teste para validação de exibição Footer da página
    validateFooterPage(){
        cy.get(footerPage.footer)
        .should('be.visible')
        .should('be.exist')
        cy.get(footerPage.containerFooter)
        .should('be.exist')
        .should('be.visible')
        .should('have.length', 4)
        
    }
   

}



module.exports = new HomePage();