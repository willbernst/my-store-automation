import yourAccountElements from "../../Elements/Footer/yourAccountElements"

class yourAccountPO{
    validateYourAccountColumn(){
        cy.get(yourAccountElements.yourAccountColumn()).should('be.visible')
        cy.get(yourAccountElements.yourAccountColumn()).children().eq(2).children().should('have.length', 4)
    }
}

export default new yourAccountPO()