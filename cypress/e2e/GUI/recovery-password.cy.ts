/// <reference types="cypress"/>

import signInPO from "../../support/PageObjects/signInPO";
import recoveryPasswordPO from "../../support/PageObjects/recoveryPasswordPO";

describe('Recovery password page tests suit', () => {
    it('Access the I forgot my password screen, and validate components', () => {
        signInPO.accessSignInPage()
        recoveryPasswordPO.clickOnForgotYourPasswordLink()
        recoveryPasswordPO.checkUrlRecoveryPasswordPage()
        recoveryPasswordPO.checkRecoveryPasswordTitle()
        recoveryPasswordPO.checkInformationCardForPasswordRecovery()
        recoveryPasswordPO.checkEmailFillField()
    });

    it('Requesting link to reset password', () => {
        recoveryPasswordPO.accessRecoveryPasswordPage()
        recoveryPasswordPO.checkUrlRecoveryPasswordPage()
        cy.fixture('userData.json').then((userData) => {
            recoveryPasswordPO.typeEmailToRecoveryPassword(userData.correctData.email)
        })
        recoveryPasswordPO.clickOnSendResetLinkButton()
        cy.fixture('userData.json').then((userData) => {
            recoveryPasswordPO.checkPasswordRecoveryEmailSendingSuccessMessage(userData.correctData.email)
        })
    });

    it('The reset Link was not sent because the email format is invalid', () => {
        recoveryPasswordPO.accessRecoveryPasswordPage()
        recoveryPasswordPO.checkUrlRecoveryPasswordPage()
        cy.fixture('userData.json').then((userData) => {
            recoveryPasswordPO.typeEmailToRecoveryPassword(userData.invalidEmail.email)
        })
        recoveryPasswordPO.clickOnSendResetLinkButton()
        recoveryPasswordPO.checkInvalidEmailMessage()
    });
});