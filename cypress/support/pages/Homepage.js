const acessHomepage = '.logo';
const carrosel = '#electronics_banner';
const promo = '.top_header_left';
const titleTopicName = '.left_heading_three';
const navTopicProducts = '.tabs_right_button';

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
    validateTopics(){

        //Validação do título "Top Product"
        cy.contains(titleTopicName,'Top Product')
        .should('be.exist')
        .should('be.visible')
        cy.get(navTopicProducts)
        .should('be.exist')
        .should('be.visible')
        
    }

}



module.exports = new HomePage();