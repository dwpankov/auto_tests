class LinkPage {

    open() {
        cy.visit(`${Cypress.env('siteURL')}`);
    }

    get giniLogo () {
        return cy.get('[src="images/logo-ginimachine-color.svg"]')
    }

    get home () {
        return cy.contains('Главная')
    }
    
    get product () {
        return cy.contains('Платформа')
    }

    get blog () {
        return cy.contains('Блог')
    }

    get contactUs () {
        return cy.contains('Контакты')
    }

    get requestDemo () {
        return cy.contains('Заказать демо-версию')
    }

    get learnMore () {
        return cy.contains('Подробнее')
    }

    get homeLink () {
        return cy.get('.footer-menubar > .hidden-xs > ul > :nth-child(1) > a')
    }

    get productLink () {
        return cy.get('.footer-menubar > .hidden-xs > ul > :nth-child(2) > a')
    }

    get blogLink () {
        return cy.get('.footer-menubar > .hidden-xs > ul > :nth-child(3) > a')
    }

    get contactUsLink () {
        return cy.get('.hidden-xs > ul > :nth-child(4) > a')
    }




    goToStartPage() {
        this.giniLogo.click()
    }

    
    checkLinks() {
        this.home.click()
        cy.get('h1')
            .should('contain', `Скоринг нового поколения`)

        this.product.click()
        cy.get('h1')
            .should('contain', 'Платформа')
            .should('contain', 'GiniMachine')


        this.blog.click()
        cy.get('h1')
            .should('contain', 'Блог компании')

        this.contactUs.click()
        cy.get('h1')
            .should('contain', 'Контакты')
        this.goToStartPage()

        this.requestDemo.click()
        cy.wait(250)
        cy.get('.modal-header_ > h3')
            .should('contain', 'Заказать демо')
        cy.get('.modal-header_ > .close').click()

        this.learnMore.click({ force: true})
        cy.get('h1')
            .should('contain', 'Платформа')
            .should('contain', 'GiniMachine')
        this.goToStartPage()

        this.homeLink.click()
        cy.get('h1')
            .should('contain', `Кредитный скоринг нового поколения`)

        this.productLink.click()
        cy.get('h1')
            .should('contain', 'Платформа')
            .should('contain', 'GiniMachine')
        
        this.blogLink.click()
        cy.get('h1')
            .should('contain', 'Блог компании')

        this.contactUsLink.click()
        cy.get('h1')
            .should('contain', 'Контакты')
        this.goToStartPage()
    }
}

export default new LinkPage()