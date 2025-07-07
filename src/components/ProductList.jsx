// src/components/ProductList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div className="space-y-6">
      {products.map(product => (
        <div
          key={product.id}
          className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white/70 backdrop-blur-lg border border-rose-100 rounded-2xl shadow-lg"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-48 h-40 object-cover rounded-xl shadow"
          />
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-pink-700 mb-1">{product.name}</h3>
            <p className="text-gray-600 mb-2">₹{product.price}</p>
            <Link
              to={`/product/${product.id}`}
              className="inline-block bg-pink-600 hover:bg-pink-400 text-white px-5 py-2 rounded-full text-sm font-medium shadow"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
