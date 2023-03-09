import footerElements from "../../Elements/Footer/footerElements"
import ourCompanyElements from "../../Elements/Footer/ourCompanyElements"

class ourCompanyPO{
    validateOurCompanyColumn(){
        cy.get(ourCompanyElements.ourCompanyColumn()).should('be.visible')
        cy.get(ourCompanyElements.ourCompanyColumn()).children().eq(2).children().should('have.length', 8)
    }

    accessAnyLinkInOurOfffersColumn(index:number, labelText:string, url:string){
        cy.get(ourCompanyElements.sitemapOurOffersColumn()).children().eq(index).find('a').contains(labelText).click()
        cy.url().should('contain', url)
    }

    validateTheDeliveryScreen(contentTitleTag?:string, contentTitle?:string, contentSubtitle?:string, secondTextContent?:string,thirdTextContent?:string){
        cy.get(contentTitleTag).should('contain', contentTitle).and('be.visible')
        cy.get(footerElements.contentSubtitle()).should('contain', contentSubtitle).and('be.visible')
        cy.get(footerElements.secondTextContent()).should('contain', secondTextContent).and('be.visible')
        cy.get(footerElements.thirdTextContent()).should('contain', thirdTextContent).and('be.visible')
    }

    validateTheLegalNoticeScreen(contentTitleTag?:string, contentTitle?:string, contentSubtitle?:string, secondTextContent?:string,thirdTextContent?:string){
        this.validateTheDeliveryScreen(contentTitleTag, contentTitle, contentSubtitle, secondTextContent,thirdTextContent)
    }

    validateTermsAndConditionsScreen(contentTitleTag?:string, contentTitle?:string, contentSubtitle?:string, firstTextContent?:string,secondTextContent?:string, thirdTextContent?:string,fourthTextContent?:string, fifthTextContent?:string, sixthTextContent?:string ){
        cy.get(contentTitleTag).should('contain', contentTitle).and('be.visible')
        cy.get(footerElements.contentSubtitle()).should('contain', contentSubtitle).and('be.visible')
        cy.get(footerElements.firstTextContent()).should('contain', firstTextContent).and('be.visible')
        cy.get(footerElements.secondTextContent()).should('contain', secondTextContent).and('be.visible')
        cy.get(footerElements.thirdTextContent()).should('contain', thirdTextContent).and('be.visible')
        cy.get(footerElements.fourthTextContent()).should('contain', fourthTextContent).and('be.visible')
        cy.get(footerElements.fifthTextContent()).should('contain', fifthTextContent).and('be.visible')
        cy.get(footerElements.sixthTextContent()).should('contain', sixthTextContent).and('be.visible')
    }

    validateSecurePaymentScreen(contentTitleTag?:string, contentTitle?:string, firstTextContent?:string, secondTextContent?:string, thirdTextContent?:string, fourthTextContent?:string){
        cy.get(contentTitleTag).should('contain', contentTitle).and('be.visible')
        cy.get(footerElements.firstTextContent()).should('contain', firstTextContent).and('be.visible')
        cy.get(footerElements.secondTextContent()).should('contain', secondTextContent).and('be.visible')
        cy.get(footerElements.thirdTextContent()).should('contain', thirdTextContent).and('be.visible')
        cy.get(footerElements.fourthTextContent()).should('contain', fourthTextContent).and('be.visible')
    }

