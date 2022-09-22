import React , {useState, useEffect} from "react";

function ReceiptDetails({ productList, listOpen }) {
  const [totalPrice, setTotalPrice] = useState()


  useEffect(() => {
    if (productList) {
      let totalTax = 0
      let subTotal = 0
      productList.map((item) => {
      totalTax += item.totalTax
      subTotal += Number(item.totalPrice)
      })
      totalTax = totalTax.toFixed(2)
      subTotal = subTotal.toFixed(2)
      setTotalPrice({totalTax, subTotal})
      
      console.log(totalTax, subTotal)
      console.log(productList);

    }
    
  }, [productList])
  

  return (
    <div class="card" data-testid="receipt-print">
      {listOpen ? (
        <div class="card-body">
          <div class="container mb-5 mt-3">
            <div class="row d-flex align-items-baseline">
              <div class="col-xl-9">
                <p style={{ color: "#7e8d9f;font-size: 20px" }}>
                  Invoice >> <strong>ID: #123-123</strong>
                </p>
              </div>
              <div class="col-xl-3 float-end">
                <a className="btn btn-light text-capitalize border-0" data-mdb-ripple-color="dark" >
                  Print
                </a>
                <a className="btn btn-light text-capitalize" data-mdb-ripple-color="dark">
                  Export
                </a>
              </div>
              <hr />
            </div>

            <div class="container">
              <div class="row">
                <div class="col-xl-8">
                  <ul class="list-unstyled">
                    <li class="text-muted">
                      To: <span style={{ color: "#5d9fc5" }}>Lorem Lorem</span>
                    </li>
                    <li class="text-muted">Street, City</li>
                    <li class="text-muted">State, Country</li>
                    <li class="text-muted">
                      <i class="fas fa-phone"></i> 123-456-789
                    </li>
                  </ul>
                </div>
                <div class="col-xl-4">
                  <p class="text-muted">Invoice</p>
                  <ul class="list-unstyled">
                    <li class="text-muted">
                      <i class="fas fa-circle" style={{ color: "#84B0CA" }}></i>{" "}
                      <span class="fw-bold">ID:</span>#123-456
                    </li>
                    <li class="text-muted">
                      <i class="fas fa-circle" style={{ color: "#84B0CA" }}></i>{" "}
                      <span class="fw-bold">Creation Date: </span>September
                      23,2022
                    </li>
                  </ul>
                </div>
              </div>

              <div class="row my-2 mx-1 justify-content-center">
                <table class="table table-striped table-borderless" data-testid="product-table">
                  <thead
                    style={{ backgroundColor: "#84B0CA" }}
                    class="text-white"
                  >
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Tax</th>
                      <th scope="col">Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList?.map((item, key) => {
                      return (
                        <tr key={key}>
                          <th scope="row"> {key + 1} </th>
                          <td> {item.productname} </td>
                          <td> {item.quantity} </td>
                          <td data-test="product-totalTax" > {item.totalTax} </td>
                          <td data-test="product-totalPrice" > {item.totalPrice} </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div class="row">
                <div class="col-xl-8">
                  <p class="ms-3">
                    Additional notes and payment information
                  </p>
                </div>
                <div class="col-xl-3">
                  <ul class="list-unstyled">
                    <li class="text-muted ms-3" >
                      <span class="text-black me-4"  >SubTotal</span> 
                      $<span data-testid="totalPrice" >{totalPrice?.subTotal}  </span> 
                    </li>
                    <li class="text-muted ms-3 mt-2" >
                      <span class="text-black me-4"  >Total Tax </span>
                      $<span data-testid="totalTax" >{totalPrice?.totalTax}</span> 
                    </li>
                  </ul>
                  <p class="text-black float-start">
                    <span class="text-black me-3"> Total Amount</span>
                    <span style={{ "font-size": "25px" }}>$1221</span>
                  </p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-xl-10">
                  <p>Thank you for your purchase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ReceiptDetails;
