/// <reference types="cypress"/>

import registerPO from "../../support/PageObjects/registerPO";
import {faker} from '@faker-js/faker'

const randomUserData = {
    firstname: faker.name.firstName('male'),
    lastname: faker.name.lastName('male'),
    email: faker.internet.email(),
    invalidEmail: faker.random.word() + '@' + faker.random.word(),
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
    },
    wrongBirthDate: {
        month: faker.datatype.number({
            'min': 1,
            'max': 12
        }),
        day: faker.datatype.number({
            'min': 1,
            'max': 29
        }),
        year: faker.datatype.number({
            'min': 19510,
            'max': 20102
        })
    }

}

describe('Register page test suit', () => {
    it('Access registration page and validate components', () => {
        
    });

    it('Registration done successfully', () => {
        registerPO.accessRegistrationPage()
        registerPO.checkForm()
        registerPO.typeFirstName(randomUserData.firstname)
        registerPO.typeLastName(randomUserData.lastname)
        registerPO.typeEmail(randomUserData.email)
        registerPO.typePassword(randomUserData.password)
        registerPO.typeBirthDate(randomUserData.birthdate.month, randomUserData.birthdate.day, randomUserData.birthdate.year)
        registerPO.reciveOffersCheckbox()
        registerPO.newsletterCheckbox()
        registerPO.termsPolicyCheckbox()

        cy.percySnapshot()

        registerPO.clickOnRegisterButton()
        cy.url().should('contain', Cypress.config().baseUrl)

        cy.percySnapshot()
    });

    it('Registration not made because the date of birth was filled in wrong', () => {
        registerPO.accessRegistrationPage()
        registerPO.typeFirstName(randomUserData.firstname)
        registerPO.typeLastName(randomUserData.lastname)
        registerPO.typeEmail(randomUserData.email)
        registerPO.typePassword(randomUserData.password)
        registerPO.typeBirthDate(randomUserData.wrongBirthDate.month, randomUserData.wrongBirthDate.day, randomUserData.wrongBirthDate.year)
        registerPO.termsPolicyCheckbox()

        cy.percySnapshot()

        registerPO.clickOnRegisterButton()
        registerPO.catchWrongBirthDateAlert()

        cy.percySnapshot()
    });

    it('Unsuccessful registration because the email was nmot entered correctly, has invalid format', () => {
        registerPO.accessRegistrationPage()
        registerPO.typeFirstName(randomUserData.firstname)
        registerPO.typeLastName(randomUserData.lastname)
        registerPO.typeEmail(randomUserData.invalidEmail)
        registerPO.typePassword(randomUserData.password)
        registerPO.termsPolicyCheckbox()

        cy.percySnapshot()
        
        registerPO.clickOnRegisterButton()
        registerPO.catchInvalidFormatEmailAlert()

        cy.percySnapshot()
    });
});