/// <reference types="cypress" />

import footerPO from "../../../support/PageObjects/footerPO"
import footerElements from "../../../support/Elements/footerElements"
import ourCompanyContentText from "../../../fixtures/our-company-contentText.json"
import legalNoticeContentText from "../../../fixtures/legal-notice-contentText.json"


describe('Test suite in the our company column at the footer', () => {
    it.only('Validate access and components to the Delivery screen through footer', () => {
        cy.visit('/')
        footerPO.clickOnTheDesiredLinkInsideTheFooter(footerElements.ourCompanyColumn(), 'Delivery', '/1-delivery', 'h1', 'Delivery')
        footerPO.checkTitleAndSubtitleInsideContentCard('Shipments and returns', 'Your pack shipment', ourCompanyContentText.firstParagraph, ourCompanyContentText.secondParagraph)
    });

    it.only('Validate access and components to the Legal Notice screen through footer', () => {
        cy.visit('/') 
        footerPO.clickOnTheDesiredLinkInsideTheFooter(footerElements.ourCompanyColumn(), 'Legal Notice', '/2-legal-notice', 'h1', 'Legal Notice')
        footerPO.checkTitleAndSubtitleInsideContentCard('Legal', 'Credits', legalNoticeContentText.firstParagraph, legalNoticeContentText.secondParagraph)
        footerPO.checkRedirectLinksWithinLegalNoticeText()
    });

    it('Validate access and components to the Terms and Conditions of use screen through footer', () => {
        cy.visit('/') 
        footerPO.clickOnTheDesiredLinkInsideTheFooter(footerElements.ourCompanyColumn(), 'Terms and conditions of use', '/3-terms-and-conditions-of-use', 'h1', 'Terms and conditions of use')
        footerPO.checkTitleAndSubtitleInsideContentCard('Terms and conditions of use', 'Credits', '', '')
    });
});