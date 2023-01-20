import {Given, Then, When} from '@badeball/cypress-cucumber-preprocessor'
import signPage from '../PageObjects/signPage'
import registerPage from '../PageObjects/registerPage'
import {faker} from '@faker-js/faker'


const randomUserData = {
    firstname: faker.name.firstName('male'),
    lastname: faker.name.lastName('male'),
    email: faker.internet.email(),
    password: faker.internet.password(10),
    birthdate: {
        month: faker.datatype.number({
            'min': 1,
            'max': 12
        }),
        day: faker.datatype.number({
            'min': 1,
            'max': 29
        }),
        year: faker.datatype.number({
            'min': 1950,
            'max': 2010
        })
    }

}


Given('I am a user wanting to register', () => {
    cy.visit('/')
})

//"when" step to access the login screen is implemented in login.cy.ts

When('I click on the create account button', () => {
    signPage.clickOnCreateAccountButton()
})

Then('I should be redirected to the register page', () => {
    registerPage.checkUrlRegisterPage()
})


/* --------------------------------------------------------------------- */

Given('I access the registration page', () => {
    registerPage.accessRegistrationPage()
})

When('I see the registration form', () => {
    registerPage.checkForm()
})

When('I enter a firstname', () => {
    registerPage.typeFirstName(randomUserData.firstname)
})

When('I enter a lastname', () => {
    registerPage.typeLastName(randomUserData.lastname)
})

When('I enter a valid email', () => {
    registerPage.typeEmail(randomUserData.email)
})

When('I enter a valid password', () => {
    registerPage.typePassword(randomUserData.password)
})

When('I enter a valid birthdate', () => {
    registerPage.typeBirthDate(randomUserData.birthdate.month, randomUserData.birthdate.day, randomUserData.birthdate.year)
})

When('I check the offers checkbox', () => {
    registerPage.reciveOffersCheckbox()
})

When('I check the newsletter checkbox', () => {
    registerPage.newsletterCheckbox()
})

When('I check the terms policy checkbox', () => {
    registerPage.termsPolicyCheckbox()
})

Then('I click on the register button', () => {
    registerPage.clickOnRegisterButton()
})

Then('I should be redirected to the home page', () => {
    cy.url().should('contain', Cypress.config().baseUrl)
})

/* --------------------------------------------------------------------------- */