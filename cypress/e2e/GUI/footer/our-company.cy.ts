/// <reference types="cypress" />

import footerPO from "../../../support/PageObjects/Footer/footerPO"
import footerElements from "../../../support/Elements/Footer/footerElements"
import ourCompanyContentText from "../../../fixtures/our-company-contentText.json"
import legalNoticeContentText from "../../../fixtures/legal-notice-contentText.json"
import termsAndConditionsOfUseContentText from '../../../fixtures/terms-and-conditions-os-use-contentText.json'
import ourCompanyPO from "../../../support/PageObjects/Footer/our-companyPO"
import productsPO from '../../../support/PageObjects/Footer/productsPO'
import ourCompanyElements from "../../../support/Elements/Footer/ourCompanyElements"


describe('Test suite in the our company column at the footer', () => {
    it('Validate access and components to the Delivery screen through footer', () => {
        cy.visit('/')
        footerPO.clickOnTheDesiredLinkInsideTheFooter(ourCompanyElements.ourCompanyColumn(), 'Delivery', '/1-delivery', 'h1', 'Delivery')
        ourCompanyPO.validateTheDeliveryScreen('h2', 'Shipments and returns', 'Your pack shipment', ourCompanyContentText.firstParagraph, ourCompanyContentText.secondParagraph)
    });

    it('Validate access and components to the Legal Notice screen through footer', () => {
        cy.visit('/') 
        footerPO.clickOnTheDesiredLinkInsideTheFooter(ourCompanyElements.ourCompanyColumn(), 'Legal Notice', '/2-legal-notice', 'h1', 'Legal Notice')
        ourCompanyPO.validateTheLegalNoticeScreen('h2', 'Legal', 'Credits', legalNoticeContentText.firstParagraph, legalNoticeContentText.secondParagraph)
        productsPO.validateRedirectLinksWithinLegalNoticeText()
    });

    it('Validate access and components to the Terms and Conditions of use screen through footer', () => {
        cy.visit('/') 
        footerPO.clickOnTheDesiredLinkInsideTheFooter(ourCompanyElements.ourCompanyColumn(), 'Terms and conditions of use', '/3-terms-and-conditions-of-use', 'h1', 'Terms and conditions of use')
        ourCompanyPO.validateTermsAndConditionsScreen('h1','Terms and conditions of use', '', 'Rule 1', termsAndConditionsOfUseContentText.firstParagraph, 'Rule 2', termsAndConditionsOfUseContentText.secondParagraph, 'Rule 3', termsAndConditionsOfUseContentText.thirdParagraph)
    });

    // it('Validate access and components to the About Us screen through fooer', () => {
    //     cy.visit('/')
    //     footerPO.clickOnTheDesiredLinkInsideTheFooter(footerElements.ourCompanyColumn(), 'About us', '/4-about-us', 'h1', 'About us')
    //     footerPO.validateAllTextInsideContentCardInAboutUsPage('h1', 'About us', 'Our company', 'Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididun.')
    // });

    it('Validate access and components to the Secure payment screen through footer', () => {
        cy.visit('/')
        footerPO.clickOnTheDesiredLinkInsideTheFooter(ourCompanyElements.ourCompanyColumn(), 'Secure payment', '/5-secure-payment', 'h1', 'Secure payment')
        ourCompanyPO.validateSecurePaymentScreen('h2', 'Secure payment', 'Our secure payment', 'With SSL', 'Using Visa/Mastercard/Paypal', 'About this service')
    });

    it('Validate access to the Contact Us screen through footer', () => {
        cy.visit('/')
        footerPO.clickOnTheDesiredLinkInsideTheFooter(ourCompanyElements.ourCompanyColumn(), 'Contact us', '/contact-us', 'h3', 'Contact us')
        cy.log('Functionality of the contact us screen is already being validated in a specific test')
    });

    describe('Test suite in the Sitemap link at the footer', () => {
        it('Validate access and components to the Sitemap screen through footer', () => {
            cy.visit('/')
            footerPO.clickOnTheDesiredLinkInsideTheFooter(ourCompanyElements.ourCompanyColumn(), 'Sitemap', '/sitemap', 'span', 'Sitemap')
            ourCompanyPO.validateSitemapScreen('Our Offers', 'Categories', 'Your account', 'Pages')
        });

        describe('Accessing the links on the Our Offers screen', () => {
            it('Accessing and validating the new products screen', () => {
                cy.visit('/sitemap')
                ourCompanyPO.accessAnyLinkInOurOfffersColumn(0, 'New products', '/new-products')
                productsPO.validateScreenIfThereAreNoProductsToBeShown('Sorry for the inconvenience.', 'Search again what you are looking for', 'Search our catalog')
            });

            it.only('Accessing and validating the Brands screen', () => {
                 cy.visit('/sitemap')
                 ourCompanyPO.accessAnyLinkInOurOfffersColumn(1, 'Brands', '/brands')
                 ourCompanyPO.validateBrandsScreen('Home', 'Brands')
            });
        });
    });
});