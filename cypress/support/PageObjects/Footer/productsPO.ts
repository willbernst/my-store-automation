import productsElements from "../../Elements/productsElements"
import footerElements from "../../Elements/footerElements"

class productsPO{
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

    validateDiscountFlag(discountFlag:string){
        cy.get(productsElements.productsCard()).children().find(productsElements.productFlagDiscount()).then(($el) => {
                expect($el).to.contain.text(discountFlag)
        })
    }

    validateProductPrice(price1:string, price2:string){
        cy.get(productsElements.productsCard()).children().find(productsElements.regularPrice()).then(($el) =>{
                expect($el).to.contain.text(price1)
                expect($el).to.contain.text(price2)
        })
    }

    validateTheDiscountedPrice(price1:string, price2:string){
        cy.get(productsElements.productsCard()).children().find(productsElements.discountedPrice()).then(($el) => {
                expect($el).to.contain.text(price1)
                expect($el).to.contain.text(price2)
        })
    }

    accessClothesPage(){
        cy.get(productsElements.clothesAccessLink()).click({force:true})
        cy.url().should('contain', productsElements.clothesUrlPage())
    }

    checkBlockCategory(text:string){
        cy.get(productsElements.blockCategory()).should('be.visible').then(($el) => {
                expect($el).to.contain.html('h1')
                expect($el).to.contain.html('span')
                expect($el).to.contain.html('img')
                expect($el).to.contain.text(text)
        })
    }

    validateQuantityOfProductsOnThePage(quantityOfProducts: string, productsInTheListing: string){
        cy.get(productsElements.totalProductsLabel()).should('have.text', quantityOfProducts)
        cy.get(productsElements.labelOfHowManyProductsAreBeingShown()).should('contain.text', productsInTheListing)
    }
}

export default new productsPO()