// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Product';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';
import Categories from './pages/Categories';
import CategoryPage from './pages/CategoryPage';
import CategoryProducts from './pages/CategoryProducts';

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout>
              <Home />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Layout>
              <Home />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/products"
        element={
          <PrivateRoute>
            <Layout>
              <Products/>
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/product/:id"
        element={
          <PrivateRoute>
            <Layout>
              <ProductDetails />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Layout>
              <Cart />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/checkout"
        element={
          <PrivateRoute>
            <Layout>
              <Checkout />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route path="/categories" element={<Categories />} />
      <Route path="/category/:category" element={<CategoryPage />} />
      <Route path="/category/:slug" element={<CategoryProducts />} />


    </Routes>
  );
}

export default App;
