Cypress.Commands.add('loginViaGUI', () => {
    cy.visit('/login?back=my-account')
    cy.fixture('userData.json').then((userData) => {
        cy.get('.col-md-6 > .form-control').type(userData.correctData.email)
        cy.get('.input-group > .form-control').type(userData.correctData.password)
        cy.get('#submit-login').click()
        cy.get('.user-info').children().eq(1).should('contain', userData.correctData.name).and('be.visible')
    })
})