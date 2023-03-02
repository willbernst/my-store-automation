import footerElements from "../../Elements/Footer/footerElements"
import ourCompanyElements from "../../Elements/Footer/ourCompanyElements"

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
    validateSitemapScreen(params: siteMapContentComponents):void
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

    validateSitemapScreen(ourOffersColumnTitle?, categoriesColumnTitle?, yourAccountColumnTitle?, pagesTitle?){
        cy.get(ourCompanyElements.sitemapOurOffersTitle()).should('contain.text', ourOffersColumnTitle)
        cy.get(ourCompanyElements.sitemapOurOffersColumn()).children().should('have.length.at.least', 3)
        cy.get(ourCompanyElements.sitemapCategoriesTitle()).should('contain.text', categoriesColumnTitle)
        cy.get(ourCompanyElements.sitemapCategoriesColumn()).children().as('categoriesColumnLinks')

        cy.get('@categoriesColumnLinks').eq(0).should('have.length.at.least', 1)
        cy.get('@categoriesColumnLinks').eq(1).children().should('have.length.at.least', 3)
        cy.get('@categoriesColumnLinks').eq(1).children().eq(0).children().should('have.length.at.least', 2)
        cy.get('@categoriesColumnLinks').eq(1).children().eq(0).children().eq(1).children().should('have.length.at.least', 2)
        cy.get('@categoriesColumnLinks').eq(1).children().eq(1).children().eq(0).should('have.length.at.least', 1)
        cy.get('@categoriesColumnLinks').eq(1).children().eq(1).children().eq(1).children().should('have.length.at.least', 2)

        cy.get(ourCompanyElements.sitemapYourAccountTitle()).should('contain.text', yourAccountColumnTitle)
        cy.get(ourCompanyElements.sitemapYourAccountColumn()).children().should('have.length.at.least', 2)
        cy.get(ourCompanyElements.sitemapPagesTitle()).should('contain.text', pagesTitle)
        cy.get(ourCompanyElements.sitemapPagesColumn()).children().should('have.length.at.least', 8)
    }

    validateBrandsScreen(homeText, brandsText){
        cy.get(ourCompanyElements.sitemapBrandsContainer()).find('ol').should('contain', homeText).and('contain', brandsText)
    }
    
    accessAnyLinkInOurOfffersColumn(index, labelText, url){
        cy.get(ourCompanyElements.sitemapOurOffersColumn()).children().eq(index).find('a').contains(labelText).click()
        cy.url().should('contain', url)
    }
    
    validateOurCompanyColumn(){
        cy.get(ourCompanyElements.ourCompanyColumn()).should('be.visible')
        cy.get(ourCompanyElements.ourCompanyColumn()).children().eq(2).children().should('have.length', 8)
    }
}

export default new ourCompanyPO()