import contactUsElements from "../Elements/contactUsElements";

class contactUsPO {
        checkUrlContactUsPage() {
            cy.url().should('contain', contactUsElements.contactUsPageUrl())
        }

        clickOnContactUsHeaderLink() {
            cy.get(contactUsElements.contactUsHeaderLink()).click()
        }

        checkAddressOnTheStoreInformationBlock(){
            cy.get(contactUsElements.storeInformations())
                .find(contactUsElements.storeInfosBlock())
                .find(contactUsElements.storeInfosData())
                .eq(0)
                .should('contain', 'Loja de Teste')
                .and('contain', 'United States')
        }

        checkEmailOnTheStoreInformationBlock() {
            cy.get(contactUsElements.storeInformations())
                .find(contactUsElements.storeInfosBlock())
                .find(contactUsElements.storeInfosData())
                .eq(1)
                .should('contain', 'Email us')
                
            cy.get('a[href*="mailto:admin@marcelodebittencourt.com"')
                .first()
                .should('be.visible')
        }

        checkContactUsForm(){
            cy.get(contactUsElements.contactUsForm())
                .should('be.visible')
        }

        checkContactUsTitlePage(){
            cy.get(contactUsElements.contactUsTitlePage())
                .should('be.visible')
                .and('have.text', 'Contact us')
        }

        chooseASubjectForTheContact(){
            cy.get(contactUsElements.contactSubject())
                .select('Webmaster')
        }

        typeContactEmail(email){
            cy.get(contactUsElements.contactEmail()).type(email)
        }

        doNotFillInTheEmailInput(){
            cy.get(contactUsElements.contactEmail()).should('be.empty')
        }

        insertAccessoryFile(){
            cy.get(contactUsElements.contactAttachment()).selectFile('cypress/fixtures/docContactUsFixture.pdf')
        }

        checkAttachmentTitle(fixtureName: String){
            cy.get(contactUsElements.contactAttachmentTitle()).eq(1).invoke('val').should('contain', fixtureName)
        }

        typeAMessage(message){
            cy.get(contactUsElements.contactMessage()).type(message)
        }

        doNotFillInTheMessageInput(){
            cy.get(contactUsElements.contactMessage()).should('be.empty')
        }

        clickOnSubmitButton(){
            cy.get(contactUsElements.submitFormContact()).click()
        }

        checkSuccessMessage(successMessage) {
            cy.get(contactUsElements.successMessage()).should('contain', successMessage).and('be.visible')
        }
        
        checkErrorMessageDeliveredByFillingOutTheForm(errorMessage){
            cy.get(contactUsElements.errorMessageWhenFillingOutTheForm()).should('contain', errorMessage).and('be.visible')
        }
}   

export default new contactUsPO()