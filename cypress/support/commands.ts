import graphicCornerContentText from '../fixtures/graphicCornerContentText.json'
import ourCompanyElements from './Elements/Footer/ourCompanyElements'

Cypress.Commands.add('loginViaGUI', () => {
    cy.visit('/login?back=my-account')
    cy.fixture('userData.json').then((userData) => {
        cy.get('.col-md-6 > .form-control').type(userData.correctData.email)
        cy.get('.input-group > .form-control').type(userData.correctData.password)
        cy.get('#submit-login').click()
        cy.get('.user-info').children().eq(1).should('contain', userData.correctData.name).and('be.visible')
    })
})

Cypress.Commands.add('iteratingOverAJSONObject', () => {
    const names:string[] = graphicCornerContentText.products.names
    const prices:string[] = graphicCornerContentText.products.prices

    cy.get('.product-title').its('length').should('be.equal', 9)
    cy.get('.product-title').as('product-title').then($label => {
        const arrayLabels:string[] = []
        for(var name in names){
            var allLabels = $label[name].textContent
            arrayLabels.push(allLabels)
        }
        const arrayLabelsStringNames = arrayLabels.join('')
       
        cy.get('@product-title').find('a').should('have.text', arrayLabelsStringNames)
    })

    cy.get('.price').its('length').should('be.equal', 9)
    cy.get('.price').then($label => {
        const arrayPricesLabel:string[] = []
        for(var price in prices){
            var allPriceLabels = $label[price].textContent
            arrayPricesLabel.push(allPriceLabels)
        }
        const arrayLabelStringPices = arrayPricesLabel.join('')

        cy.get('.price').should('contain.text', arrayLabelStringPices)
    })
})