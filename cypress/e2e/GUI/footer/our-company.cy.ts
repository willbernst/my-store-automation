/// <reference types="cypress" />

import footerPO from "../../../support/PageObjects/Footer/footerPO"
import ourCompanyContentText from "../../../fixtures/ourCompanyContentText.json"
import legalNoticeContentText from "../../../fixtures/legalNoticeContentText.json"
import termsAndConditionsOfUseContentText from '../../../fixtures/termsAndConditionsOfUseContentText.json'
import ourCompanyPO from "../../../support/PageObjects/Footer/our-companyPO"
import productsPO from '../../../support/PageObjects/Footer/productsPO'
import ourCompanyElements from "../../../support/Elements/Footer/ourCompanyElements"


describe('Test suite in the our company column at the footer', () => {
    it('Validate access and components to the Delivery screen through footer', () => {
        cy.visit('/')
        footerPO.clickOnTheDesiredLinkInsideTheFooter(ourCompanyElements.ourCompanyColumn(), 'Delivery', '/1-delivery', 'h1', 'Delivery')
        ourCompanyPO.validateTheDeliveryScreen('h2', 'Shipments and returns', 'Your pack shipment', ourCompanyContentText.firstParagraph, ourCompanyContentText.secondParagraph)
        cy.percySnapshot('Validate access and components to the Delivery screen through footer')
    });

    it('Validate access and components to the Legal Notice screen through footer', () => {
        cy.visit('/') 
        footerPO.clickOnTheDesiredLinkInsideTheFooter(ourCompanyElements.ourCompanyColumn(), 'Legal Notice', '/2-legal-notice', 'h1', 'Legal Notice')
        ourCompanyPO.validateTheLegalNoticeScreen('h2', 'Legal', 'Credits', legalNoticeContentText.firstParagraph, legalNoticeContentText.secondParagraph)
        productsPO.validateRedirectLinksWithinLegalNoticeText()
        cy.percySnapshot('Validate access and components to the Legal Notice screen through footer')
    });

    it('Validate access and components to the Terms and Conditions of use screen through footer', () => {
        cy.visit('/') 
        footerPO.clickOnTheDesiredLinkInsideTheFooter(ourCompanyElements.ourCompanyColumn(), 'Terms and conditions of use', '/3-terms-and-conditions-of-use', 'h1', 'Terms and conditions of use')
        ourCompanyPO.validateTermsAndConditionsScreen('h1','Terms and conditions of use', '', 'Rule 1', termsAndConditionsOfUseContentText.firstParagraph, 'Rule 2', termsAndConditionsOfUseContentText.secondParagraph, 'Rule 3', termsAndConditionsOfUseContentText.thirdParagraph)
        cy.percySnapshot('Validate access and components to the Terms and Conditions of use screen through footer')
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
        cy.percySnapshot('Validate access and components to the Secure payment screen through footer')
    });

    it('Validate access to the Contact Us screen through footer', () => {
        cy.visit('/')
        footerPO.clickOnTheDesiredLinkInsideTheFooter(ourCompanyElements.ourCompanyColumn(), 'Contact us', '/contact-us', 'h3', 'Contact us')
        cy.log('Functionality of the contact us screen is already being validated in a specific test')
        cy.percySnapshot('Validate access to the Contact Us screen through footer')
    });

    describe('Test suite in the Sitemap link at the footer', () => {
        it('Validate access and components to the Sitemap screen through footer', () => {
            cy.visit('/')
            footerPO.clickOnTheDesiredLinkInsideTheFooter(ourCompanyElements.ourCompanyColumn(), 'Sitemap', '/sitemap', 'span', 'Sitemap')
            ourCompanyPO.validateSitemapScreen('Our Offers', 'Categories', 'Your account', 'Pages')
            cy.percySnapshot('Validate access and components to the Sitemap screen through footer')
        });

        describe('Accessing the links on the Our Offers screen', () => {
            it('Accessing and validating the new products screen', () => {
                cy.visit('/sitemap')
                ourCompanyPO.accessAnyLinkInOurOfffersColumn(0, 'New products', '/new-products')
                productsPO.validateScreenIfThereAreNoProductsToBeShown('Sorry for the inconvenience.', 'Search again what you are looking for', 'Search our catalog')
                cy.percySnapshot('Accessing and validating the new products screen')
            });

            describe('Accessing the brands links through the sitemap screen', () => {
                it('Accessing and validating the Brands screen', () => {
                    cy.visit('/sitemap')
                    ourCompanyPO.accessAnyLinkInOurOfffersColumn(1, 'Brands', '/brands')
                    ourCompanyPO.validateBrandsScreen('Home', 'Brands', 'Brands')
                    cy.percySnapshot('Accessing and validating the Brands screen')
                });

                it('Accessing the Graphic Corner screen through the brands screen', () => {
                    cy.visit('/sitemap')
                    ourCompanyPO.accessAnyLinkInOurOfffersColumn(1, 'Brands', '/brands')
                    ourCompanyPO.accessAnyMenuFromTheBrandsScreen('.' + ourCompanyElements.brandsInfosLink(), 1, '/2-graphic-corner')
                });

                it.only('Accessing the graphic corner canvas through the sitemap and validating the canvas components', () => {
                    cy.visit('/sitemap')
                    ourCompanyPO.accessAnyLinkInOurOfffersColumn(1, 'Graphic Corner', '/2-graphic-corner')
                    ourCompanyPO.validateTheGraphicCornerScreen()
                });
            });
        });
    });
});