/// <reference types="cypress"/>

import productsPO from "../../support/PageObjects/footer/productsPO";

const blockCategoryText: string = 'Discover our favorites fashionable discoveries, a selection of cool items to integrate in your wardrobe. Compose a unique style with personality which matches your own.'

describe('Clothes page test suite', () => {
    it('Access Clothes page and validate the information on the screen', () => {
        cy.visit('/')
        productsPO.accessClothesPage()
        productsPO.checkBlockCategory(blockCategoryText)
        productsPO.validateDiscountFlag('-20%')
        productsPO.validateProductPrice('$23.90', '$35.90')
        productsPO.validateTheDiscountedPrice('$19.12', '28.72')
        productsPO.validateQuantityOfProductsOnThePage('There are 2 products.', 'Showing 1-2 of 2 item(s)')
        
        cy.percySnapshot()
    });
});