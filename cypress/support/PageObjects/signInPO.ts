import signElements from "../Elements/signInElements";

class SignInPagePO {
    accessSignInPage(){
        cy.visit(signElements.singInUrl())
    }
    typeEmail(email){
        cy.get(signElements.inputEmail()).first().type(email)
    }

    typePassword(password){
        cy.get(signElements.inputPassword()).type(password)
    }

    submit(){
        cy.get(signElements.submitButton()).click()
    }

    confirmLogin(){
        cy.get(signElements.textConfirm()).should('contain.text', 'William Dewes')
    }

    alert(alertMessage) {
        cy.contains(signElements.altertText(), alertMessage).should('be.visible')
    }

    clickOnCreateAccountButton() {
        cy.get(signElements.createAccountButton()).click()
    }
}

export default new SignInPagePO()