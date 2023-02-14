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
    
    checkRecoveryPasswordTitle(){
        cy.get(recoveryPasswordElements.recoveryPasswordScreenTitle()).should('contain', 'Forgot your password?')
    }

    checkInformationCardForPasswordRecovery(){
        cy.get(recoveryPasswordElements.recoveryPasswordCard()).should('be.visible')
        cy.get(recoveryPasswordElements.recoveryPasswordCard()).children().eq(1).should('contain', recoveryPasswordElements.recoveryPasswordCardText())
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

    checkPasswordRecoveryEmailSendingSuccessMessage(email){
        cy.get(recoveryPasswordElements.passwordRecoveryLinkSendingSuccessAlert()).should('exist').and('be.visible')
        cy.get(recoveryPasswordElements.recoveryPageAlert()).should('contain', recoveryPasswordElements.successMessage() + email)
    }

    clickOnBackToLoginPageLink(){
        cy.get(recoveryPasswordElements.backToLoginPageLink()).click()
    }

    checkInvalidEmailMessage(){
        cy.get(recoveryPasswordElements.recoveryPageAlert()).should('contain', recoveryPasswordElements.invalidEmailMessage())
    }
}

export default new recoveryPasswordPO()