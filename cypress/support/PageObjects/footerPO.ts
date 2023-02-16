import footerElements from "../Elements/footerElements";

class footerPO{
    checkNewsLatterLabel(){
        cy.get(footerElements.newsletterLabel()).should('be.visible').and('contain.text', 'Get our latest news and special sales')
    }

    checkInputEmailNewsletterSubscribe(){
        cy.get(footerElements.emailInputNewsletterSubscribe()).should('be.visible').and('be.empty')
    }

    checkSubscribeButton(){
        cy.get(footerElements.subscribeNewsletterButton()).should('be.visible').and('contain.value', 'Subscribe')
    }

    checkNewsletterUnsubscribeInfo(){
        cy.get(footerElements.newsletterUnsubscribeInform()).should('be.visible').and('contain.text', 'You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.')
    }

    checkProductsColumn(){
        cy.get(footerElements.productsColumn()).should('be.visible')
        cy.get(footerElements.productsColumn()).children().eq(2).children().should('have.length', 3)
    }

    checkOurCompanyColumn(){
        cy.get(footerElements.ourCompanyColumn()).should('be.visible')
        cy.get(footerElements.ourCompanyColumn()).children().eq(2).children().should('have.length', 8)
    }

    checkYourAccountColumn(){
        cy.get(footerElements.yourAccountColumn()).should('be.visible')
        cy.get(footerElements.yourAccountColumn()).children().eq(2).children().should('have.length', 4)
    }

    checkStoreInformationColumn(){
        cy.get(footerElements.storeInformationColumn()).should('be.visible')
        cy.get(footerElements.storeInformationColumn()).children().eq(0).should('have.text', 'Store information')
        cy.get(footerElements.storeInformationColumn()).children().eq(3).should('have.text', 'admin@marcelodebittencourt.com')
    }

    clickOnPriceDropInsideProductsColumn(){
        cy.get(footerElements.pricesDropLinkInseideProductsColumn()).should('contain.text', 'Prices drop').click()
        cy.url().should('contain', footerElements.pricesDropUrl())
    }
}

export default new footerPO()