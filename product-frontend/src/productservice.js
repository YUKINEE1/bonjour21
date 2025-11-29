const BASE_URL = "http://localhost:8084/api"; // Changez le port si nécessaire

// Récupérer tous les produits
export const fetchAllProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des produits");
  }
  return response.json();
};

// Récupérer un produit par nom
export const fetchProductByName = async (name) => {
  const response = await fetch(`${BASE_URL}/products/${name}`);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération du produit");
  }
  return response.json();
};

// Ajouter un produit
export const createProduct = async (product) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la création du produit");
  }
  return response.json();
};