// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white/70 backdrop-blur-lg border border-rose-100 rounded-2xl shadow-lg p-4 hover:shadow-pink-200 transition-all">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h3 className="text-xl font-semibold text-pink-700 mb-1">{product.name}</h3>
      <p className="text-gray-600 mb-2">₹{product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="inline-block bg-pink-600 hover:bg-pink-400 text-white px-4 py-2 rounded-full text-sm font-medium shadow"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
