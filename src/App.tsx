import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { Product } from "./components/Product";
// import { products } from "./data/products";
import { IProduct } from "./models";

function App() {
  const [products, setProduct] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchProducts() {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products/?limit=5"
      );
      setProduct(response.data);
      setLoading(false);
    } catch (e) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <p className="text-center">Loading...</p>}{" "}
      {error && <p className="text-center text-red">Error</p>}{" "}
      {products.map((products) => (
        <Product product={products} key={products.id} />
      ))}
    </div>
  );
}

export default App;
