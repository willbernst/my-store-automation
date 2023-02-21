/// <reference types="cypress"/>

import footerPO from "../../../support/PageObjects/footerPO";
import footerElements  from "../../../support/Elements/footerElements"
import productsPO from "../../../support/PageObjects/productsPO";

describe('Test suite in the products column at the footer', () => {

    it('Validate access and components to the prices drop screen through footer', () => {
        cy.visit('/')
        footerPO.clickOnTheDesiredLinkInsideTheFooter(footerElements.productsColumn(),'Prices drop', '/prices-drop', 'On sale')
        footerPO.checkProductsOnThePage('There are 2 products.', 'Showing 1-2 of 2 item(s)', 2)
        productsPO.validateDiscountFlag('-20%')
        productsPO.validateProductPrice('$35.90', '$23.90')
        cy.percySnapshot()
    });

    it('Validate access and components to the New Products screen through footer', () => {
        cy.visit('/')
        footerPO.clickOnTheDesiredLinkInsideTheFooter(footerElements.productsColumn(),'New products', '/new-products', 'New products')
        footerPO.checkScreenIfThereAreNoProductsToBeShown('Sorry for the inconvenience.', 'Search again what you are looking for', 'Search our catalog')
    });

    it('Validate access and components to the Best sales screen through footer', () => {
        cy.visit('/')
        footerPO.clickOnTheDesiredLinkInsideTheFooter(footerElements.productsColumn(), 'Best sales', '/best-sales', 'Best sellers')
        footerPO.checkScreenIfThereAreNoProductsToBeShown('Sorry for the inconvenience.', 'Search again what you are looking for', 'Search our catalog')
    });
});