const acessHomepage = '.logo';
const carrosel = '#electronics_banner';

class HomePage {

    //Validação do Caso de Teste de validação de acesso a Hoempage da aplicação
    validateHomepage(){
        cy.get(acessHomepage)
        .should('be.visible')
        .should('be.exist');
    }

 
    validateCarroselHome(){
        cy.get(carrosel)
        .should('be.visible')
        .should('be.exist');
    }

}



module.exports = new HomePage();