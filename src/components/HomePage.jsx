import { useState } from "react";
import product from "../assets/products";
import ProductCard from "./ProductCard";

const HomePage = () => {
  const [products] = useState(product);
  return (
    <div className="product-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default HomePage;
