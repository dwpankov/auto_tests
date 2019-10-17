class LinkPage {

    open() {
        cy.visit(`${Cypress.env('siteURL')}`);
    }

    get HESLogo () {
        return cy.get('body > div > header > div.top-navigation > div > div.logo > a > svg > g > g > path')
    }

    get HESConsumerLending () {
        return cy.contains('HES Consumer Lending')
    }

    get HESP2PLending () {
        return cy.contains('HES P2P Lending')
    }

    get HESMicroFinanceLending () {
        return cy.contains('HES Microfinance Lending')
    }

    get HESCommercialLending () {
        return cy.contains('HES Commercial Lending')
    }

    get HEScore () {
        return cy.contains('HES Core')
    }

    get clients () {
        return cy.contains('Clients')
    }
    
    get blog () {
        return cy.contains('Blog')
    }

    get company () {
        return cy.contains('Company')
    }

    get contactHESBtn () {
        return cy.contains('CONTACT HES')
    }

    get getYourPersonalDemoBtn () {
        return cy.contains('get your personal demo')
    }

    get exploreHESCore () {
        return cy.contains('explore hes core')
    }

    get contactHESExperts () {
        return cy.contains('CONTACT HES EXPERTS')
    }

    get HESConsumerLendingLink () {
        return cy.get('.list-footer-links > [href="/hes-consumer-lending-software"]')
    }

    get microfinanceLendingSoftwareLink () {
        return cy.get('.list-footer-links > [href="/hes-microfinance-lending-software"]')
    }

    get  p2pLendingSoftwareLink () {
        return cy.get('.list-footer-links > [href="/hes-marketplace-lending-software"]')
    }

    get  posLendingSoftwareLink () {
        return cy.get('.list-footer-links > [href="/hes-point-of-sale-lending-software"]')
    }

    get commercialLendingSoftwareLink () {
        return cy.get('.list-footer-links > [href="/hes-commercial-lending-software"]')
    }

    get clientsLink () {
        return cy.get('.list-footer-links > [href="/projects"]')
    }

    get HESCoreLink () {
        return cy.get('.list-footer-links > [href="/hes-core"]')
    }

    get aboutUsLink () {
        return cy.get('.list-footer-links > [href="/about-hes"]')
    }

    get newsRoomLink () {
        return cy.get('.list-footer-links > [href="/news"]')
    }




    goToStartPage() {
        this.HESLogo.click()
    }

    
    checkLinks() {
        this.HESConsumerLending.click({ force: true })
        cy.get('h1')
            .should('contain', 'Consumer')
            .should('contain', ' Lending Software')

        this.HESP2PLending.click({ force: true })
        cy.get('h1')
            .should('contain', 'Peer-to-peer')
            .should('contain', 'Lending Software')

        this.HESMicroFinanceLending.click({ force: true })
        cy.get('h1')
            .should('contain', 'Microfinance')
            .should('contain', 'Lending Software')

        this.HESCommercialLending.click({ force: true })
        cy.get('h1')
            .should('contain', 'Commercial')
            .should('contain', 'Lending Software')

        this.HEScore.click({ force: true })
        cy.get('h1')
            .should('contain', 'HES Core')
            .should('contain', 'Digital Lending Software')

        this.clients.click({ force: true })
        cy.get('h1')
            .should('contain', `HES' Projects`)

        this.blog.click({ force: true })
        cy.get('h1')
            .should('contain', 'Company News')

        this.company.click({ force: true})
        cy.get('h1')
            .should('contain', 'Bringing')
            .should('contain', 'Fintech Innovations')
            .should('contain', 'to Everyday Lending')

        this.contactHESBtn.click()
        cy.get('h1')
            .should('contain', 'Contact HES')
        this.goToStartPage()

        this.getYourPersonalDemoBtn.click()
        cy.get('h1')
            .should('contain', 'Contact HES')
        this.goToStartPage()

        this.exploreHESCore.click()
        cy.get('h1')
            .should('contain', 'HES Core')
            .should('contain', 'Digital Lending Software')
        this.goToStartPage()

        this.contactHESExperts.click()
        cy.get('h1')
            .should('contain', 'Contact HES')
        this.goToStartPage()

        this.HESConsumerLendingLink.click()
        cy.get('h1')
            .should('contain', 'Consumer')
            .should('contain', ' Lending Software')

        this.microfinanceLendingSoftwareLink.click()
        cy.get('h1')
            .should('contain', 'Microfinance')
            .should('contain', 'Lending Software')

        this.p2pLendingSoftwareLink.click()
        cy.get('h1')
            .should('contain', 'Peer-to-peer')
            .should('contain', 'Lending Software')

        this.posLendingSoftwareLink.click()
        cy.get('h1')
            .should('contain', 'Point-of-Sale')
            .should('contain', 'Lending Software')

        this.commercialLendingSoftwareLink.click()
        cy.get('h1')
            .should('contain', 'Commercial')
            .should('contain', 'Lending Software')

        this.clientsLink.click()
        cy.get('h1')
            .should('contain', `HES' Projects`)

        this.HESCoreLink.click()
        cy.get('h1')
            .should('contain', 'HES Core')
            .should('contain', 'Digital Lending Software')

        this.aboutUsLink.click()
        cy.get('h1')
            .should('contain', 'Bringing')
            .should('contain', 'Fintech Innovations')
            .should('contain', 'to Everyday Lending')

        this.newsRoomLink.click()
        cy.get('h1')
            .should('contain', 'Company News')
    }
}

export default new LinkPage()