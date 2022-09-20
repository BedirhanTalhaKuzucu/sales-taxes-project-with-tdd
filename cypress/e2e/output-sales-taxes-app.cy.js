describe("Are taxes calculated correctly?", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000")
    })
  
  
    it(" => input1", () => {
      for(let n = 0; n < 2; n ++){
        cy.get("[data-testid='addProduct-button']").click();
      }
  
      //input for test 1
      let inputforTest1 = { 
        productNames : ["book", "musicCd", "chocolata bar"], 
        amount : [1, 1, 1],
        typeOfProduct : ["book", "other", "food"],
        purchasingType : ["not Import", "not Import", "not Import"],
        price : [12.49, 14.99, 0.85], 
        expectPrice : [12.49, 16.49, 0.85],
        totalTax : 1.50,
        totalPrice : 29.83
      }
  
      //for index value
      let [a,b,c,d,e ]= [0,0,0,0,0]
  
      cy.get("[data-test='product-form']").each(($item, index) => {
        
        if ($item.attr('name') === "productname") {
          cy.wrap($item).type(inputforTest1.productNames[a])
          a++
        }else if ($item.attr('name') === "quantity" ){
          cy.wrap($item).type(inputforTest1.amount[b])
          b++
        }else if ($item.attr('name') === "productType" ){
          cy.wrap($item).select(inputforTest1.typeOfProduct[c])
          c++
        }else if ($item.attr('name') === "buyingType" ){
          cy.wrap($item).select(inputforTest1.purchasingType[d])
          d++
        }else if ($item.attr('name') === "productPrice" ){
          cy.wrap($item).type(inputforTest1.price[e])
          e++ };
      })
  
      cy.get("[data-testid='print-button']").click();
  
      cy.get("[data-test='product-totalPrice']").each(($el, index) => {
        expect(Number($el.text())).to.be.eq(inputforTest1.expectPrice[index])
      })
  
      cy.get("[data-testid='totalPrice']").then(($el) => {
        expect(Number($el.text())).to.be.eq(inputforTest1.totalPrice)
      })
      cy.get("[data-testid='totalTax']").then(($el) => {
        expect(Number($el.text())).to.be.eq(inputforTest1.totalTax)
      })
  
    })
  
    it(" => input2", () => {
      for(let n = 0; n < 1; n ++){
        cy.get("[data-testid='addProduct-button']").click();
      }
  
      //input for test 2
      let inputforTest2 = { 
        productNames : ["box of chocolate", "bottle of parfume"], 
        amount : [1, 1 ],
        typeOfProduct : ["food", "other"],
        purchasingType : ["import", "import"],
        price : [10.00, 47.50], 
        expectPrice : [10.50, 54.65],
        totalTax : 7.65,
        totalPrice : 65.15
      }
  
      //for index value
      let [a,b,c,d,e ]= [0,0,0,0,0]
  
      cy.get("[data-test='product-form']").each(($item, index) => {
        
        if ($item.attr('name') === "productname") {
          cy.wrap($item).type(inputforTest2.productNames[a])
          a++
        }else if ($item.attr('name') === "quantity" ){
          cy.wrap($item).type(inputforTest2.amount[b])
          b++
        }else if ($item.attr('name') === "productType" ){
          cy.wrap($item).select(inputforTest2.typeOfProduct[c])
          c++
        }else if ($item.attr('name') === "buyingType" ){
          cy.wrap($item).select(inputforTest2.purchasingType[d])
          d++
        }else if ($item.attr('name') === "productPrice" ){
          cy.wrap($item).type(inputforTest2.price[e])
          e++ };
      })
  
      cy.get("[data-testid='print-button']").click();
  
      cy.get("[data-test='product-totalPrice']").each(($el, index) => {
        expect(Number($el.text())).to.be.eq(inputforTest2.expectPrice[index])
      })
  
      cy.get("[data-testid='totalPrice']").then(($el) => {
        expect(Number($el.text())).to.be.eq(inputforTest2.totalPrice)
      })
      cy.get("[data-testid='totalTax']").then(($el) => {
        expect(Number($el.text())).to.be.eq(inputforTest2.totalTax)
      })
  
    })
  
    it(" => input 3", () => {
      for(let n = 0; n < 3; n ++){
        cy.get("[data-testid='addProduct-button']").click();
      }
  
      //input for test 2
      let inputforTest3 = { 
        productNames : ["bottle of parfume import", "bottle of parfume ", "packet of headeche pills", "box of chocolate" ], 
        amount : [1, 1, 1, 1 ],
        typeOfProduct : ["other", "other", "medical product", "food"],
        purchasingType : ["import", "not Import", "not Import", "import"],
        price : [27.99, 18.99, 9.75, 11.25], 
        expectPrice : [32.19, 20.89, 9.75, 11.85],
        totalTax : 6.70,
        totalPrice : 74.68
      }
  
      //for index value
      let [a,b,c,d,e ]= [0,0,0,0,0]
  
      cy.get("[data-test='product-form']").each(($item, index) => {
        
        if ($item.attr('name') === "productname") {
          cy.wrap($item).type(inputforTest3.productNames[a])
          a++
        }else if ($item.attr('name') === "quantity" ){
          cy.wrap($item).type(inputforTest3.amount[b])
          b++
        }else if ($item.attr('name') === "productType" ){
          cy.wrap($item).select(inputforTest3.typeOfProduct[c])
          c++
        }else if ($item.attr('name') === "buyingType" ){
          cy.wrap($item).select(inputforTest3.purchasingType[d])
          d++
        }else if ($item.attr('name') === "productPrice" ){
          cy.wrap($item).type(inputforTest3.price[e])
          e++ };
      })
  
      cy.get("[data-testid='print-button']").click();
  
      cy.get("[data-test='product-totalPrice']").each(($el, index) => {
        expect(Number($el.text())).to.be.eq(inputforTest3.expectPrice[index])
      })
  
      cy.get("[data-testid='totalPrice']").then(($el) => {
        expect(Number($el.text())).to.be.eq(inputforTest3.totalPrice)
      })
      cy.get("[data-testid='totalTax']").then(($el) => {
        expect(Number($el.text())).to.be.eq(inputforTest3.totalTax)
      })
  
    })
  
})
    