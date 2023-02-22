import footerElements from "../Elements/footerElements";
import productsElements from "../Elements/productsElements";

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

    checkProductsOnThePage(quantityOfProductsText: string, productsInTheListing: string, quantityOfProducts: number){
        cy.get(productsElements.productsCard()).should('be.visible')
        cy.get(productsElements.productsCard()).children().should('have.length', quantityOfProducts)
        cy.get(productsElements.totalProductsLabel()).should('have.text', quantityOfProductsText)
        cy.get(productsElements.labelOfHowManyProductsAreBeingShown()).should('contain.text', productsInTheListing)
    }

    checkScreenIfThereAreNoProductsToBeShown(inconvenienceText: string, requestToSearchAgainText: string, placeHolderText: string){
        cy.get(footerElements.inconvenienceInformationText()).should('contain.text', inconvenienceText).and('be.visible')
        cy.get(footerElements.requestToSearchAgain()).should('contain.text', requestToSearchAgainText).and('be.visible')
        cy.get(footerElements.inputToSearchProducts()).eq(1).should('have.attr', 'placeholder', placeHolderText)
    }

    clickOnTheDesiredLinkInsideTheFooter(columnsOnTheFooter:any ,menuLinkLabel: string, pageUrl: string, sectionTitleLevel: string,pageTile: string){
        cy.get(columnsOnTheFooter).children().eq(2).find('a').contains(menuLinkLabel).should('be.visible').click()
        cy.url().should('contain', pageUrl)
        cy.get(sectionTitleLevel).should('contain', pageTile)
    }

    checkAllTextInsideContentCard(contentTitleTag?:string, contentTitle?: string, contentSubtitle?: string, secondTextContent?: string , thirdTextContent?: string){
        cy.get(contentTitleTag).should('contain', contentTitle).and('be.visible')
        cy.get(footerElements.contentSubtitle()).should('contain', contentSubtitle).and('be.visible')
        cy.get(footerElements.secondTextContent()).should('contain', secondTextContent).and('be.visible')
        cy.get(footerElements.thirdTextContent()).should('contain', thirdTextContent).and('be.visible')
    }

    checkAllTextInsideContentCardWithManyElements(contentTitleTag?:string, contentTitle?: string, contentSubtitle?: string, firstTextContent?: string, secondTextContent?: string , thirdTextContent?: string, fourthTextContent?: string, fifthTextContent?: string, sixthTextContent?: string){
        this.checkAllTextInsideContentCard(contentTitleTag, contentTitle, contentSubtitle, secondTextContent, thirdTextContent)
        cy.get(footerElements.firstTextContent()).should('contain', firstTextContent)
        cy.get(footerElements.fourthTextContent()).should('contain', fourthTextContent)
        cy.get(footerElements.fifthTextContent()).should('contain', fifthTextContent)
        cy.get(footerElements.sixthTextContent()).should('contain', sixthTextContent)
    }

    checkRedirectLinksWithinLegalNoticeText(){
        cy.get('p > a').eq(0).should('have.attr', 'href', footerElements.prestaShopSoftwareLink())
        cy.get('p > a').eq(1).should('have.attr', 'href', footerElements.prestaShopEcommerceLink())
    }

}

export default new footerPO()