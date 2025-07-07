// src/pages/ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const sampleProducts = [
  {
    id: 1, name: 'Pink Booties', price: 1499, image: 'https://cdn.pixabay.com/photo/2017/02/08/02/56/booties-2047596_1280.jpg',
    desc: "Keep tiny toes warm and happy with these hand-knit blush booties. Soft, cozy, and sweet enough to melt hearts 💞"
  },
  {
    id: 2, name: 'Bunny Ears', price: 799, image: 'https://plus.unsplash.com/premium_photo-1676376217517-be5e4116cdb5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: "Perfect for playful days and baby photo shoots! These fuzzy pastel bunny ears bring out the cuteness in every little hop 🐇🌸"
,
  },
  {
    id: 3, name: 'Rose Tees', price: 1299, image: 'https://cdn.pixabay.com/photo/2020/11/16/17/31/baby-clothes-5749670_1280.jpg' ,
    desc: "A dreamy pastel outfit featuring a rose-pink tee and matching hat. Lightweight, breathable, and stitched for smiles 💗👶"
,
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = sampleProducts.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <p className="p-4 text-center text-red-600">Product not found</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-lg border border-rose-100 rounded-3xl shadow-xl p-8 flex flex-col md:flex-row gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-md"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-pink-700 mb-2 drop-shadow">{product.name}</h2>
            <p className="text-lg text-gray-700 mb-4">₹{product.price}</p>
            <p className="text-sm text-gray-600 mb-6">{product.desc}</p>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="bg-pink-600 hover:bg-pink-400 text-white py-2 px-6 rounded-full transition shadow"
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;