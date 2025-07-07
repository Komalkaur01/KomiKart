// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

const Header = () => {
  return (
    <header className="bg-white/70 backdrop-blur border-b border-pink-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-800 drop-shadow" style={{ fontFamily: "'Great Vibes', cursive" }}>
          KomiKart
        </Link>

        <nav className="flex gap-6 items-center">
          <Link to="/" className="text-pink-700 hover:text-pink-900 transition font-medium">
            Home
          </Link>
          <Link to="/products" className="text-pink-700 hover:text-pink-900 transition font-medium">
            Products
          </Link>
          <CartIcon />
        </nav>
      </div>
    </header>
  );
};

export default Header;
