import React, { useState, useEffect } from "react";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log("data", data);
    };
    fetchProduct();
  }, []);

  return <div>Product</div>;
};

export default Product;
