import React from "react";

// ProductCard component (functional) - accepts title, price, discount
function ProductCard({ title, price, discount }) {
  const finalPrice = price - discount;

  return (
    <div className="card" style={{ width: "300px", marginBottom: "12px" }}>
      <h2>{title}</h2>
      <p>Original Price: ₹{price}</p>
      <p>Discount: ₹{discount}</p>
      <h3>Final Price: ₹{finalPrice}</h3>
    </div>
  );
}

// Page to show two product cards - parent passes props
export default function Q1_ProductCard() {
  return (
    <div>
      <h2>Q1 — ProductCard</h2>
      <ProductCard title="Wireless Headphones" price={2000} discount={300} />
      <ProductCard title="Smart Watch" price={3500} discount={500} />
    </div>
  );
}
