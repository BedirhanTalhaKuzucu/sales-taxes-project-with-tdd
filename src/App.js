import './App.css';
import ProductsForm from './components/ProductsForm/ProductsForm';
import ReceiptDetails from './components/ReceiptDetails/ReceiptDetails';
import React, { useState } from "react";


function App() {
  const [productList, setproductList] = useState()
  const [listOpen, setlistOpen] = useState(false)

  return (
    <div className="App">
      <ProductsForm setproductList = {setproductList} setlistOpen ={setlistOpen} />
      <ReceiptDetails productList = {productList} listOpen ={listOpen}  />
    </div>
  );
}

export default App;
