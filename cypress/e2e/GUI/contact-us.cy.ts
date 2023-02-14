/// <reference types="cypress"/>

import contactUsPO from "../../support/PageObjects/contactUsPO";
import {faker} from '@faker-js/faker'

const randomEmailAndMessage = {
    email: faker.internet.email(),
    message: faker.random.words(15)
}

describe('Contact us page test suite', () => {
    it('Access contact us page and validate components', () => {
        
    });
    it('Message sent successfully without being a logged in user', () => {
        cy.visit('/')
        contactUsPO.clickOnContactUsHeaderLink()
        contactUsPO.clickOnContactUsHeaderLink()
        contactUsPO.checkUrlContactUsPage()
        contactUsPO.checkUrlContactUsPage()
        
        cy.percySnapshot()

        contactUsPO.checkAddressOnTheStoreInformationBlock()
        contactUsPO.checkEmailOnTheStoreInformationBlock()
        contactUsPO.checkContactUsForm()
        contactUsPO.checkContactUsTitlePage()
        contactUsPO.chooseASubjectForTheContact()
        contactUsPO.typeContactEmail(randomEmailAndMessage.email)
        contactUsPO.insertAccessoryFile()
        contactUsPO.checkAttachmentTitle('docContactUsFixture')
        contactUsPO.typeAMessage(randomEmailAndMessage.message)
        contactUsPO.clickOnSubmitButton()
        contactUsPO.checkSuccessMessage('Your message has been successfully sent to our team')
        cy.percySnapshot()
    });

    it('Message sent successfully being a logged in user', () => {
        cy.loginViaGUI()
        contactUsPO.clickOnContactUsHeaderLink()
        contactUsPO.checkUrlContactUsPage()
        contactUsPO.checkUrlContactUsPage()

        cy.percySnapshot()

        contactUsPO.checkContactUsForm()
        contactUsPO.checkContactUsTitlePage()
        contactUsPO.validatePreviouslyFilledEmailWhenUserLoggedIn()
        contactUsPO.insertAccessoryFile()
        contactUsPO.checkAttachmentTitle('docContactUsFixture')
        contactUsPO.typeAMessage(randomEmailAndMessage.message)
        contactUsPO.clickOnSubmitButton()
        contactUsPO.checkSuccessMessage('Your message has been successfully sent to our team')

        cy.percySnapshot()
    });

    it('Message not sent due to invalid email', () => {
        cy.visit('/')
        contactUsPO.clickOnContactUsHeaderLink()
        contactUsPO.clickOnContactUsHeaderLink()
        contactUsPO.checkUrlContactUsPage()
        contactUsPO.checkUrlContactUsPage()
        
        cy.percySnapshot()

        contactUsPO.doNotFillInTheEmailInput()
        contactUsPO.clickOnSubmitButton()
        contactUsPO.checkErrorMessageDeliveredByFillingOutTheForm('Invalid email address.')

        cy.percySnapshot()  
    });

    it('Message not sent due to blank message field', () => {
        cy.visit('/')
        contactUsPO.clickOnContactUsHeaderLink()
        contactUsPO.clickOnContactUsHeaderLink()
        contactUsPO.checkUrlContactUsPage()
        contactUsPO.checkUrlContactUsPage()

        cy.percySnapshot()

        contactUsPO.typeContactEmail(randomEmailAndMessage.email)
        contactUsPO.doNotFillInTheMessageInput()
        contactUsPO.clickOnSubmitButton()
        contactUsPO.checkErrorMessageDeliveredByFillingOutTheForm('The message cannot be blank.')

        cy.percySnapshot()
    });
});