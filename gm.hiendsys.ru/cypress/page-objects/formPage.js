
import Chance from 'chance';
import 'cypress-file-upload';
import {data} from './data'
import {testingData} from './data'

class FormPage {

    openContactForm() {
        cy.visit(`${Cypress.env('siteURL')}/contacts`);
    }

    get firstNameField () {
        return cy.get('#fFirstName');
    }

    get lastNameField () {
        return cy.get('#fLastName');
    }

    get emailField () {
        return cy.get('#fEmail');
    }

    get phoneField () {
        return cy.get('#fPhone')
    }

    get companyField () {
        return cy.get('#fCompany')
    }

    get messageField () {
        return cy.get('#fMessage')
    }

    get attachFileField () {
        return cy.get('#fileToUpload')
    }

    get submitBtn () {
        return cy.get('.submit_button > .btn')
    }

    get submitModal () {
        return cy.get('.modal')
    }

    get submitText () {
        return cy.get('h3')
    }

    get submitTextConfirmation () {
        return cy.get('.modal-header > p')
    }

    get submitCloseBtn () {
        return cy.get('.modal-header > .btn')
    }

    checkForm() {
        testingData.forEach(({
            description,
            fieldData
        }) => {

        cy.log(`${description}`)
        this.firstNameField.type(fieldData.firstName).should('have.value', fieldData.firstName);
        this.lastNameField.type(fieldData.lastName).should('have.value', fieldData.lastName);
        this.emailField.type(fieldData.email).should('have.value', fieldData.email);
        this.phoneField.type(fieldData.phone).should('have.value', `+${fieldData.phone}`);
        this.companyField.type(fieldData.company).should('have.value', fieldData.company);
        this.messageField.type(fieldData.message).should('have.value', fieldData.message);
        this.clearForm()
        })
    }

    clearForm() {
        this.firstNameField.clear()
        this.lastNameField.clear()
        this.emailField.clear()
        this.phoneField.clear()
        this.companyField.clear()
        this.messageField.clear()
    }

    fillForm() {
        this.firstNameField.type(data.firstName)
        this.lastNameField.type(data.lastName)
        this.emailField.type(data.email)
        this.phoneField.type(data.phone)
        this.companyField.type(data.company)
        this.messageField.type(data.message)
        
        cy.fixture('attach.jpg', 'base64').then(fileContent => {
            this.attachFileField.upload(
              { fileContent, fileName: 'attach.jpg', mimeType: 'image/png' },
              { subjectType: 'input' },
            )
        })
    }

    submitForm() {
        this.submitBtn.click()
    }

    checkSubmitModal() {
        this.submitModal
            .should('be.visible')
        
        this.submitText
            .contains('Спасибо!')
            .should('be.visible')

        this.submitTextConfirmation
            .contains('Ваше письмо отправлено.')
            .should('be.visible')
    }

    closeSubmitModal() {
        this.submitCloseBtn.click()
    }
    
    checkClearFormFields() {
        this.firstNameField.should('have.value', '')
        this.lastNameField.should('have.value', '')
        this.emailField.should('have.value', '')
        this.phoneField.should('have.value', '')
        this.companyField.should('have.value', '')
        this.messageField.should('have.value', '')
    }
}

export default new FormPage()