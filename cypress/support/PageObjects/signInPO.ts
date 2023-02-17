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

    checkSignInPageTitle(singInPageTitle:string){
        cy.get(signElements.signInPageTitle()).should('be.visible').and('contain', singInPageTitle)
    }

    checkLabelAndInputEmail(){
        cy.get(signElements.labelEmail()).should('contain', 'Email').and('be.visible')
        cy.get(signElements.inputEmail()).should('be.empty')
    }

    checkLabelAndInputPassword(passwordLabel:string, buttonLabel:string){
        cy.get(signElements.labelPassword()).should('be.visible').and('contain', passwordLabel)
        cy.get(signElements.inputPassword()).should('be.empty')
        cy.get(signElements.showPasswordButton()).should('be.visible').and('contain.text', buttonLabel)
    }

    checkForgotYourPasswordLink(forgotYourPasswordLabel:string){
        cy.get(signElements.forgotPasswordLink()).should('be.visible').and('contain.text', forgotYourPasswordLabel)
    }

    checkSignInButton(signInLabelButton:string){
        cy.get(signElements.submitButton()).should('be.visible').and('contain.text', signInLabelButton)
    }

    checkCreateAccountLink(createAccountLabel){
        cy.get(signElements.createAccountLink()).should('be.visible').and('contain.text', createAccountLabel)
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

    confirmLogin(userName:string){
        cy.get(signElements.textConfirm()).should('contain.text', userName)
    }

    alert(alertMessage) {
        cy.contains(signElements.altertText(), alertMessage).should('be.visible')
    }

    clickOnCreateAccountButton() {
        cy.get(signElements.createAccountLink()).click()
    }
}

export default new SignInPagePO()