import React, { useState, useEffect } from "react";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log("data", data);
      setProduct(data);
    };
    fetchProduct();
  }, []);

  return (
    <div className="productsWrapper">
      {product.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="product img" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn"> Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
