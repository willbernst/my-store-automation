/// <reference types="cypress" />

import footerPO from "../../../support/PageObjects/footerPO"
import footerElements from "../../../support/Elements/footerElements"
import ourCompanyContentText from "../../../fixtures/our-company-contentText.json"
import legalNoticeContentText from "../../../fixtures/legal-notice-contentText.json"
import termsAndConditionsOfUseContentText from '../../../fixtures/terms-and-conditions-os-use-contentText.json'


describe('Test suite in the our company column at the footer', () => {
    it('Validate access and components to the Delivery screen through footer', () => {
        cy.visit('/')
        footerPO.clickOnTheDesiredLinkInsideTheFooter(footerElements.ourCompanyColumn(), 'Delivery', '/1-delivery', 'h1', 'Delivery')
        footerPO.checkAllTextInsideContentCard('h2', 'Shipments and returns', 'Your pack shipment', ourCompanyContentText.firstParagraph, ourCompanyContentText.secondParagraph)
    });

    it('Validate access and components to the Legal Notice screen through footer', () => {
        cy.visit('/') 
        footerPO.clickOnTheDesiredLinkInsideTheFooter(footerElements.ourCompanyColumn(), 'Legal Notice', '/2-legal-notice', 'h1', 'Legal Notice')
        footerPO.checkAllTextInsideContentCard('h2', 'Legal', 'Credits', legalNoticeContentText.firstParagraph, legalNoticeContentText.secondParagraph)
        footerPO.checkRedirectLinksWithinLegalNoticeText()
    });

    it('Validate access and components to the Terms and Conditions of use screen through footer', () => {
        cy.visit('/') 
        footerPO.clickOnTheDesiredLinkInsideTheFooter(footerElements.ourCompanyColumn(), 'Terms and conditions of use', '/3-terms-and-conditions-of-use', 'h1', 'Terms and conditions of use')
        footerPO.checkAllTextInsideContentCardWithManyElements('h1','Terms and conditions of use', '', 'Rule 1', termsAndConditionsOfUseContentText.firstParagraph, 'Rule 2', termsAndConditionsOfUseContentText.secondParagraph, 'Rule 3', termsAndConditionsOfUseContentText.thirdParagraph)
    });

    // it('Validate access and components to the About Us screen through fooer', () => {
    //     cy.visit('/')
    //     footerPO.clickOnTheDesiredLinkInsideTheFooter(footerElements.ourCompanyColumn(), 'About us', '/4-about-us', 'h1', 'About us')
    //     footerPO.validateAllTextInsideContentCardInAboutUsPage('h1', 'About us', 'Our company', 'Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididun.')
    // });

    it.only('Validate access and components to the Secure payment screen through footer', () => {
        cy.visit('/')
        footerPO.clickOnTheDesiredLinkInsideTheFooter(footerElements.ourCompanyColumn(), 'Secure payment', '/5-secure-payment', 'h1', 'Secure payment')
        footerPO.checkAllTextInsideContentCardWithManyElements('h2', 'Secure payment', '', 'Our secure payment', 'With SSL', 'Using Visa/Mastercard/Paypal', 'About this service')
    });
});