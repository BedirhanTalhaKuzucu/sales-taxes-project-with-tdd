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

  it("Is the AddProduct button working correctly?", () => {
    cy.get("[data-testid='addProduct-button']").click();
    cy.get("[data-test='product-form']").should('have.length', 10)

    cy.get("[data-testid='addProduct-button']").click();
    cy.get("[data-test='product-form']").should('have.length', 15)


    for(let n = 0; n < 3; n ++){
      cy.get("[data-testid='addProduct-button']").click();
    }
    cy.get("[data-test='product-form']").should('have.length', 30);

  })

  it("Are the user's inputs correctly printed on the page?", () => {
    for(let n = 0; n < 2; n ++){
      cy.get("[data-testid='addProduct-button']").click();
    }

    // cy.get('input:invalid').should('have.length', 9)
    const controlValueList = []
    cy.get("[data-test='product-form']").each(($item, index) => {
      if ($item.attr('name') === "productname") {
        cy.wrap($item).type(`new product ${index} `)
        controlValueList.push($item.val())
      }else if ($item.attr('name') === "quantity"){
        cy.wrap($item).type(index)
        controlValueList.push($item.val())
      }else if ($item.attr('name') === "productPrice"){
        cy.wrap($item).type(10 + index)
        controlValueList.push($item.val())
      }
      //product type and purchase type have values by default
    })  

  })

  
it("validation of the form", () => {
    for(let n = 0; n < 2; n ++){
      cy.get("[data-testid='addProduct-button']").click();
    }

    cy.get("[data-testid='print-button']").click();
    cy.get('input:invalid').should('have.length', 9)

    cy.get("[data-test='product-form']").each(($item, index) => {
      cy.log( $item.attr('name') )
      if ($item.attr('name') === "productname") {
        cy.wrap($item).type("new product")
      }else if ($item.attr('name') === "quantity"){
        cy.wrap($item).type(1)
      }else if ($item.attr('name') === "productPrice"){
        cy.wrap($item).type(10)
      }
      //product type and purchase type have values by default
    })

    cy.get("[data-testid='print-button']").click();
    //The first product's form will remain invalid, as I will prevent re-rendering the page after form submit.
    cy.get('input:invalid').should('have.length', 3)


  })


})
