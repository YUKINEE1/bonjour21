import logo from './logo.svg';
import './App.css';

import React from "react";
import ProductList from "./productlist";
import CreateProduct from "./createproduct";

const App = () => {
  return (
    <div>
      <h1>Gestion des Produits</h1>
      <CreateProduct />
      <ProductList />
    </div>
  );
};

export default App;
