describe('test', () => {
    beforeEach(() =>{
        cy.visit('localhost:3003')
    })
    it('usernametest', () => {    
    cy.get('input[name=username]').should('have.value', '').type('maxwell').should('have.value', 'maxwell');
    })
    it('emailtest', () => {    
        cy.get('input[name=email]').should('have.value', '').type('yoemail@gmail.com').should('have.value', 'yoemail@gmail.com');
        })    
        it('passwordtest', () => {    
            cy.get('input[name=password]').should('have.value', '').type('password1').should('have.value', 'password1');
            })  
            it('agreementtest', () => {    
                cy.get('input[name=agreement]').should('not.be.checked').check().should('be.checked').uncheck().should('not.be.checked')
                })  
                it('formsubmittest', () => {
                    cy.get('input[name=username]').type('asdf')
                    cy.get('input[name=email]').type('thisemail@email.com')
                    cy.get('input[name=password]').type('swaggatron')
                    cy.get('input[name=agreement]').check()
                    cy.get('input[id=rust]').check()
                    cy.get('select[name=favFood').select('Pizza')
                    cy.get('input[name=submit]').click()
                    cy.get('input[name=username]').should('have.value', '')
                    cy.get('input[name=email]').should('have.value', '')
                    cy.get('input[name=password]').should('have.value', '')
                    cy.get('input[name=agreement]').should('not.be.checked')
                    cy.get('h4[name=success]').should('exist')
                })
                it('formsubmiterrortest', () => {
                    cy.get('input[name=username]').type('asdf')
                    cy.get('input[name=password]').type('swaggatron')
                    cy.get('input[name=agreement]').check()
                    // cy.get('input[id=rust]').check()
                    cy.get('select[name=favFood').select('Pizza')
                    cy.get('input[name=submit]').click()
                    cy.get('h4[name=error]').should('exist')
                })
})


