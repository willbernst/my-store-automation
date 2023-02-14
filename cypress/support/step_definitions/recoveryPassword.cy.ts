import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import recoveryPasswordPO from "../PageObjects/recoveryPasswordPO";
import signInPO from "../PageObjects/signInPO";

Given('That I want to login to the website, I access the login page', () => {
    signInPO.accessSignInPage()
})

When('I no longer remember my password, I click on Forgot your password link', () => {
    recoveryPasswordPO.clickOnForgotYourPasswordLink()
})

When('I access the password recovery screen', () => {
    recoveryPasswordPO.checkUrlRecoveryPasswordPage()
    recoveryPasswordPO.checkRecoveryPasswordTitle()
})

When('I see the card with password recovery information', () => {
    recoveryPasswordPO.checkInformationCardForPasswordRecovery()
})

Then('I see and the field to fill in the email to receive the recovery link', () => {
    recoveryPasswordPO.checkEmailFillField()
})

Given('I access the recovery page', () => {
    recoveryPasswordPO.accessRecoveryPasswordPage()
    recoveryPasswordPO.checkUrlRecoveryPasswordPage()
})

When('I type my account email', () => {
    cy.fixture('userData.json').then((userData) => {
        recoveryPasswordPO.typeEmailToRecoveryPassword(userData.correctData.email)
    })
})

When('I click on the SEND RESET LINK button', () => {
    recoveryPasswordPO.clickOnSendResetLinkButton()
})

Then('I should see the password recovery link success message if my email is in the database', () => {
    cy.fixture('userData.json').then((userData) => {
        recoveryPasswordPO.checkPasswordRecoveryEmailSendingSuccessMessage(userData.correctData.email)
    })
})

When('I type an email with the wrong format', () => {
    cy.fixture('userData.json').then((userData) => {
        recoveryPasswordPO.typeEmailToRecoveryPassword(userData.invalidEmail.email)
    })
})

Then('I should see the message saying that the email format is wrong', () => {
    recoveryPasswordPO.checkInvalidEmailMessage()
})