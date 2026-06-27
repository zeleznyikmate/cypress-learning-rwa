describe('Authentication Tests', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('should log in successfully with valid credentials', () => {

        cy.get('#username').type('Heath93');
        cy.get('#password').type('s3cret');

        cy.get('[data-test="signin-submit"]').click();

        cy.url().should('not.include', '/signin');
        cy.get('[data-test="sidenav-username"]')
            .should('be.visible')
            .and('contain', 'Heath93');
    });
});