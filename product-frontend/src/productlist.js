import React, { useEffect, useState } from "react";
import { fetchAllProducts } from "./productservice";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchAllProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    loadProducts();
  }, []);

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div>
      <h1>Liste des Produits</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong>: {product.price} €
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;