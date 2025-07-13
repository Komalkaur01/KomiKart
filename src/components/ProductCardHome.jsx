// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCardHome = ({ product }) => (
  <div className="block bg-white/70 border border-rose-100 rounded-xl shadow hover:shadow-md transition">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-xl" />
    <div className="p-4">
      <h3 className="text-pink-700 font-semibold text-lg truncate">{product.name}</h3>
      <p className="text-gray-700 font-medium mt-2">₹{product.price}</p>
    </div>
  </div>
);

export default ProductCardHome;
