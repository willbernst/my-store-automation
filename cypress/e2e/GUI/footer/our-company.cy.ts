/// <reference types="cypress" />

import footerPO from "../../../support/PageObjects/footerPO"
import footerElements from "../../../support/Elements/footerElements"
import ourCompanyContentText from "../../../fixtures/our-company-contentText"
import legalNoticeContentText from "../../../fixtures/legal-notice-contentText"


describe('Test suite in the our company column at the footer', () => {
    it('Validate access and components to the Delivery screen through footer', () => {
        cy.visit('/')
        footerPO.clickOnTheDesiredLinkInsideTheFooter(footerElements.ourCompanyColumn(), 'Delivery', '/1-delivery', 'Delivery')
        footerPO.checkTitleAndSubtitleInsideContentCard('Shipments and returns', 'Your pack shipment')
        footerPO.checkTextInsideContentCard(ourCompanyContentText.firstParagraph, ourCompanyContentText.secondParagraph)
    });

    it.only('Validate access and components to the Legal Notice screen through footer', () => {
        cy.visit('/') 
        footerPO.clickOnTheDesiredLinkInsideTheFooter(footerElements.ourCompanyColumn(), 'Legal Notice', '/2-legal-notice', 'Legal Notice')
        footerPO.checkTitleAndSubtitleInsideContentCard('Legal', 'Credits')
        footerPO.checkTextInsideContentCard(legalNoticeContentText.firstParagraph, legalNoticeContentText.secondParagraph)
        footerPO.checkRedirectLinksWithinLegalNoticeText()
    });
});