describe("form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("the form contains  correct inputs", () => {
    cy.get("[data-test='product-form']").should(($input) => {
       expect($input.filter('input[type="text"]')).to.have.length(1)
       expect($input.filter('input[type="number"]')).to.have.length(2)
       expect($input.filter('select')).to.have.length(2)
    })
    
  })

})