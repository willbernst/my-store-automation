import signElements from "../Elements/signElements";

class SignInPage {
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

    alert() {
        cy.contains(signElements.altertText(), 'Authentication failed').should('be.visible')
    }
}

export default new SignInPage()