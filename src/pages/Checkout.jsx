import React from 'react';

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mint to-white p-10">
      <h2 className="text-4xl font-bold text-pink-700 mb-6">Checkout</h2>
      <form className="max-w-xl mx-auto bg-white/80 backdrop-blur rounded-xl shadow-xl p-6 space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
        />
        <input
          type="text"
          placeholder="Shipping Address"
          className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
        />
        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-400 text-white p-3 rounded-lg shadow"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Checkout;
