import productsElements from "../Elements/productsElements"

class productsPO{
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