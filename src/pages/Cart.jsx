// src/pages/Cart.jsx
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl border border-rose-100 rounded-3xl shadow-2xl p-8">
        <h2 className="text-4xl font-bold text-pink-700 mb-6 drop-shadow">Your Cart 🛍️</h2>

        {cart.length === 0 ? (
          <p className="text-lg text-gray-700">
            Your cart is empty.{' '}
            <Link to="/products" className="text-pink-600 underline hover:text-pink-700">
              Shop Now
            </Link>
          </p>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b pb-4 gap-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 rounded object-cover shadow-md"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-pink-700">{item.name}</h3>
                      <p className="text-sm text-gray-600">₹{item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="text-right mt-8">
              <p className="text-lg font-bold mb-4 text-pink-800">Total: ₹{total}</p>
              <Link
                to="/checkout"
                className="inline-block bg-pink-600 hover:bg-pink-400 text-white px-6 py-3 rounded-full text-lg shadow-md transition"
              >
                Proceed to Checkout 💳
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
