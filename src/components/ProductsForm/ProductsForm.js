import React, { useState, useRef } from "react";

function ProductsForm({setproductList, setlistOpen}) {

  const defaultDetails = [
     {
      id: 1,
      productname :"",
      quantity : "",
      productType :"other",
      productPrice: "",
      buyingType:"not Import",
    }
  ]
  const id = useRef(2);

  const [productDetails, setproductDetails] = useState(defaultDetails)

  const addProduct = () => {
    
    console.log(id.current);
    setproductDetails([ ...productDetails,  {
      id:id.current++,
      productname :"",
      quantity : "",
      productType :"other",
      productPrice: "",
      buyingType:"not Import",
    } ] )
  }

  const deleteProduct = (e) => {
    if (productDetails.length > 1) {
        setproductDetails(Object.values(productDetails).filter((item) => {  return  item.id !== Number(e.target.id) }))
    }else{
        setproductDetails(defaultDetails)
    }    
  } 


  const handleSubmit = (e) => {
    e.preventDefault()

    productDetails.map((item) => {
      
      let [basicSalesTax, importTax] = [0, 0]

      //for basic Sales Tax
      if (item.productType === "book" || item.productType === "food" || item.productType === "medical product" ) {
        basicSalesTax = 0;
      }else {
        basicSalesTax = Number(item.productPrice) / 10
        basicSalesTax =Number((Math.ceil(basicSalesTax * 20) / 20).toFixed(2))
      };

      //for import Tax
      if (item.buyingType === "import") {
        importTax = Number(item.productPrice)   / 20
        importTax = Number((Math.ceil(importTax * 20) / 20).toFixed(2))
      }else{
        importTax = 0;
      };

      item.totalTax =  Number((Math.ceil( (basicSalesTax + importTax) *20)/20).toFixed(2))
      item.totalPrice = (Number(item.productPrice) + item.totalTax ) * Number(item.quantity)
      item.totalPrice = item.totalPrice.toFixed(2)
    })

    setproductList(productDetails)

    setlistOpen(true)
    setproductDetails(defaultDetails)
  }


  const handleChange = (e) => {
    let index =  productDetails.findIndex(item => item.id === Number(e.target.id))
    let newArray = [...productDetails]
    newArray[index][`${e.target.name}`] = e.target.value
    setproductDetails( newArray )
  
  }

  return (
    <div className=" container bg-warning table-responsive ">
      <form onSubmit={handleSubmit} data-testid="form" >
        <h2> Add Product </h2>
        <div>
          <table >
            <tbody>
              {productDetails.map((item, key) => (
                <tr key={key} >
                  <th scope="row" className="col-md-1 ">
                    <div class="input-group input-group-sm mb-3">
                      <small> Product {key+1} </small>
                    </div>
                  </th>
                  <td className="col-md-3 ">
                    <div class="input-group input-group-sm mb-3">
                      <span class="input-group-text" id="inputGroup-sizing">
                        <label id="prdctname">Product Name</label> 
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-labelledby="prdctname"
                        aria-describedby="inputGroup-sizing-sm"
                        name = "productname"
                        id={item.id}
                        onChange={ (e) => handleChange(e) }
                        value= { item.productname }
                        data-test="product-form"
                        required
                      />
                    </div>
                  </td>

                  <td className="col-md-2">
                    <div class="input-group input-group-sm mb-3">
                      <span class="input-group-text" id="inputGroup-sizing-sm">
                        <label id="amount">Quantity</label> 
                      </span>
                      <input
                        type="number"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-labelledby="amount"
                        aria-describedby="inputGroup-sizing-sm"
                        name = "quantity"
                        id={item.id}
                        onChange={ (e) => handleChange(e)  }
                        value= { item.quantity }
                        data-test="product-form"
                        required
                      />
                    </div>
                  </td>

                  <td className="col-md-2">
                    <div class="input-group input-group-sm mb-3">
                      <span class="input-group-text" id="inputGroup-sizing-sm">
                        Type of Product
                      </span>
                      <select
                        className="form-control"
                        name="productType"
                        id={item.id}
                        onChange={ (e) => handleChange(e)  }
                        data-test="product-form"
                        required
                      >
                        <option value="other" selected>
                          Other
                        </option>
                        <option value="food"> Food </option>
                        <option value="book"> Book </option>
                        <option value="medical product">Medical Product</option>
                      </select>
                    </div>
                  </td>

                  <td className="col-md-2">
                    <div class="input-group input-group-sm mb-3">
                      <span class="input-group-text" id="inputGroup-sizing-sm">
                        Purchasing Type
                      </span>
                      <select
                        name="buyingType"
                        className="form-control"
                        id={item.id}
                        onChange={ (e) => handleChange(e)  }
                        data-test="product-form"
                        required
                      >
                        <option value="not Import" selected > not Import </option>
                        <option value="import"> Import </option>
                      </select>
                    </div>
                  </td>

                  <td className="col-md-2">
                    <div class="input-group input-group-sm mb-3">
                      <span class="input-group-text" id="inputGroup-sizing-sm">
                        <label id="prc" >Price</label> 
                      </span>
                      <input
                        type="number"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-labelledby="prc"
                        aria-describedby="inputGroup-sizing-sm"
                        name = "productPrice"
                        id={item.id}
                        onChange={ (e) => handleChange(e)  }
                        value= { item.productPrice }
                        data-test="product-form"
                        required
                      />
                    </div>
                  </td>
                   <td  >
                    <button type="button" className="btn-close" aria-label="Close" id={item.id}
                      data-testid={`close-button-${item.id}`} onClick={(e) => deleteProduct(e)} ></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button type="submit" data-testid="print-button">Print Receipt</button>
      </form>
      <button onClick={ () =>  addProduct()} data-testid="addProduct-button" >ADD Product</button>
    </div>
  );
}

export default ProductsForm;
