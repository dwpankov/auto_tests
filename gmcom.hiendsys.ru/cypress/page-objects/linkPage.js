class LinkPage {

    open() {
        cy.visit(`${Cypress.env('siteURL')}`);
    }

    get giniLogo () {
        return cy.get('[src="images/logo-ginimachine-color.svg"]')
    }

    get home () {
        return cy.contains('Home')
    }
    
    get product () {
        return cy.contains('Product')
    }

    get blog () {
        return cy.contains('Blog')
    }

    get contactUs () {
        return cy.contains('Contact Us')
    }

    get requestDemo () {
        return cy.contains('Request a Demo')
    }

    get learnMore () {
        return cy.contains('Learn More')
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
            .should('contain', `Fighting bad loans with`)

        this.product.click()
        cy.get('h1')
            .should('contain', 'One Platform')
            .should('contain', 'All for')
            .should('contain', 'Scoring')

        this.blog.click()
        cy.get('h1')
            .should('contain', 'Company blog')

        this.contactUs.click()
        cy.get('h1')
            .should('contain', 'See GiniMachine in')
        this.goToStartPage()

        this.requestDemo.click()
        cy.wait(250)
        cy.get('.modal-header_ > h3')
            .should('contain', 'GiniMachine Demo Request')
        cy.get('.modal-header_ > .close').click()

        this.learnMore.click({ force: true})
        cy.get('h1')
            .should('contain', 'One Platform')
            .should('contain', 'All for')
            .should('contain', 'Scoring')
        this.goToStartPage()

        this.homeLink.click()
        cy.get('h1')
            .should('contain', `Fighting bad loans with`)

        this.productLink.click()
        cy.get('h1')
            .should('contain', 'One Platform')
            .should('contain', 'All for')
            .should('contain', 'Scoring')
        
        this.blogLink.click()
        cy.get('h1')
            .should('contain', 'Company blog')

        this.contactUsLink.click()
        cy.get('h1')
            .should('contain', 'See GiniMachine in')
        this.goToStartPage()
    }
}

export default new LinkPage()