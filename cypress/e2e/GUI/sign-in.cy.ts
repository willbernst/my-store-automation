/// <reference types="cypress"/>

import signInPO from "../../support/PageObjects/signInPO";

describe('Sign In page test suit', () => {
    it.only('Access sign in page and validate components', () => {
        signInPO.accessSignInPage()
        signInPO.checkSignInPageContent()
        signInPO.checkSignInPageTitle()
        signInPO.checkLabelAndInputEmail()
        signInPO.checkLabelAndInputPassword()
        signInPO.checkForgotYourPasswordLink()
        signInPO.checkCreateAccountLink()
        signInPO.checkSignInButton()
    });
    it('Login Successfully', () => {
        cy.visit('/')
        signInPO.clickOnSignInButton()
        cy.fixture('userData.json').then((userData) => {
            signInPO.typeEmail(userData.correctData.email)
            signInPO.typePassword(userData.correctData.password)
            signInPO.submit()
        })
        cy.url().should('contain', '/my-account')
        signInPO.confirmLogin()
    });

    it('Unsuccessful Login', () => {
        cy.visit('/')
        signInPO.clickOnSignInButton()
        cy.fixture('userData.json').then((userData) => {
            signInPO.typeEmail(userData.wrongData.email)
            signInPO.typePassword(userData.wrongData.password)
            signInPO.submit()
        })
        signInPO.alert('Authentication failed')
    });
});