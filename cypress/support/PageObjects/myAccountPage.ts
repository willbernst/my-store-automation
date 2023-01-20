import myAccountElements from "../Elements/myAccountElements"

class myAccountPage{
    checkUrlMyAccountPage(){
        cy.url().should('contain', myAccountElements.myAccountPageUrl())
    }   
}

export default new myAccountPage()