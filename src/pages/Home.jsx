import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 flex items-center justify-center px-4 py-12">
      <div className="text-center max-w-2xl bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-rose-100">
        <h1 className="text-5xl font-extrabold text-pink-700 mb-4 leading-tight drop-shadow">
          Welcome to{' '}
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-800 drop-shadow-sm"
            style={{ fontFamily: "'Great Vibes', cursive", fontSize: '3.5rem' }}
          >
            KomiKart
          </span>
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Where every giggle begins — shop gentle, joyful baby goodies 💫👶
        </p>
        <Link
          to="/products"
          className="inline-block bg-pink-600 hover:bg-pink-400 text-white px-6 py-3 rounded-full text-lg shadow-md transition"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Home;