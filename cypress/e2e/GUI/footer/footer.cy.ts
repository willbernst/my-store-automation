/// <reference types="cypress"/>

import footerPO from "../../../support/PageObjects/Footer/footerPO";
import ourCompanyPO from "../../../support/PageObjects/Footer/our-companyPO";
import yourAccountPO from "../../../support/PageObjects/Footer/yourAccountPO";

describe('Footer test suit ', () => {
    it('Validate footer components', () => {
        cy.visit('/')
        footerPO.validateNewsLatterLabel('Get our latest news and special sales')
        footerPO.validateInputEmailNewsletterSubscribe()
        footerPO.validateSubscribeButton('Subscribe')
        footerPO.validateNewsletterUnsubscribeInfo('You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.')
        footerPO.validateProductsColumn()
        ourCompanyPO.validateOurCompanyColumn()
        yourAccountPO.validateYourAccountColumn()
        footerPO.validateStoreInformationColumn('Store information', 'admin@marcelodebittencourt.com')

        cy.percySnapshot('Validating all visual components of footer')
    });
});