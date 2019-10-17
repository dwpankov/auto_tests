
/// <reference types="Cypress" />
import FormPage from "../cypress/page-objects/formPage";
import JiraPage from "../cypress/page-objects/jiraPage";


Cypress.on('uncaught:exception', (err, runnable) => {
    //  returning false here prevents Cypress from
    //  failing the test
    return false
})


describe('UI e2e test', () => {
    it('fill form', () => {
        cy.log('open site URL')
        FormPage.openContactForm()

        cy.log('Fill form')
        FormPage.fillForm()

        cy.log('Submit from')
        FormPage.submitForm()

        cy.log('Check submit modal pop-up')
        FormPage.checkSubmitModal()

        cy.log('Close modal pop-up')
        FormPage.closeSubmitModal()

        cy.log('Check fields are cleared')
        FormPage.checkClearFormFields()

    })
})    

describe('e2e Jira test', () => {
    it('check jira', () => {

        cy.log('Visit JIRA')
        JiraPage.open()

        cy.log('Log in JIRA')
        JiraPage.jiraLogin()

        cy.log('Get 1st issue')
        JiraPage.jiraGetIssue()

        cy.log('Check jira content')
        JiraPage.jiraCheckContent()
    })
})


