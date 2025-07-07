// src/pages/Products.jsx
import { useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import ProductList from '../components/ProductList';
import React from 'react';

const sampleProducts = [
  { id: 1, name: 'Pink Booties', price: 1499, image: 'https://cdn.pixabay.com/photo/2017/02/08/02/56/booties-2047596_1280.jpg' },
  { id: 2, name: 'Bunny Ears', price: 799, image: 'https://plus.unsplash.com/premium_photo-1676376217517-be5e4116cdb5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Rose Tees', price: 1299, image: 'https://cdn.pixabay.com/photo/2020/11/16/17/31/baby-clothes-5749670_1280.jpg' },
];

const Products = () => {
  const [view, setView] = useState('grid');

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-pink-700 drop-shadow">All Products</h2>
          <div className="flex gap-1">
            <button
              className={`px-4 py-2 border rounded-l-full transition-all shadow-sm font-semibold ${
                view === 'grid'
                  ? 'bg-pink-600 text-white'
                  : 'bg-white text-pink-600 border-pink-300'
              }`}
              onClick={() => setView('grid')}
            >
              Grid
            </button>
            <button
              className={`px-4 py-2 border rounded-r-full transition-all shadow-sm font-semibold ${
                view === 'list'
                  ? 'bg-pink-600 text-white'
                  : 'bg-white text-pink-600 border-pink-300'
              }`}
              onClick={() => setView('list')}
            >
              List
            </button>
          </div>
        </div>

        <div className="rounded-xl bg-white/70 backdrop-blur-lg p-6 shadow-lg border border-rose-100">
          {view === 'grid' ? (
            <ProductGrid products={sampleProducts} />
          ) : (
            <ProductList products={sampleProducts} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;