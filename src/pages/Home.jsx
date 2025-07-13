import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCardHome from '../components/ProductCardHome';

const carouselImages = [
  '/banner1.jpg',
  '/banner2.jpg',
  '/banner3.jpg',
  '/banner4.jpg',
  '/banner5.jpg',
];

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [currentSlide, setCurrentSlide] = useState(0);
  const categoryRef = useRef(null);

  // Auto-slide hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Fetch categories and featured products
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error('Failed to fetch categories', err));

    fetch('https://dummyjson.com/products?limit=20')
      .then((res) => res.json())
      .then((data) => setFeaturedProducts(data.products))
      .catch((err) => console.error('Failed to fetch products', err));
  }, []);

  // Auto-scroll categories carousel
  useEffect(() => {
    const container = categoryRef.current;
    if (!container) return;

    const scrollAmount = 1;
    const interval = setInterval(() => {
      container.scrollLeft += scrollAmount;
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollLeft = 0; // Reset to start when reaching end
      }
    }, 20); // smooth speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Hero Carousel */}
      <div className="w-full overflow-hidden h-96 mb-10 relative">
        {carouselImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Slide ${idx}`}
            className={`absolute top-0 left-0 w-full h-96 object-cover transition-opacity duration-1000 ease-in-out ${currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          />
        ))}
      </div>

      {/* Welcome Text */}
      <div className="text-center max-w-3xl bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-rose-100 mx-auto mb-12">
        <h1 className="text-5xl font-extrabold text-pink-700 mb-4 drop-shadow">
          Welcome to{' '}
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-800"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            KomiKart
          </span>
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Discover quality products curated with care — shop smart, live better.
        </p>

        <Link
          to="/products"
          className="bg-pink-600 hover:bg-pink-400 text-white px-6 py-3 rounded-full text-lg shadow-md transition"
        >
          Shop Now
        </Link>
      </div>

      {/* Featured Products */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <h2 className="text-3xl font-bold text-pink-700 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.slice(0, visibleCount).map((product) => (
            <ProductCardHome
              key={product.id}
              product={{
                id: product.id,
                name: product.title,
                price: product.price,
                image: product.thumbnail,
              }}
            />
          ))}
        </div>
        {visibleCount < featuredProducts.length && (
          <div className="text-center mt-6">
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="bg-pink-600 hover:bg-pink-500 text-white px-6 py-2 rounded-full shadow transition"
            >
              Show More
            </button>
          </div>
        )}
      </div>

      {/* Shop by Category Auto Carousel */}
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-pink-700 mb-6 text-center">Shop by Category</h2>
        <div
          ref={categoryRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide py-2"
          style={{ scrollBehavior: 'smooth' }}
        >
          {categories.map((category, idx) => {
            const slug = typeof category === 'string' ? category : category.slug;
            const displayName = slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

            return (
              <Link
                to={`/category/${slug}`}
                key={slug + idx}
                className="min-w-[140px] bg-white rounded-2xl border border-rose-100 shadow-md hover:shadow-xl transition-all overflow-hidden text-center flex-shrink-0"
              >
                <div className="p-4 font-semibold text-pink-600 text-sm capitalize">{displayName}</div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white/80 py-12">
        <h3 className="text-3xl font-bold text-center text-pink-700 mb-10">What Our Customers Say</h3>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-4 shadow rounded-xl max-w-xs">
            <p className="italic">
              "Top-notch quality and quick delivery. I'm impressed with the variety and service!"
            </p>
            <p className="text-sm text-right text-pink-600 mt-2">— Anjali S.</p>
          </div>
          <div className="bg-white p-4 shadow rounded-xl max-w-xs">
            <p className="italic">
              "Great deals and amazing support. Definitely coming back for more."
            </p>
            <p className="text-sm text-right text-pink-600 mt-2">— Rahul M.</p>
          </div>
          <div className="bg-white p-4 shadow rounded-xl max-w-xs">
            <p className="italic">
              "Loved the product range. Everything arrived just as expected!"
            </p>
            <p className="text-sm text-right text-pink-600 mt-2">— Meera T.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
