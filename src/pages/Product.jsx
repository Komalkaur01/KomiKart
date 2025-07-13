import React, { useState, useEffect } from 'react';
import ProductGrid from '../components/ProductGrid';
import ProductList from '../components/ProductList';

const Products = () => {
  const [view, setView] = useState('grid');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortOption, setSortOption] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=152')
      .then(res => res.json())
      .then(data => {
        const formatted = data.products.map(p => ({
          id: p.id,
          name: p.title,
          price: p.price,
          image: p.thumbnail,
        }));
        setProducts([
          ...formatted,
          {
            id: 101,
            name: 'Pink Booties',
            price: 1499,
            image: 'https://cdn.pixabay.com/photo/2017/02/08/02/56/booties-2047596_1280.jpg',
          },
          {
            id: 102,
            name: 'Bunny Ears',
            price: 799,
            image: 'https://plus.unsplash.com/premium_photo-1676376217517-be5e4116cdb5?q=80&w=1170&auto=format&fit=crop',
          },
          {
            id: 103,
            name: 'Rose Tees',
            price: 1299,
            image: 'https://cdn.pixabay.com/photo/2020/11/16/17/31/baby-clothes-5749670_1280.jpg',
          },
        ]);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch products:', err);
        setLoading(false);
      });
  }, []);

  // Filtered → Sorted → Paginated products
  const filteredProducts = products.filter(
    p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      p.price >= priceRange[0] &&
      p.price <= priceRange[1]
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'low-to-high') return a.price - b.price;
    if (sortOption === 'high-to-low') return b.price - a.price;
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-pink-700 drop-shadow">All Products</h2>
          <div className="flex gap-1">
            <button
              className={`px-4 py-2 border rounded-l-full transition-all shadow-sm font-semibold ${
                view === 'grid'
                  ? 'bg-pink-600 text-white'
                  : 'bg-white text-pink-600 border-pink-300'
              }`}
              onClick={() => setView('grid')}
            >
              Grid
            </button>
            <button
              className={`px-4 py-2 border rounded-r-full transition-all shadow-sm font-semibold ${
                view === 'list'
                  ? 'bg-pink-600 text-white'
                  : 'bg-white text-pink-600 border-pink-300'
              }`}
              onClick={() => setView('list')}
            >
              List
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={e => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="border px-4 py-2 rounded shadow-sm"
          />

          <div className="flex items-center gap-2">
            <span>₹{priceRange[0]}</span>
            <input
              type="range"
              min={0}
              max={1500}
              value={priceRange[1]}
              onChange={e => {
                setPriceRange([0, parseInt(e.target.value)]);
                setCurrentPage(1);
              }}
              className="accent-pink-500"
            />
            <span>₹{priceRange[1]}</span>
          </div>

          <select
            onChange={e => setSortOption(e.target.value)}
            className="border px-3 py-2 rounded shadow-sm"
          >
            <option value="default">Sort</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>

        {/* Product List or Grid */}
        <div className="rounded-xl bg-white/70 backdrop-blur-lg p-6 shadow-lg border border-rose-100">
          {loading ? (
            <p className="text-center text-rose-500 font-medium">Loading</p>
          ) : sortedProducts.length === 0 ? (
            <p className="text-center text-rose-400">No products match your filters.</p>
          ) : view === 'grid' ? (
            <ProductGrid products={paginatedProducts} />
          ) : (
            <ProductList products={paginatedProducts} />
          )}
        </div>

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center mt-6 gap-2 flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === i + 1
                    ? 'bg-pink-600 text-white'
                    : 'bg-white text-pink-600 border-pink-300'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
