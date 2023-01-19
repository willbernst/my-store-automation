import {Given, Then, When} from '@badeball/cypress-cucumber-preprocessor'
import signPage from '../PageObjects/signPage'
import user from '../../fixtures/correctUserDataForLogin.json'


Given('I access the main page of the my store website', () => {
    cy.visit('/')
})

When('I access the login page', () => {
    cy.get('#_desktop_user_info').click()
    cy.url().should('contain', '/demoprestashop/login?back=my-account')
})

When('I enter a valid email and password and click on Sign In button', () => {
    signPage.typeEmail(user.email)
    signPage.typePassword(user.password)
    signPage.submit()
})

Then('I must check the name "William Dewes" as login user validation', () => {
    cy.url().should('contain', '/demoprestashop/my-account')
    signPage.confirmLogin()
})