import contactUsPO from "../PageObjects/contactUsPO";
import {Given, Then, When} from '@badeball/cypress-cucumber-preprocessor'
import {faker} from '@faker-js/faker'

const randomEmailAndMessage = {
    email: faker.internet.email(),
    message: faker.random.words(15)
}

const emailWithoutCharacterAt: String = 'email.teste.com.br';

Given('I am a user wanting to contact the site team', () => {
    cy.visit('/')
    cy.get('#contact-link > a')
        .should('be.visible')
})

When('I click on Contact Us buttton', () => {
    contactUsPO.clickOnContactUsHeaderLink()
    contactUsPO.checkUrlContactUsPage()
})

Then('I should be redirected to the contact us page', () => {
    contactUsPO.checkUrlContactUsPage()
    cy.percySnapshot()
})

Then('I see the site info block', () => {
    contactUsPO.checkAddressOnTheStoreInformationBlock()
    contactUsPO.checkEmailOnTheStoreInformationBlock()
})

Then('I see the contact form', () => {
    contactUsPO.checkContactUsForm()
    contactUsPO.checkContactUsTitlePage()
})

When('I set a subject', () => {
    contactUsPO.chooseASubjectForTheContact()
})

When('I correctly fill in the email', () => {
    contactUsPO.typeContactEmail(randomEmailAndMessage.email)
})

When('I upload the file to contact', () => {
    contactUsPO.insertAccessoryFile()
    contactUsPO.checkAttachmentTitle('docContactUsFixture')
})

When('I fill in the message field', () => {
    contactUsPO.typeAMessage(randomEmailAndMessage.message)
})

Then('I click on Send button', () => {
    contactUsPO.clickOnSubmitButton()
})

Then('I should receive a shipping confirmation message', () => {
    contactUsPO.checkSuccessMessage('Your message has been successfully sent to our team')
    cy.percySnapshot()
})

When('I do not fill in the email correctly', () => {
    contactUsPO.doNotFillInTheEmailInput()
})

Then('I should receive a message stating that I entered the email incorrectly', () => {
    contactUsPO.checkErrorMessageDeliveredByFillingOutTheForm('Invalid email address.')
    cy.percySnapshot()
})

When('I do not fill in the message field', () => {
    contactUsPO.doNotFillInTheMessageInput()
})

Then('I should recieve a message that the message field cannot be blank', () => {
    contactUsPO.checkErrorMessageDeliveredByFillingOutTheForm('The message cannot be blank.')
    cy.percySnapshot()
})

When('I fill in the email field without @', () => {
    contactUsPO.typeContactEmail(emailWithoutCharacterAt)
})

Then('I see the message informing the filling error', () => {
    cy.wait(3000)
    contactUsPO.checkAlertMessage()
    cy.get('input[name="from"]')
    cy.percySnapshot()
})

Given('I am a logged in user wanting to get in touch with the site team', () => {
    cy.loginViaGUI()
})

Then('I see my pre-field email', () => {
    contactUsPO.validatePreviouslyFilledEmailWhenUserLoggedIn()
})