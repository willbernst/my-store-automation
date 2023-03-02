/// <reference types="cypress"/>

import contactUsPO from "../../support/PageObjects/contactUsPO";
import {faker} from '@faker-js/faker'

const randomEmailAndMessage = {
    email: faker.internet.email(),
    message: faker.random.words(15)
}

describe('Contact us page test suite', () => {
    it('Access contact us page and validate components', () => {
        cy.visit('/')
        contactUsPO.clickOnContactUsHeaderLink()
        contactUsPO.validateUrlContactUsPage()
        cy.percySnapshot()
        contactUsPO.validateAddressOnTheStoreInformationBlock('Loja de Teste', 'United States')
        contactUsPO.validateEmailOnTheStoreInformationBlock('Email us')
        contactUsPO.validateContactUsForm()
        contactUsPO.validateContactUsTitlePage('Contact us')
        contactUsPO.validateDefaultValueOfSubjectField()
        contactUsPO.validateDefaultValueOfEmailField()
        contactUsPO.validateDefaultValueAttachment()
        contactUsPO.validateDefaultValueMessageInput()
        cy.percySnapshot('Access contact us page and validate components')

    });
    it('Message sent successfully without being a logged in user', () => {
        cy.visit('/')
        contactUsPO.clickOnContactUsHeaderLink()
        contactUsPO.validateUrlContactUsPage()
        contactUsPO.chooseASubjectForTheContact('Webmaster')
        contactUsPO.typeContactEmail(randomEmailAndMessage.email)
        contactUsPO.insertAccessoryFile('cypress/fixtures/docContactUsFixture.pdf')
        contactUsPO.validateAttachmentTitle('docContactUsFixture')
        contactUsPO.typeAMessage(randomEmailAndMessage.message)
        contactUsPO.clickOnSubmitButton()
        contactUsPO.validateSuccessMessage('Your message has been successfully sent to our team')
        cy.percySnapshot('Message sent successfully without being a logged in user')
    });

    it('Message sent successfully being a logged in user', () => {
        cy.loginViaGUI()
        contactUsPO.clickOnContactUsHeaderLink()
        contactUsPO.validateUrlContactUsPage()

        cy.percySnapshot()

        contactUsPO.validateContactUsForm()
        contactUsPO.validateContactUsTitlePage('Contact us')
        contactUsPO.validatePreviouslyFilledEmailWhenUserLoggedIn()
        contactUsPO.insertAccessoryFile('cypress/fixtures/docContactUsFixture.pdf')
        contactUsPO.validateAttachmentTitle('docContactUsFixture')
        contactUsPO.typeAMessage(randomEmailAndMessage.message)
        contactUsPO.clickOnSubmitButton()
        contactUsPO.validateSuccessMessage('Your message has been successfully sent to our team')

        cy.percySnapshot('Message sent successfully being a logged in user')
    });

    it('Message not sent due to invalid email', () => {
        cy.visit('/')
        contactUsPO.clickOnContactUsHeaderLink()
        contactUsPO.validateUrlContactUsPage()
        
        cy.percySnapshot()

        contactUsPO.doNotFillInTheEmailInput()
        contactUsPO.clickOnSubmitButton()
        contactUsPO.validateErrorMessageDeliveredByFillingOutTheForm('Invalid email address.')

        cy.percySnapshot('Message not sent due to invalid email')  
    });

    it('Message not sent due to blank message field', () => {
        cy.visit('/')
        contactUsPO.clickOnContactUsHeaderLink()
        contactUsPO.validateUrlContactUsPage()

        cy.percySnapshot()

        contactUsPO.typeContactEmail(randomEmailAndMessage.email)
        contactUsPO.doNotFillInTheMessageInput()
        contactUsPO.clickOnSubmitButton()
        contactUsPO.validateErrorMessageDeliveredByFillingOutTheForm('The message cannot be blank.')

        cy.percySnapshot('Message not sent due to blank message field')
    });
});