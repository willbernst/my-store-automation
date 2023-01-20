import registerElements from "../Elements/registerElements";

class registerPage {
    checkUrlRegisterPage(){
        cy.url().should('contain', registerElements.registerPageUrl())
    }

    accessRegistrationPage(){
        cy.visit(Cypress.config().baseUrl + registerElements.registerPageUrl())
    }

    checkForm(){
        cy.get(registerElements.registrationForm()).should('be.visible')
    }

    selectSocialTitle(){
        cy.get(registerElements.socialTitleSelect()).find('.custom-radio').click()
    }

    typeFirstName(firstName) {
        cy.get(registerElements.firstNameField()).type(firstName)
    }

    typeLastName(lastName){
        cy.get(registerElements.lastNameField()).type(lastName)
    }

    typeEmail(email){
        cy.get(registerElements.emailField()).type(email)
    }

    typePassword(password){
        cy.get(registerElements.passwordField()).type(password)
    }

    typeBirthDate(month, day, year){
        cy.get(registerElements.birthDateField()).type(`${month}/${day}/${year}`)
    }

    reciveOffersCheckbox(){
        cy.get(registerElements.reciveOffersCheckbox()).find('input[type="checkbox"]').check()
    }

    newsletterCheckbox(){
        cy.get(registerElements.newsletterCheckbox()).find('input[type="checkbox"]').check()
    }

    termsPolicyCheckbox(){
        cy.get(registerElements.termsAndConditionsPolicy()).find('input[type="checkbox"]').check()
    }

    clickOnRegisterButton(){
        cy.get(registerElements.registerButton()).click('center', {force: true})
    }
}

export default new registerPage()