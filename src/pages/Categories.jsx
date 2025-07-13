import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch categories on mount
    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    // Fetch products of selected category
    useEffect(() => {
        if (selectedCategory) {
            setLoading(true);
            fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
                .then(res => res.json())
                .then(data => {
                    setProducts(data.products);
                    setLoading(false);
                })
                .catch(err => {
                    console.error('Error fetching category products:', err);
                    setLoading(false);
                });
        }
    }, [selectedCategory]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 px-4 py-12">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-pink-700 mb-8 drop-shadow">Browse by Category</h2>

                <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map(cat => (
                        <Link key={cat.slug} to={`/category/${cat.slug}`}>
                            <div className="category-card">
                                <h3>{cat.name}</h3>
                            </div>
                        </Link>
                    ))}

                </div>

                <div className="bg-white/70 backdrop-blur-lg rounded-xl p-6 shadow border border-rose-100">
                    {loading ? (
                        <p className="text-center text-pink-500 font-medium">Loading products...</p>
                    ) : selectedCategory && products.length === 0 ? (
                        <p className="text-center text-rose-500 font-medium">No products found.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white border border-rose-100 rounded-xl shadow p-4 hover:shadow-pink-200 transition"
                                >
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                        className="w-full h-40 object-cover rounded-lg mb-3"
                                    />
                                    <h3 className="text-lg font-semibold text-pink-700">{product.title}</h3>
                                    <p className="text-sm text-gray-600 mb-2">₹{product.price}</p>
                                    <Link
                                        to={`/product/${product.id}`}
                                        className="inline-block text-sm bg-pink-600 hover:bg-pink-500 text-white py-1 px-3 rounded-full"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Categories;
