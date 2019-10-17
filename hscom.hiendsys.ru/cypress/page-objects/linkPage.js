class LinkPage {

    open() {
        cy.visit(`${Cypress.env('siteURL')}`);
    }

    get lending () {
        return cy.contains('Lending')
    }

    get scoring () {
        return cy.contains('AI Scoring')
    }

    get clients () {
        return cy.contains('Clients')
    }

    get services () {
        return cy.contains('Services')
    }

    get contact () {
        return cy.contains('contact us')
    }

    get wizerise () {
        return cy.contains('wizerise')
    }

    get sheduleDemo () {
        return cy.contains('Schedule a Demo')
    }

    get consLendSoft () {
        return cy.contains('Consumer lending software')
    }

    get microSoft () {
        return cy.contains('Microfinance software')
    }

    get smallBusLen () {
        return cy.contains('Small business lending software')
    }

    get p2p () {
        return cy.contains('Microfinance software')
    }

    get liveDemo () {
        return cy.contains('Live Demo')
    }

    get freePilot () {
        return cy.contains('Request Free Pilot')
    }

    get topBtn () {
        return cy.get('#Прямоугольник_541')
    }

    get hesLogo () {
        return cy.get('body > div.container > footer > div > div.footer-top > a > div')
    }

    get consumerLending () {
        return cy.get('body > div.container > footer > div > div.footer-top > div.navigation > ul > li:nth-child(1) > a')
    }

    get lendingSolution () {
        return cy.get('body > div.container > footer > div > div.footer-top > div.navigation > ul > li:nth-child(2) > a')
    }

    get lendingPlatform () {
        return cy.get('body > div.container > footer > div > div.footer-top > div.navigation > ul > li:nth-child(3) > a')
    }

    get lendingSoftware () {
        return cy.get('body > div.container > footer > div > div.footer-top > div.navigation > ul > li:nth-child(4) > a')
    }

    get linkedIn () {
        return cy.get('body > div.container > footer > div > div.footer-top > div.soc > a.in')
    }

    get twitter () {
        return cy.get('body > div.container > footer > div > div.footer-top > div.soc > a.tw')
    }

    checkLinks() {
        this.lending.click()
        cy.url().should('include', '#our_products')

        this.scoring.click()
        cy.url().should('include', '#ginimachine')

        this.clients.click()
        cy.url().should('include', '#testimonials')

        this.services.click()
        cy.url().should('include', '#services')

        this.contact.click()
        cy.url().should('include', '#contact_us')

        this.wizerise.should('have.prop', 'href')
            .and('equal', 'https://wizerise.com/en/')

        this.sheduleDemo.click()
        cy.url().should('include', '#contact_us')
         
        this.consLendSoft.should('have.prop', 'href')
            .and('equal', 'https://onlinelendingsoftware.com/hes-consumer-lending-software/')

        this.microSoft.should('have.prop', 'href')
            .and('equal', 'https://onlinelendingsoftware.com/hes-microfinance-lending-software/')

        this.smallBusLen.should('have.prop', 'href')
            .and('equal', 'https://onlinelendingsoftware.com/hes-commercial-lending-software/')

        this.p2p.should('have.prop', 'href')
            .and('equal', 'https://onlinelendingsoftware.com/hes-microfinance-lending-software/')
    
        this.liveDemo.should('have.prop', 'href')
            .and('equal', 'https://onlinelendingsoftware.com/')

        this.freePilot.should('have.prop', 'href')
            .and('equal', 'https://ginimachine.com/')

        this.topBtn.click({ force: true })
        cy.url().should('include', '#top')

        this.hesLogo.click({ force: true })
        cy.url().should('include', '#top')

        this.consumerLending.should('have.prop', 'href')
            .and('equal', 'https://onlinelendingsoftware.com/hes-microfinance-lending-software/')

        this.lendingSolution.should('have.prop', 'href')
            .and('equal', 'https://onlinelendingsoftware.com/hes-commercial-lending-software/')

        this.lendingPlatform.should('have.prop', 'href')
            .and('equal', 'https://onlinelendingsoftware.com/hes-point-of-sale-lending-software/')

        this.lendingSoftware.should('have.prop', 'href')
        .and('equal', 'https://onlinelendingsoftware.com/hes-marketplace-lending-software/')

        this.linkedIn.should('have.prop', 'href')
            .and('equal', 'https://www.linkedin.com/company/hiend-systems/')
        
        this.twitter.should('have.prop', 'href')
            .and('equal', 'https://twitter.com/lendingsoftware')
    }
}

export default new LinkPage()