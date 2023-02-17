import recoveryPasswordElements from "../Elements/recoveryPasswordElements";

class recoveryPasswordPO {
    checkUrlRecoveryPasswordPage(){
        cy.url().should('contain', recoveryPasswordElements.recoveryPasswordUrl())
    }
    
    accessRecoveryPasswordPage(){
        cy.visit(Cypress.config().baseUrl + recoveryPasswordElements.recoveryPasswordUrl())
    }

    clickOnForgotYourPasswordLink(){
        cy.get(recoveryPasswordElements.forgotYourPasswordLink()).click()
    }
    
    checkRecoveryPasswordTitle(title:string){
        cy.get(recoveryPasswordElements.recoveryPasswordScreenTitle()).should('contain', title)
    }

    checkInformationCardForPasswordRecovery(recoveryPasswordText: string){
        cy.get(recoveryPasswordElements.recoveryPasswordCard()).should('be.visible')
        cy.get(recoveryPasswordElements.recoveryPasswordCard()).children().eq(1).should('contain', recoveryPasswordText)
    }

    checkEmailFillField(){
        cy.get(recoveryPasswordElements.emailFieldForPasswordRecovery()).should('be.visible').and('be.empty')
    }

    typeEmailToRecoveryPassword(email){
        cy.get(recoveryPasswordElements.emailFieldForPasswordRecovery()).type(email)
        cy.get(recoveryPasswordElements.emailFieldForPasswordRecovery()).should('have.value', email)
    }

    clickOnSendResetLinkButton(){
        cy.get(recoveryPasswordElements.sendResetLinkButton()).click()
    }

    checkPasswordRecoveryEmailSendingSuccessMessage(successMessage:string, email){
        cy.get(recoveryPasswordElements.passwordRecoveryLinkSendingSuccessAlert()).should('exist').and('be.visible')
        cy.get(recoveryPasswordElements.recoveryPageAlert()).should('contain', successMessage + email)
    }

    clickOnBackToLoginPageLink(){
        cy.get(recoveryPasswordElements.backToLoginPageLink()).click()
    }

    checkInvalidEmailMessage(invalidEmailMessage:string){
        cy.get(recoveryPasswordElements.recoveryPageAlert()).should('contain', invalidEmailMessage)
    }
}

export default new recoveryPasswordPO()