// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white/60 backdrop-blur-lg border-t border-pink-100 mt-16 py-8 px-4 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div>
          <h3
            className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-800 drop-shadow"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            KomiKart
          </h3>
          <p className="text-sm text-rose-500">
            © {new Date().getFullYear()} KomiKart. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap gap-6 justify-center md:justify-end">
          <Link to="/" className="text-pink-600 hover:text-pink-800 font-medium transition">
            Home
          </Link>
          <Link to="/products" className="text-pink-600 hover:text-pink-800 font-medium transition">
            Shop
          </Link>
          <Link to="/cart" className="text-pink-600 hover:text-pink-800 font-medium transition">
            Cart
          </Link>
          <Link to="/checkout" className="text-pink-600 hover:text-pink-800 font-medium transition">
            Checkout
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
