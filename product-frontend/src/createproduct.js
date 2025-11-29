import React, { useState } from "react";
import { createProduct } from "./productservice";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProduct = { name, price: parseFloat(price) };
      await createProduct(newProduct);
      setMessage("Produit créé avec succès !");
      setName("");
      setPrice("");
    } catch (err) {
      setMessage("Erreur lors de la création du produit");
    }
  };

  return (
    <div>
      <h2>Créer un Produit</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom :</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Prix :</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Créer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateProduct;