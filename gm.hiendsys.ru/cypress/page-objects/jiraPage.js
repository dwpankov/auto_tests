import {data} from './data'

class JiraPage {
    open() {
        cy.visit(`${Cypress.env('jiraURL')}`);
    }

    get loginField () {
        return cy.get('#login-form-username');
    }

    get passwordField () {
        return cy.get('#login-form-password');
    }

    get submitBtn () {
        return cy.get('#login-form-submit')
    }

    get firstIssue () {
        cy.get('#issuetable')
            .find('tbody>tr').first()
            .find('td')
            .eq(1)
            .as('firstIssue')
        
        return cy.get('@firstIssue')
    }
    
    get summary () {
        return cy.get('#summary-val')
    }

    get contactFormUrl () {
        return cy.get('#customfield_11500-val > a')
    }

    get company () {
        return cy.get('#customfield_11200-val')
    }

    get email () {
        return cy.get('#customfield_11306-val')
    }

    get phone () {
        return cy.get('#customfield_11307-val')
    }

    get country () {
        return cy.get('#customfield_11308-val')
    }

    get contact () {
        return cy.get('#customfield_11408-val')
    }


    jiraLogin() {
        cy.fixture('jira').then(jira => {
            this.loginField.type(jira.login)
            this.passwordField.type(jira.password)
        })

        this.submitBtn.click()
        
    }

    jiraGetIssue() {
        this.firstIssue.click(40, 20)
        
    }

    jiraCheckContent() {
        this.summary
            .contains('#summary-val', `${data.firstName} ${data.lastName} (${data.company}, ${data.country})`)

        this.contactFormUrl
            .contains(`${Cypress.env('siteURL')}`)
            .should('have.attr', 'href', `${Cypress.env('siteURL')}/contacts`)
        
        this.company
            .contains(data.company)
            .should('have.attr', 'href', '#')

        this.email
            .contains(data.email)

        this.phone
            .contains(`+${data.phone}`)

        this.country
            .contains(data.country)

        this.contact
            .contains(`${data.firstName} ${data.lastName} (${data.email}) (+${data.phone})`)
            .should('have.attr', 'href', '#')
    }
}

export default new JiraPage()