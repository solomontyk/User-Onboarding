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



    



  
//   const fl = ["fname","lname"];
//   describe('My first test', () => {
//     it('visits the page, clicks on login, verifies URL', () => {
//       cy.visit('http://localhost:3003/')
//       cy.wait(1000).get("[data-cy = 'login']").click();
//       cy.url().should('include', "/form")
//     })
//   })
  
//   describe("My second test", () => {
//       it("Runs a 'first or last name must be 3 characters or more' error", () => {
//         cy.visit('http://localhost:3003/form')
//         fl.map(n=> {
//            cy.get(`[data-cy = ${n}`).type("ja")
//            cy.get(`[data-cy = ${n}Err]`).should("have.text", `*${n === "lname" ? "Last" : "First"} name must be 3 characters or more`)
//         })
//       })
//       it("Runs a 'Must be letters' error", () => {
//         cy.visit('http://localhost:3003/form')
//         fl.map(n=> {
//           cy.get(`[data-cy = ${n}`).type("jacob?")
//           cy.get(`[data-cy = ${n}Err]`).should("have.text", `*Must only be letters`)
//        })
//       })
//       it("Runs a First or Last name is required error", ()=> {
//         cy.visit("http://localhost:3003/form")
//         fl.map(n=> {
//           cy.get(`[data-cy = ${n}]`).type("jacob")
//           cy.get(`[data-cy = ${n}Err]`).should("not.exist")
//           cy.get(`[data-cy = ${n}]`).type("jacob").clear();
//           cy.get(`[data-cy = ${n}Err]`).should("have.text", `${n ==="fname" ? "*First name is required" : "*Last name is required"}`)
//         })
//       })
//       it("Responds with no error message", () => {
//         cy.visit('http://localhost:3003/form')
//         fl.map(n=> {
//           cy.get(`[data-cy = ${n}`).type(`${n === "fname" ? "Jacob" : "Lang"}`)
//           cy.get(`[data-cy = ${n}Err]`).should("not.exist")
//        })
//       })
//     })
//     //!done with first name
//     describe("My third test", ()=> {
//       it("Runs a 'username is required error'",()=> {
//         cy.visit("http://localhost:3003/form")
//         cy.get("[data-cy = 'username']").type("jaco")
//         cy.get("[data-cy = 'usernameErr']").should("have.text","*Username must be 5 characters or more")
//       })
//       it("Runs a 'Username is required' error and verifies that there is no error message when typed in correctly",()=> {
//         cy.visit("http://localhost:3003/form")
//         cy.get("[data-cy = 'username']").type("jacobl1")
//         cy.get("[data-cy='usernameErr']").should("not.exist")
//         cy.get("[data-cy='username']").type("jacob1").clear()
//         cy.get("[data-cy='usernameErr']").should("have.text","*Username is required")
//       })
//       it("Run a 'Username must end with at least one number' error",()=> {
//         cy.visit("http://localhost:3003/form")
//         cy.get("[data-cy='username']").type("jacoblang")
//         cy.get("[data-cy='usernameErr']").should("have.text","*Username must end with at least one number")
//       })
//     })
//     describe("My fourth test",()=> {
//       it("Runs a 'must be 6 or more in length'",()=> {
//         cy.visit("http://localhost:3003/form")
//         cy.get("[data-cy='password']").type("ashje")
//         cy.get("[data-cy='passwordErr']").should("have.text","*Must be 6 or more in length")
//       })
//       it("Runs a 'must use at least one special character' error",()=> {
//         cy.visit("http://localhost:3003/form")
//         cy.get("[data-cy='password']").type("asdjflsdf2")
//         cy.get("[data-cy='passwordErr']").should("have.text","*Must use at least one special character")
//       })
//       it("Runs a 'password is required' error",()=> {
//         cy.visit("http://localhost:3003/form")
//         cy.get("[data-cy='password']").type("abscdwe?1df")
//         cy.get("[data-cy='passwordErr']").should("not.exist")
//         cy.get("[data-cy='password']").clear()
//         cy.get("[data-cy='passwordErr']").should("have.text","*Password is required")
//       })
//     })
//     describe("My fifth test",()=> {
//       it("Runs a 'must agree to the terms and conditions to proceed' error",()=> {
//         cy.visit("http://localhost:3003/form")
//         cy.get("[data-cy='terms']").click()
//         cy.get("[data-cy='terms']").click()
//         cy.get("[data-cy='termsErr']").should("have.text","*Must agree to terms and conditions to proceed")
//       })
//       it("Runs no error",()=> {
//         cy.visit("http://localhost:3003/form")
//         cy.get("[data-cy='terms']").click()
//         cy.get("[data-cy='termsErr']").should("not.exist")
//       })
//     })
//     describe("My sixth test",()=> {
//       it("Runs no error",()=> {
//         cy.visit("http://localhost:3003/form")
//         newArray.map(n=> {
//           cy.get("[data-cy='state']").select(n, {force : true})
//           cy.get("[data-cy='stateErr']").should("not.exist")
//         })
//       })
//       it("Runs the error: 'must pick your state'",()=> {
//         cy.visit("http://localhost:3003/form")
//         newArray.map(n=> { cy.get("[data-cy='state']").select(n, {force : true})
//         cy.get("[data-cy='state']").select("--Select One--")
//         cy.get("[data-cy='stateErr']").should("have.text","*Must pick your state")
//       })
//       })
//     })
//     describe("My seventh test",()=> {
//       it("Runs no error for programming language selection",()=> {
//         cy.visit("http://localhost:3003/form")
//         programmingLanguages.map(n=> {
//           cy.get("[data-cy='language']").select(n, { force: true })
//           cy.get("[data-cy='languageErr']").should("not.exist")
//         })
//       })
//       it("Runs error 'Must pick your favorite programming language'",()=> {
//         cy.visit("http://localhost:3003/form")
//         programmingLanguages.map(n=> {
//           cy.get("[data-cy='language']").select(n)
//           cy.get("[data-cy='language']").select("--Select One--")
//           cy.get("[data-cy='languageErr']").should("have.text","*Must pick your favorite programming language")
//         })
//       })
//     })
//     describe("Eighth test",()=> {
//       it("Runs error : 'must be a valid email address'",()=> {
//         cy.visit("http://localhost:3003/form")
//         cy.get("[data-cy='email']").type("ajsasdflaskjlksbcsdf")
//         cy.get('[data-cy="emailErr"]').should("have.text","*Must be a valid email address")
//       })
//       it("Runs error : 'email is required'",()=> {
//         cy.visit("http://localhost:3003/form")
//         cy.get("[data-cy='email']").type("jacoblang72@comcast.net")
//         cy.get("[data-cy='email']").clear()
//         cy.get('[data-cy="emailErr"]').should("have.text","*Email is required")
//       })
//     })
//     describe("This submits the form and verifies URL of user page",()=> {
//       it("submits the form with all the correct values",()=> {
//         cy.visit("http://localhost:3003/form")
//         fl.map(n=> {
//           cy.get(`[data-cy = ${n}`).type(`${n === "fname" ? "Jacob" : "Lang"}`)
//        })
//        cy.get("[data-cy = 'username']").type("jacobl11")
//        cy.get("[data-cy='email']").type("jacoblang72@comcast.net")
//        cy.get("[data-cy='password']").type("abscdwe?1df")
//        cy.get("[data-cy='language']").select("JavaScript")
//        cy.get("[data-cy='state']").select("Delaware")
//        cy.get("[data-cy='terms']").click()
//        cy.get("[data-cy='submit']").click()
//        cy.url().should("include","/user")
//       })
//     })
//     describe("This toggles the expand and collapse user info",()=> {
//       it("submits the form with all the correct values and expands user info",()=> {
//         cy.visit("http://localhost:3003/form")
//         fl.map(n=> {
//           cy.get(`[data-cy = ${n}`).type(`${n === "fname" ? "Jacob" : "Lang"}`)
//        })
//        cy.get("[data-cy = 'username']").type("jacobl11")
//        cy.get("[data-cy='email']").type("jacoblang72@comcast.net")
//        cy.get("[data-cy='password']").type("abscdwe?1df")
//        cy.get("[data-cy='language']").select("JavaScript")
//        cy.get("[data-cy='state']").select("Delaware")
//        cy.get("[data-cy='terms']").click()
//        cy.get("[data-cy='submit']").click()
//        cy.get("[data-cy='expandOrCollapse']").click()
//        cy.get('[data-cy="nameCard"]').should("have.text","Name : Jacob Lang")
//       //  cy.contains("jacoblang72@comcast.net")
//       //  .should("have.text","Email : jacoblang72@comcast.net")
//        cy.get('[data-cy="usernameCard"]').should("have.text","Username : jacobl11")
//        cy.get('[data-cy="languageCard"]').should("have.text","Favorite Programming Language : JavaScript")
//        cy.get('[data-cy="stateCard"]').should("have.text","Location : Delaware")
//        cy.get("[data-cy='expandOrCollapse']").click()
//        cy.get('[data-cy="expandOrCollapse"]').should("have.text","Press to expand")
//       })
//     })
//     describe("This submits the form and then tests the menu button and then goes back to user info page",()=> {
//       it("submits the form, goes to menu, and then back to user info page",()=> {
//         cy.visit("http://localhost:3003/form")
//         fl.map(n=> {
//           cy.get(`[data-cy = ${n}`).type(`${n === "fname" ? "Jacob" : "Lang"}`)
//        })
//        cy.get("[data-cy = 'username']").type("jacobl11")
//        cy.get("[data-cy='email']").type("jacoblang72@comcast.net")
//        cy.get("[data-cy='password']").type("abscdwe?1df")
//        cy.get("[data-cy='language']").select("JavaScript")
//        cy.get("[data-cy='state']").select("Delaware")
//        cy.get("[data-cy='terms']").click()
//        cy.get("[data-cy='submit']").click()
//        cy.wait(3003).get('[data-cy="menuIcon"]').click()
//        cy.url().should("include","/")
//        cy.get("[data-cy = 'userLink']").click()
//        cy.url().should('include','/user')
//       })})
//       describe("Last Test verifies log out function",()=> {
//         it("submits the form, goes to menu, and then back to login",()=> {
//           cy.visit("http://localhost:3003/form")
//           fl.map(n=> {
//             cy.get(`[data-cy = ${n}`).type(`${n === "fname" ? "Jacob" : "Lang"}`)
//          })
//          cy.get("[data-cy = 'username']").type("jacobl11")
//          cy.get("[data-cy='email']").type("jacoblang72@comcast.net")
//          cy.get("[data-cy='password']").type("abscdwe?1df")
//          cy.get("[data-cy='language']").select("JavaScript")
//          cy.get("[data-cy='state']").select("Delaware")
//          cy.get("[data-cy='terms']").click()
//          cy.get("[data-cy='submit']").click()
//          cy.wait(3003).get('[data-cy="menuIcon"]').click()
//          cy.get("[data-cy = 'login']").click();
//          cy.get("[data-cy='logout']").click()
//          cy.get('[data-cy="userLink"]').should("not.exist")
//         })})