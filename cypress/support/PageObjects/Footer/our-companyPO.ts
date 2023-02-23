import footerElements from "../../Elements/footerElements"

interface allContentComponents {
    contentTitleTag?:string,
    contentTitle?: string,
    contentSubtitle?: string,
    firstTextContent?: string,
    secondTextContent?: string,
    thirdTextContent?: string,
    fourthTextContent?: string,
    fifthTextContent?: string,
    sixthTextContent?: string
}

interface siteMapContentComponents{
    ourOffersColumn?: string,
    categoriesColumn?: string,
    yourAccountColumn?: string,
    pagesColumn?: string
}

interface IOurCompany{
    validateTheDeliveryScreen(params: allContentComponents):void
    validateTheLegalNoticeScreen(params: allContentComponents):void
    validateTermsAndConditionsScreen(params: allContentComponents):void

    validateSecurePaymentScreen(params: allContentComponents):void
}

class ourCompanyPO implements IOurCompany{
    validateTheDeliveryScreen(contentTitleTag?, contentTitle?, contentSubtitle?, secondTextContent?,thirdTextContent?){
        cy.get(contentTitleTag).should('contain', contentTitle).and('be.visible')
        cy.get(footerElements.contentSubtitle()).should('contain', contentSubtitle).and('be.visible')
        cy.get(footerElements.secondTextContent()).should('contain', secondTextContent).and('be.visible')
        cy.get(footerElements.thirdTextContent()).should('contain', thirdTextContent).and('be.visible')
    }

    validateTheLegalNoticeScreen(contentTitleTag?, contentTitle?, contentSubtitle?, secondTextContent?,thirdTextContent?){
        this.validateTheDeliveryScreen(contentTitleTag, contentTitle, contentSubtitle, secondTextContent,thirdTextContent)
    }

    validateTermsAndConditionsScreen(contentTitleTag?, contentTitle?, contentSubtitle?, firstTextContent?,secondTextContent?, thirdTextContent?,fourthTextContent?, fifthTextContent?, sixthTextContent? ){
        cy.get(contentTitleTag).should('contain', contentTitle).and('be.visible')
        cy.get(footerElements.contentSubtitle()).should('contain', contentSubtitle).and('be.visible')
        cy.get(footerElements.firstTextContent()).should('contain', firstTextContent).and('be.visible')
        cy.get(footerElements.secondTextContent()).should('contain', secondTextContent).and('be.visible')
        cy.get(footerElements.thirdTextContent()).should('contain', thirdTextContent).and('be.visible')
        cy.get(footerElements.fourthTextContent()).should('contain', fourthTextContent).and('be.visible')
        cy.get(footerElements.fifthTextContent()).should('contain', fifthTextContent).and('be.visible')
        cy.get(footerElements.sixthTextContent()).should('contain', sixthTextContent).and('be.visible')
    }

    validateSecurePaymentScreen(contentTitleTag?, contentTitle?, firstTextContent?, secondTextContent?, thirdTextContent?, fourthTextContent?){
        cy.get(contentTitleTag).should('contain', contentTitle).and('be.visible')
        cy.get(footerElements.firstTextContent()).should('contain', firstTextContent).and('be.visible')
        cy.get(footerElements.secondTextContent()).should('contain', secondTextContent).and('be.visible')
        cy.get(footerElements.thirdTextContent()).should('contain', thirdTextContent).and('be.visible')
        cy.get(footerElements.fourthTextContent()).should('contain', fourthTextContent).and('be.visible')
    }

    validateSitemapScreen(){

    }

    checkRedirectLinksWithinLegalNoticeText(){
        cy.get('p > a').eq(0).should('have.attr', 'href', footerElements.prestaShopSoftwareLink())
        cy.get('p > a').eq(1).should('have.attr', 'href', footerElements.prestaShopEcommerceLink())
    }
}

export default new ourCompanyPO()