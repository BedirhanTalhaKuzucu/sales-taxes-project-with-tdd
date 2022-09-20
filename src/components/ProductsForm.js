import React, { useState } from "react";

function ProductsForm() {
  const [productCount, setproductCount] = useState([1]);

  const addProduct = (e) => {
    setproductCount([...productCount, productCount[productCount.length - 1] + 1 ]);
    console.log(productCount);
  };

  return (
    <div className=" container bg-warning table-responsive ">
      <form>
        <h2> Add Product </h2>
        <div>
          <table>
            <tbody>
              {productCount.map((item, key) => (
                <tr key={key}>
                  <th scope="row" className="col-md-1 ">
                    <div className="input-group input-group-sm mb-3">
                      <small> Product </small>
                    </div>
                  </th>
                  <td className="col-md-3 ">
                    <div className="input-group input-group-sm mb-3">
                      <span className="input-group-text" id="inputGroup-sizing">
                        Product Name
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        name="productname"
                        data-test="product-form"
                        required
                      />
                    </div>
                  </td>

                  <td className="col-md-2">
                    <div className="input-group input-group-sm mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-sm">
                        Quantity
                      </span>
                      <input
                        type="number"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        name="quantity"
                        data-test="product-form"
                        required
                      />
                    </div>
                  </td>

                  <td className="col-md-2">
                    <div className="input-group input-group-sm mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-sm">
                        Type of Product
                      </span>
                      <select
                        className="form-control"
                        name="productType"
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
                    <div className="input-group input-group-sm mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-sm">
                        Purchasing Type
                      </span>
                      <select
                        name="buyingType"
                        className="form-control"
                        data-test="product-form"
                        required
                      >
                        <option value="not Import" selected>
                          {" "}
                          not Import{" "}
                        </option>
                        <option value="import"> Import </option>
                      </select>
                    </div>
                  </td>

                  <td className="col-md-2">
                    <div className="input-group input-group-sm mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-sm">
                        Price
                      </span>
                      <input
                        type="number"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        name="productPrice"
                        data-test="product-form"
                        required
                      />
                    </div>
                  </td>
                  {/* <td  onClick={deleteProduct} >
                    x
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button type="submit" data-testid="print-button">
          Print Receipt
        </button>
      </form>
      <button onClick={ (e) =>  addProduct(e)} data-testid="addProduct-button" >ADD Product</button>
    </div>
  );
}

export default ProductsForm;
