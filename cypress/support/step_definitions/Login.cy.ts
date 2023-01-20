import {Given, Then, When} from '@badeball/cypress-cucumber-preprocessor'
import signPage from '../PageObjects/signPage'
import correctData from '../../fixtures/correctUserDataForLogin.json'
import wrongData from '../../fixtures/incorrectUserDataForLogin.json'


Given('I access the main page of the my store website', () => {
    cy.visit('/')
})

When('I access the login page', () => {
    cy.get('#_desktop_user_info').click()
    cy.url().should('contain', '/login?back=my-account')
})

When('I enter a valid email and password and click on Sign In button', () => {
    signPage.typeEmail(correctData.email)
    signPage.typePassword(correctData.password)
    signPage.submit()
})

Then('I must check the name "William Dewes" as login user validation', () => {
    cy.url().should('contain', '/my-account')
    signPage.confirmLogin()
})

// ----------------------------- //

When('I enter a invalid email and passowrd and click on Sign In button', () => {
    signPage.typeEmail(wrongData.email)
    signPage.typePassword(wrongData.password)
    signPage.submit()
})

Then('I must be warned about my wrong credentials', () => {
    signPage.alert()
})