/// <reference types="cypress"/>

import footerPO from "../../support/PageObjects/footerPO";

describe('Footer test suit ', () => {
    it('Validate footer components', () => {
        cy.visit('/')
        footerPO.checkNewsLatterLabel()
        footerPO.checkInputEmailNewsletterSubscribe()
        footerPO.checkSubscribeButton()
        footerPO.checkNewsletterUnsubscribeInfo()
        footerPO.checkProductsColumn()
        footerPO.checkOurCompanyColumn()
        footerPO.checkYourAccountColumn()
        footerPO.checkStoreInformationColumn()
    });

    it.only('Validate product column links', () => {
        cy.visit('/')
        footerPO.clickOnPriceDropInsideProductsColumn()
    });
});