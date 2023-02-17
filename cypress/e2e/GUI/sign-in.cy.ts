/// <reference types="cypress"/>

import signInPO from "../../support/PageObjects/signInPO";

describe('Sign In page test suit', () => {
    it('Access sign in page and validate components', () => {
        signInPO.accessSignInPage()
        signInPO.checkSignInPageContent()
        signInPO.checkSignInPageTitle('Log in to your account')
        signInPO.checkLabelAndInputEmail()
        signInPO.checkLabelAndInputPassword('Password', 'Show')
        signInPO.checkForgotYourPasswordLink('Forgot your password?')
        signInPO.checkCreateAccountLink('No account? Create one here')
        signInPO.checkSignInButton('Sign in')
        
        cy.percySnapshot()
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
        signInPO.confirmLogin('William Dewes')

        cy.percySnapshot()
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

        cy.percySnapshot()
    });
});