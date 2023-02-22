/// <reference types="cypress" />

import footerPO from "../../../support/PageObjects/footerPO"
import footerElements from "../../../support/Elements/footerElements"
import ourCompanyContentText from "../../../fixtures/our-company-contentText.json"
import legalNoticeContentText from "../../../fixtures/legal-notice-contentText.json"


describe('Test suite in the our company column at the footer', () => {
    it('Validate access and components to the Delivery screen through footer', () => {
        cy.visit('/')
        footerPO.clickOnTheDesiredLinkInsideTheFooter(footerElements.ourCompanyColumn(), 'Delivery', '/1-delivery', 'h1', 'Delivery')
        footerPO.checkTitleAndSubtitleInsideContentCard('Shipments and returns', 'Your pack shipment', ourCompanyContentText.firstParagraph, ourCompanyContentText.secondParagraph)
        footerPO.checkTextInsideContentCard(ourCompanyContentText.firstParagraph, ourCompanyContentText.secondParagraph)
    });

    it('Validate access and components to the Legal Notice screen through footer', () => {
        cy.visit('/') 
        footerPO.clickOnTheDesiredLinkInsideTheFooter(footerElements.ourCompanyColumn(), 'Legal', '/2-legal-notice', 'h1', 'Legal Notice')
        footerPO.checkTitleAndSubtitleInsideContentCard('Legal', 'Credits', legalNoticeContentText.firstParagraph, legalNoticeContentText.secondParagraph)
        footerPO.checkTextInsideContentCard(legalNoticeContentText.firstParagraph, legalNoticeContentText.secondParagraph)
        footerPO.checkRedirectLinksWithinLegalNoticeText()
    });
});