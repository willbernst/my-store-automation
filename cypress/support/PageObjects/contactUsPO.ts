import contactUsElements from "../Elements/contactUsElements";

class contactUsPO {
        checkUrlContactUsPage() {
            cy.url().should('contain', contactUsElements.contactUsPageUrl())
        }

        clickOnContactUsHeaderLink() {
            cy.get(contactUsElements.contactUsHeaderLink()).click()
        }

        checkAddressOnTheStoreInformationBlock(address: string, country: string){
            cy.get(contactUsElements.storeInformations())
                .find(contactUsElements.storeInfosBlock())
                .find(contactUsElements.storeInfosData())
                .eq(0)
                .should('contain', address)
                .and('contain', country)
        }

        checkEmailOnTheStoreInformationBlock(emailUsLabel: string) {
            cy.get(contactUsElements.storeInformations())
                .find(contactUsElements.storeInfosBlock())
                .find(contactUsElements.storeInfosData())
                .eq(1)
                .should('contain', emailUsLabel)
                
            cy.get('a[href*="mailto:admin@marcelodebittencourt.com"')
                .first()
                .should('be.visible')
        }

        checkContactUsForm(){
            cy.get(contactUsElements.contactUsForm())
                .should('be.visible')
        }

        checkContactUsTitlePage(contactUsTitle: string){
            cy.get(contactUsElements.contactUsTitlePage())
                .should('be.visible')
                .and('have.text', contactUsTitle)
        }

        checkDefaultValueOfSubjectField(){
            cy.get(contactUsElements.contactSubject()).find('option[value=2]').should('be.selected')
        }

        chooseASubjectForTheContact(subject:string){
            cy.get(contactUsElements.contactSubject()).select(subject)
        }

        typeContactEmail(email){
            cy.get(contactUsElements.contactEmail()).type(email)
        }

        checkDefaultValueOfEmailField(){
            cy.get(contactUsElements.contactEmail()).should('have.attr', 'placeholder', 'your@email.com').and('be.empty')
        }

        validatePreviouslyFilledEmailWhenUserLoggedIn(){
            cy.fixture('userData.json').then((userData) => {
                cy.get(contactUsElements.contactEmail()).should('contain.value', userData.correctData.email)
            })
        }

        doNotFillInTheEmailInput(){
            cy.get(contactUsElements.contactEmail()).should('be.empty')
        }

        insertAccessoryFile(file){
            cy.get(contactUsElements.contactAttachment()).selectFile(file)
        }

        checkDefaultValueAttachment(){
            cy.get(contactUsElements.contactAttachmentTitle()).eq(1).should('be.empty')
        }

        checkAttachmentTitle(fixtureName: String){
            cy.get(contactUsElements.contactAttachmentTitle()).eq(1).invoke('val').should('contain', fixtureName)
        }

        typeAMessage(message){
            cy.get(contactUsElements.contactMessage()).type(message)
        }

        checkDefaultValueMessageInput(){
            cy.get(contactUsElements.contactMessage()).should('have.attr', 'placeholder', 'How can we help?').and('be.empty')
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

        checkAlertMessage(){
            cy.get(contactUsElements.contactEmail())
        }
}   

export default new contactUsPO()