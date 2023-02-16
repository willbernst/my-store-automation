import signElements from "../Elements/signInElements";

class SignInPagePO {
    clickOnSignInButton(){
        cy.get(signElements.signInButtonPage()).click()
    }

    accessSignInPage(){
        cy.visit(signElements.singInUrl())
    }

    checkSignInPageContent(){
        cy.get(signElements.signInPageContent()).should('exist').and('be.visible')
    }

    checkSignInPageTitle(){
        cy.get(signElements.signInPageTitle()).should('be.visible').and('contain', 'Log in to your account')
    }

    checkLabelAndInputEmail(){
        cy.get(signElements.labelEmail()).should('contain', 'Email').and('be.visible')
        cy.get(signElements.inputEmail()).should('be.empty')
    }

    checkLabelAndInputPassword(){
        cy.get(signElements.labelPassword()).should('be.visible').and('contain', 'Password')
        cy.get(signElements.inputPassword()).should('be.empty')
        cy.get(signElements.showPasswordButton()).should('be.visible').and('contain.text', 'Show')
    }

    checkForgotYourPasswordLink(){
        cy.get(signElements.forgotPasswordLink()).should('be.visible').and('contain.text', 'Forgot your password?')
    }

    checkSignInButton(){
        cy.get(signElements.submitButton()).should('be.visible').and('contain.text', 'Sign in')
    }

    checkCreateAccountLink(){
        cy.get(signElements.createAccountLink()).should('be.visible').and('contain.text', 'No account? Create one here')
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
        cy.get(signElements.createAccountLink()).click()
    }
}

export default new SignInPagePO()