    validateSitemapScreen(ourOffersColumnTitle?:string, categoriesColumnTitle?:string, yourAccountColumnTitle?:string, pagesTitle?:string){
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

    validateBrandsScreenMenu(homeText?:string, brandsText?:string, brandsTitle?:string){
        cy.get(ourCompanyElements.sitemapBrandsContainer()).find('ol').should('contain', homeText).and('contain', brandsText)
        cy.get(ourCompanyElements.title()).should('contain', brandsTitle)

        cy.get(ourCompanyElements.firstBrandCard()).then(($el) =>{
            cy.get($el).children().eq(0).should('have.class', ourCompanyElements.brandImg()).find('img').and('be.visible')
            cy.get($el).children().eq(1).should('have.class', ourCompanyElements.brandInfos()).should('contain', 'Graphic Corner')
            cy.get($el).children().eq(2).should('have.class', ourCompanyElements.brandProducts()).should('contain', '9 products').and('contain', 'View products')
        })

        cy.get(ourCompanyElements.secondBrandCard()).then(($el) =>{
            cy.get($el).children().eq(0).should('have.class', ourCompanyElements.brandImg()).find('img').and('be.visible')
            cy.get($el).children().eq(1).should('have.class', ourCompanyElements.brandInfos()).should('contain', 'Studio Design')
            cy.get($el).children().eq(2).should('have.class', ourCompanyElements.brandProducts()).should('contain', '9 products').and('contain', 'View products')
        })
    }

    accessAnyMenuFromTheBrandsScreen(selector?:string,index?:number, url?:string){
        cy.get(selector).eq(index).click(+15, +5, {force:true})
        cy.url().should('contain', url)
    }

    validateBrandsScreen(fixture){
        cy.fixture(fixture).then((data) => {
            cy.get(ourCompanyElements.title()).should('contain', data.title).and('be.visible')
            cy.get(ourCompanyElements.subtitle()).should('contain', data.subtitle).and('be.visible')
            cy.get(ourCompanyElements.totalProductsLabel()).should('contain', data.totalOfProductsLabel)
            cy.get(ourCompanyElements.productsBeingShown()).should('contain', data.productsBeingShownLabel)
            cy.iteratingOverAJSONObject()
        })
    }

    validateSomeProductAtGraphicCorner(
        productName, productPrice, 
        productInformation, paperType, 
        paperTypeDefault, chosenPaperType, 
        securityReassurance, deliveryReassurance, 
        returnReassurance, productDescripiton,
        productReference,productInStock,  
        productComposition, productProperty){
        cy.get(ourCompanyElements.productMiniature()).eq(1).click().then(() => {
            cy.get(ourCompanyElements.title()).should('be.visible').and('contain', productName)
            cy.get(ourCompanyElements.priceInsideTheProductPage()).should('be.visible').and('contain', productPrice)
            cy.get(ourCompanyElements.productDescriptionInsideTheProductPage()).should('be.visible').and('contain', productInformation)
            cy.get(ourCompanyElements.paperTypeLabel()).should('be.visible').and('contain', paperType).then(() =>{
                cy.get(ourCompanyElements.paperTypeSelect()).should('contain', paperTypeDefault)
                cy.get(ourCompanyElements.paperTypeSelect()).select(chosenPaperType).should('contain', chosenPaperType)
            })
            cy.get(ourCompanyElements.quantityOfProductsLabel()).should('be.visible').and('contain', 'Quantity')
            cy.get(ourCompanyElements.quantityWanted()).should('contain.value', 1)
            cy.get(ourCompanyElements.addToCartButton()).should('be.visible').and('contain.text', 'Add to cart')
            cy.get(ourCompanyElements.socialSharing()).children().should('have.length', 4)
            cy.get(ourCompanyElements.blockReassurance()).should('be.visible').children().children().as('reassurance').then(() => {
                cy.get('@reassurance').eq(0).should('contain', securityReassurance)
                cy.get('@reassurance').eq(1).should('contain', deliveryReassurance)
                cy.get('@reassurance').eq(2).should('contain', returnReassurance)
            })
            cy.get(ourCompanyElements.productDescription()).should('contain', productDescripiton).and('be.visible')
            cy.get(ourCompanyElements.productDetailsLink()).click()
            cy.get(ourCompanyElements.productDetails()).should('be.visible').then(() => {
                cy.get(ourCompanyElements.productReference()).should('contain', productReference).and('be.visible')
                cy.get(ourCompanyElements.productQuantity()).should('contain', productInStock).and('be.visible')
                cy.get(ourCompanyElements.productComposition()).should('contain.html', productComposition).and('be.visible')
                cy.get(ourCompanyElements.productProperty()).should('contain.html', productProperty).and('be.visible')
            })
        })
    }

    validateSomeProductAtStudioDesign(){

    }
}

export default new ourCompanyPO()