import FormPage from "../cypress/page-objects/formPage";


Cypress.on('uncaught:exception', (err, runnable) => {
    //  returning false here prevents Cypress from
    //  failing the test
    return false
})

describe('Contact form', () => {
    it('Check min, max, real values', () => {
        cy.log('open site URL')
        FormPage.openContactForm()

        cy.log('Check form')
        FormPage.checkForm()
        
    })
})    