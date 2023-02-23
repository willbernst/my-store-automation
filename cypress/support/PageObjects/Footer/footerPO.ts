import footerElements from "../../Elements/footerElements";
import productsElements from "../../Elements/productsElements";

class footerPO{
    checkNewsLatterLabel(newsLetterLabel: string){
        cy.get(footerElements.newsletterLabel()).should('be.visible').and('contain.text', newsLetterLabel)
    }

    checkInputEmailNewsletterSubscribe(){
        cy.get(footerElements.emailInputNewsletterSubscribe()).should('be.visible').and('be.empty')
    }

    checkSubscribeButton(subscribeButtonLabel){
        cy.get(footerElements.subscribeNewsletterButton()).should('be.visible').and('contain.value', subscribeButtonLabel)
    }

    checkNewsletterUnsubscribeInfo(unsubscribeInfo: string){
        cy.get(footerElements.newsletterUnsubscribeInform()).should('be.visible').and('contain.text', unsubscribeInfo)
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

    checkStoreInformationColumn(title: string, email: string){
        cy.get(footerElements.storeInformationColumn()).should('be.visible')
        cy.get(footerElements.storeInformationColumn()).children().eq(0).should('have.text', title)
        cy.get(footerElements.storeInformationColumn()).children().eq(3).should('have.text', email)
    }

    clickOnTheDesiredLinkInsideTheFooter(columnsOnTheFooter:any ,menuLinkLabel: string, pageUrl: string, sectionTitleLevel: string,pageTile: string){
        cy.get(columnsOnTheFooter).children().eq(2).find('a').contains(menuLinkLabel).should('be.visible').click()
        cy.url().should('contain', pageUrl)
        cy.get(sectionTitleLevel).should('contain', pageTile)
    }
}

export default new footerPO()