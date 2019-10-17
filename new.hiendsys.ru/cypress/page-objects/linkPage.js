class LinkPage {

    open() {
        cy.visit(`${Cypress.env('siteURL')}`);
    }

    get HESLogo () {
        return cy.get('body > div.container > header > div.top-navigation > div > div.logo > a > svg')
    }

    get creditConveyerMFO () {
        return cy.contains('По для МФО HES')
    }

    get creditConveyerBank () {
        return cy.contains('По для Банка HES')
    }

    get reconnect () {
        return cy.contains('HES:reconnect')
    }

    get giniMachine () {
        return cy.contains('GiniMachine')
    }

    get clients () {
        return cy.contains('Клиенты')
    }

    get company () {
        return cy.contains('Компания')
    }

    get news () {
        return cy.contains('Новости')
    }

    get contactsHESBtn () {
        return cy.contains('КОНТАКТЫ HES')
    }

    get getYourPersonalDemoBtn () {
        return cy.contains('заказать демо')
    }

    get inviteToTenderBtn () {
        return cy.contains('пригласить в тендер')
    }

    get contactUs () {
        return cy.contains('СВЯЖИТЕСЬ С НАМИ')
    }

    get creditConveyerMFOLink () {
        return cy.get('.list-footer-links > [href="/products/credit-conveyer-mfo"]')
    }

    get creditConveyerBankLink () {
        return cy.get('.list-footer-links > [href="/products/credit-conveyer-bank"]')
    }

    get reconnectLink () {
        return cy.get('.list-footer-links > [href="/products/reconnect"]')
    }

    get giniMachineLink () {
        return cy.get('.list-footer-links > [href="https://ginimachine.ru"]')
    }

    get clientsLink () {
        return cy.get('.list-footer-links > [href="/company/clients"]')
    }

    get companyLink () {
        return cy.get('.list-footer-links > [href="/company"]')
    }

    get newsLink () {
        return cy.get('.list-footer-links > [href="/news"]')
    }

    get careersLink () {
        return cy.get('[href="/careers"]')
    }



    
    goToStartPage() {
        this.HESLogo.click()
    }

    checkLinks() {
        this.creditConveyerMFO.click({ force: true })
        cy.get('h1')
            .should('contain', 'Программное обеспечение')
            .should('contain', 'для МФО HES')

        this.creditConveyerBank.click({ force: true })
        cy.get('h1')
            .should('contain', 'Кредитный конвейер')
            .should('contain', 'для банка HES')

        this.reconnect.click({ force: true })
        cy.get('h1')
            .should('contain', 'HES Data Re-Connect')

        this.giniMachine.should('have.prop', 'href')
            .and('equal', 'https://ginimachine.ru/')

        this.clients.click({ force: true })
        cy.get('h1')
            .should('contain', 'Клиенты')
            .should('contain', 'компании')
            .should('contain', 'HES')

        this.company.click({ force: true })
        cy.get('h1')
            .should('contain', 'Создаем решения,')
            .should('contain', 'которые развивают')
            .should('contain', 'ваш бизнес')

        this.news.click({ force: true })
        cy.get('h2')
            .should('contain', 'Новости Компании')

        this.contactsHESBtn.click()
        cy.get('h2')
            .should('contain','Форма обратной связи')
        this.goToStartPage()

        this.getYourPersonalDemoBtn.click()
        cy.get('h2')
            .should('contain','Форма обратной связи')
        this.goToStartPage()

        this.inviteToTenderBtn.click()
        cy.get('h2')
            .should('contain','Форма обратной связи')
        this.goToStartPage()

        this.contactUs.click()
        cy.get('h2')
            .should('contain','Форма обратной связи')
        this.goToStartPage()

        this.creditConveyerMFOLink.click()
        cy.get('h1')
            .should('contain', 'Программное обеспечение')
            .should('contain', 'для МФО HES')

        this.creditConveyerBankLink.click()
        cy.get('h1')
            .should('contain', 'Кредитный конвейер')
            .should('contain', 'для банка HES')

        this.reconnectLink.click()
        cy.get('h1')
            .should('contain', 'HES Data Re-Connect')

        this.giniMachineLink.should('have.prop', 'href')
            .and('equal', 'https://ginimachine.ru/')

        this.clientsLink.click()
        cy.get('h1')
            .should('contain', 'Клиенты')
            .should('contain', 'компании')
            .should('contain', 'HES')

        this.companyLink.click()
        cy.get('h1')
            .should('contain', 'Создаем решения,')
            .should('contain', 'которые развивают')
            .should('contain', 'ваш бизнес')

        this.newsLink.click()
        cy.get('h2')
            .should('contain', 'Новости Компании')

        this.careersLink.click()
        cy.get('h1')
            .should('contain', 'Присоединись')
            .should('contain', 'к команде HES')


        








        
        

        

        

        

        
    }

    

    
}

export default new LinkPage()