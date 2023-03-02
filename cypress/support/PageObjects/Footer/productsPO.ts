import productsElements from "../../Elements/Footer/productsElements"
import footerElements from "../../Elements/Footer/footerElements"
import clothesElements from "../../Elements/clothesElements"

class productsPO{
    validateProductsOnThePage(quantityOfProductsText: string, productsInTheListing: string, quantityOfProducts: number){
        cy.get(clothesElements.productsCard()).should('be.visible')
        cy.get(clothesElements.productsCard()).children().should('have.length', quantityOfProducts)
        cy.get(clothesElements.totalProductsLabel()).should('have.text', quantityOfProductsText)
        cy.get(clothesElements.labelOfHowManyProductsAreBeingShown()).should('contain.text', productsInTheListing)
    }

    validateScreenIfThereAreNoProductsToBeShown(inconvenienceText: string, requestToSearchAgainText: string, placeHolderText: string){
        cy.get(footerElements.inconvenienceInformationText()).should('contain.text', inconvenienceText).and('be.visible')
        cy.get(footerElements.requestToSearchAgain()).should('contain.text', requestToSearchAgainText).and('be.visible')
        cy.get(footerElements.inputToSearchProducts()).eq(1).should('have.attr', 'placeholder', placeHolderText)
    }

    validateDiscountFlag(discountFlag:string){
        cy.get(clothesElements.productsCard()).children().find(clothesElements.productFlagDiscount()).then(($el) => {
                expect($el).to.contain.text(discountFlag)
        })
    }

    validateProductPrice(price1:string, price2:string){
        cy.get(clothesElements.productsCard()).children().find(clothesElements.regularPrice()).then(($el) =>{
                expect($el).to.contain.text(price1)
                expect($el).to.contain.text(price2)
        })
    }

    validateTheDiscountedPrice(price1:string, price2:string){
        cy.get(clothesElements.productsCard()).children().find(clothesElements.discountedPrice()).then(($el) => {
                expect($el).to.contain.text(price1)
                expect($el).to.contain.text(price2)
        })
    }

    accessClothesPage(){
        cy.get(clothesElements.clothesAccessLink()).click({force:true})
        cy.url().should('contain', clothesElements.clothesUrlPage())
    }

    validateBlockCategory(text:string){
        cy.get(clothesElements.blockCategory()).should('be.visible').then(($el) => {
                expect($el).to.contain.html('h1')
                expect($el).to.contain.html('span')
                expect($el).to.contain.html('img')
                expect($el).to.contain.text(text)
        })
    }

    validateQuantityOfProductsOnThePage(quantityOfProducts: string, productsInTheListing: string){
        cy.get(clothesElements.totalProductsLabel()).should('have.text', quantityOfProducts)
        cy.get(clothesElements.labelOfHowManyProductsAreBeingShown()).should('contain.text', productsInTheListing)
    }

    validateRedirectLinksWithinLegalNoticeText(){
        cy.get('p > a').eq(0).should('have.attr', 'href', productsElements.prestaShopSoftwareLink())
        cy.get('p > a').eq(1).should('have.attr', 'href', productsElements.prestaShopEcommerceLink())
    }

}

export default new productsPO()