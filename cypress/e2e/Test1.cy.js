//descirbe block - Testsuite
//it block - Testcases
/// <reference types="cypress"/>
describe("Testsuite01",()=>{
    it("Testcase01",()=>{
        cy.visit("/")
        //cy.viewport("iphone-6")
        //type in input field
        cy.get('.search-keyword').type("ca")
        //assertion + only visible items
        cy.get('.product:visible').should('have.length',4)
        //alliasing
        cy.get('.products').as("PL")
        //parent child chaining + static click on item
        cy.get('@PL').find(".product").eq(2).contains("ADD TO CART").click()
        //Dynamic item click using iterator
        cy.get('@PL').find(".product").each(($el,index,$list)=>{
            const vegName = $el.find('.product-name').text()

            if(vegName.includes("Carrot")){
               cy.wrap($el).find("button").click()
            }
        })
        //take Screenshot
        cy.screenshot("Greenkart Homepage")
        cy.get('.brand').should("have.text","GREENKART")
    })
    it("Testcase02",()=>{
        cy.wait(2000)
        cy.get('.cart-icon img').click({force:true})
        cy.wait(1000)
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.wait(1000)
        cy.contains('Place').click()
        cy.wait(1000)
        //Dropdown Select
        cy.get('select').select('Albania').should('have.value','Albania')
        cy.wait(1000)
        cy.get('.chkAgree').click()
        cy.wait(1000)
        cy.get('button').click()
    })
}) 