/// <reference types="cypress"/>

import footerPO from "../../support/PageObjects/footerPO";
import productsPO from "../../support/PageObjects/productsPO";

describe('Footer test suit ', () => {
    it('Validate footer components', () => {
        cy.visit('/')
        footerPO.checkNewsLatterLabel('Get our latest news and special sales')
        footerPO.checkInputEmailNewsletterSubscribe()
        footerPO.checkSubscribeButton('Subscribe')
        footerPO.checkNewsletterUnsubscribeInfo('You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.')
        footerPO.checkProductsColumn()
        footerPO.checkOurCompanyColumn()
        footerPO.checkYourAccountColumn()
        footerPO.checkStoreInformationColumn('Store information', 'admin@marcelodebittencourt.com')

        cy.percySnapshot()
    });

    it('Validate access and components to the prices drop screen through footer', () => {
        cy.visit('/')
        footerPO.clickOnTheDesuredLinkInsideTheFooter('Prices drop', '/prices-drop', 'On sale')
        footerPO.checkProductsOnThePage('There are 2 products.', 'Showing 1-2 of 2 item(s)', 2)
        productsPO.validateDiscountFlag('-20%')
        productsPO.validateProductPrice('$35.90', '$23.90')
        cy.percySnapshot()
    });

    it.only('Validate access and components to the New Products screen through footer', () => {
        cy.visit('/')
        footerPO.clickOnTheDesuredLinkInsideTheFooter('New products', '/new-products', 'New products')
        footerPO.checkScreenIfThereAreNoProductsToBeShown('Sorry for the inconvenience.', 'Search again what you are looking for', 'Search our catalog')
    });

    it('Validate access and components to the Best sales screen through footer', () => {
        cy.visit('/')
        footerPO.checkScreenIfThereAreNoProductsToBeShown('Sorry for the inconvenience.', 'Search again what you are looking for', 'Search our catalog')
    });
});