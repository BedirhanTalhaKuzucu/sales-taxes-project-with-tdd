import React, { useState } from "react";
import ProductsForm from "./components/ProductsForm/ProductsForm";
import ReceiptDetails from "./components/ReceiptDetails/ReceiptDetails";



const App = () => {
  const [productList, setproductList] = useState()
  const [listOpen, setlistOpen] = useState(false)
 
  return (
      <div className="container-lg text-center">
        <div className ="row">
          <ProductsForm setproductList = {setproductList} setlistOpen ={setlistOpen} />
          <ReceiptDetails productList = {productList} listOpen ={listOpen}  />
        </div>
      </div>
  );
};

export default App;
