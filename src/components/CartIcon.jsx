// src/components/CartIcon.jsx
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import React from 'react';

const CartIcon = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart" className="relative inline-flex items-center">
      <span className="text-pink-700 text-2xl hover:text-pink-900 transition">🛒</span>
      {cart.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-md">
          {cart.length}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
