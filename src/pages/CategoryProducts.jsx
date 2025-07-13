// src/pages/CategoryProducts.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';

const CategoryProducts = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/category/${slug}`)
      .then(res => res.json())
      .then(data => {
        const formatted = data.products.map(p => ({
          id: p.id,
          name: p.title,
          price: p.price,
          image: p.thumbnail,
        }));
        setProducts(formatted);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch category products:', err);
        setLoading(false);
      });
  }, [slug]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-pink-700 mb-6 capitalize drop-shadow text-center">
          {slug.replace(/-/g, ' ')}
        </h2>
        <div className="rounded-xl bg-white/70 backdrop-blur-lg p-6 shadow-lg border border-rose-100">
          {loading ? (
            <p className="text-center text-rose-500 font-medium">Loading products...</p>
          ) : products.length > 0 ? (
            <ProductGrid products={products} />
          ) : (
            <p className="text-center text-rose-500 font-medium">No products found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
