import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '/logo.svg'; // adjust path if stored elsewhere

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log({ name, email, password });
    navigate('/'); // redirect after signup
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: 'url(/wp6.jpg)' }}
    >
      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-xl w-full max-w-md border border-pink-200">
        
        {/* SVG Logo */}
        <div className="flex justify-center mb-4">
          <img src={Logo} alt="KomiKart Logo" className="w-16 h-16" />
        </div>

        <h2 className="text-3xl font-bold text-center text-pink-700 mb-6 drop-shadow">
          Join the Cutie Club 💗
        </h2>

        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block text-pink-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-pink-700 font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-pink-700 font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-block bg-pink-600 hover:bg-pink-400 text-white font-semibold py-2 rounded-lg transition shadow"
          >
            Sign Up 🎀
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-rose-500">
          Already have an account?{' '}
          <span
            className="text-pink-600 underline cursor-pointer"
            onClick={() => navigate('/login')}
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
