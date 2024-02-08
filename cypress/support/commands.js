Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    cy.get('#firstName').type('Amanda ')
    cy.get('#lastName').type('O')
    cy.get('#email').type('amanda@teste.com')
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()
})
