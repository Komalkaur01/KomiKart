import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/category/${category}`)
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
        console.error('Failed to load category products:', err);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-pink-700 drop-shadow mb-6 capitalize text-center">
          {category.replace('-', ' ')}
        </h2>

        <div className="rounded-xl bg-white/70 backdrop-blur-lg p-6 shadow-lg border border-rose-100">
          {loading ? (
            <p className="text-center text-pink-500 font-medium">Loading products...</p>
          ) : products.length === 0 ? (
            <p className="text-center text-gray-500">No products found in this category.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
