/// <reference types="cypress"/>

import signInPO from "../../support/PageObjects/signInPO";
import recoveryPasswordPO from "../../support/PageObjects/recoveryPasswordPO";

describe('Recovery password page tests suit', () => {
    it('Access the I forgot my password screen, and validate components', () => {
        signInPO.accessSignInPage()
        recoveryPasswordPO.clickOnForgotYourPasswordLink()
        recoveryPasswordPO.validateUrlRecoveryPasswordPage()
        recoveryPasswordPO.validateRecoveryPasswordTitle('Forgot your password?')
        recoveryPasswordPO.validateInformationCardForPasswordRecovery('Please enter the email address you used to register. You will receive a temporary link to reset your password.')
        recoveryPasswordPO.validateEmailFillField()

        cy.percySnapshot()
    });

    it('Requesting link to reset password', () => {
        recoveryPasswordPO.accessRecoveryPasswordPage()
        recoveryPasswordPO.validateUrlRecoveryPasswordPage()
        cy.fixture('userData.json').then((userData) => {
            recoveryPasswordPO.typeEmailToRecoveryPassword(userData.correctData.email)
        })
        recoveryPasswordPO.clickOnSendResetLinkButton()
        cy.fixture('userData.json').then((userData) => {
            recoveryPasswordPO.validatePasswordRecoveryEmailSendingSuccessMessage('If this email address has been registered in our shop, you will receive a link to reset your password at ', userData.correctData.email)
        })

        cy.percySnapshot()
    });

    it('The reset Link was not sent because the email format is invalid', () => {
        recoveryPasswordPO.accessRecoveryPasswordPage()
        recoveryPasswordPO.validateUrlRecoveryPasswordPage()
        cy.fixture('userData.json').then((userData) => {
            recoveryPasswordPO.typeEmailToRecoveryPassword(userData.invalidEmail.email)
        })
        recoveryPasswordPO.clickOnSendResetLinkButton()
        recoveryPasswordPO.checkInvalidEmailMessage('Invalid email address')

        cy.percySnapshot()
    });
});