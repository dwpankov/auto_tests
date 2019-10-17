import LinkPage from "../cypress/page-objects/linkPage";


describe('Проверка ссылок', () => {
    it('Check links', () => {
        cy.log('open site URL')
        LinkPage.open()

        cy.log('Check links')
        LinkPage.checkLinks()

    })
})    