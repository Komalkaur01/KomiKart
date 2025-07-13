import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const sampleProducts = [
  {
    id: 101,
    name: 'Pink Booties',
    price: 1499,
    image: 'https://cdn.pixabay.com/photo/2017/02/08/02/56/booties-2047596_1280.jpg',
    desc: "Keep tiny toes warm and happy with these hand-knit blush booties. Soft, cozy, and sweet enough to melt hearts 💞",
  },
  {
    id: 102,
    name: 'Bunny Ears',
    price: 799,
    image: 'https://plus.unsplash.com/premium_photo-1676376217517-be5e4116cdb5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: "Perfect for playful days and baby photo shoots! These fuzzy pastel bunny ears bring out the cuteness in every little hop 🐇🌸",
  },
  {
    id: 103,
    name: 'Rose Tees',
    price: 1299,
    image: 'https://cdn.pixabay.com/photo/2020/11/16/17/31/baby-clothes-5749670_1280.jpg',
    desc: "A dreamy pastel outfit featuring a rose-pink tee and matching hat. Lightweight, breathable, and stitched for smiles 💗👶",
  },
  
];

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const prodId = parseInt(id);

    if (prodId >= 101) {
      // Custom added product
      const localProduct = sampleProducts.find(p => p.id === prodId);
      setProduct(localProduct);
      setLoading(false);
    } else {
      // Fetch from API
      fetch(`https://dummyjson.com/products/${prodId}`)
      .then(res => res.json())
      .then(data => {
        setProduct({
          id: data.id,
          name: data.title,
          price: data.price,
          image: data.thumbnail,
          desc: data.description,
          brand: data.brand,
          category: data.category,
          rating: data.rating,
          sku: data.sku,
          weight: data.weight,
          dimensions: data.dimensions,
          stock: data.stock,
          status: data.availabilityStatus,
          warranty: data.warrantyInformation,
          shipping: data.shippingInformation,
          returnPolicy: data.returnPolicy,
          minimumOrderQuantity: data.minimumOrderQuantity,
          reviews: data.reviews,
        });
        setLoading(false);
        })
        .catch(err => {
          console.error('Product not found:', err);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <p className="p-4 text-center text-pink-500">Loading product...</p>;
  }

  if (!product) {
    return <p className="p-4 text-center text-red-600">Product not found</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 px-4 py-12">
  <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-lg border border-rose-100 rounded-3xl shadow-xl p-8 flex flex-col md:flex-row gap-8">
    <img
      src={product.image}
      alt={product.name}
      className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-md"
    />
    <div className="flex flex-col justify-between w-full">
      <div>
        <h2 className="text-3xl font-bold text-pink-700 mb-2 drop-shadow">{product.name}</h2>
        <p className="text-lg text-gray-700 mb-2">₹{product.price}</p>

        {product.brand && (
          <p className="text-sm text-gray-600 mb-1">
            <strong>Brand:</strong> {product.brand}
          </p>
        )}
        {product.category && (
          <p className="text-sm text-gray-600 mb-1">
            <strong>Category:</strong> {product.category}
          </p>
        )}
        {product.rating && (
          <p className="text-sm text-yellow-600 mb-1">
            <strong>Rating:</strong> ⭐ {product.rating}/5
          </p>
        )}
        {product.sku && (
          <p className="text-sm text-gray-600 mb-1">
            <strong>SKU:</strong> {product.sku}
          </p>
        )}
        {product.weight && (
          <p className="text-sm text-gray-600 mb-1">
            <strong>Weight:</strong> {product.weight} g
          </p>
        )}
        {product.dimensions && (
          <p className="text-sm text-gray-600 mb-1">
            <strong>Dimensions:</strong> {product.dimensions.width} × {product.dimensions.height} × {product.dimensions.depth} cm
          </p>
        )}
        {product.stock !== undefined && (
          <p className="text-sm text-gray-600 mb-1">
            <strong>Stock:</strong> {product.stock}
          </p>
        )}
        {product.status && (
          <p className={`text-sm font-medium mb-1 ${product.status === 'Low Stock' ? 'text-red-500' : 'text-green-600'}`}>
            <strong>Status:</strong> {product.status}
          </p>
        )}
        {product.warranty && (
          <p className="text-sm text-gray-600 mb-1">
            <strong>Warranty:</strong> {product.warranty}
          </p>
        )}
        {product.shipping && (
          <p className="text-sm text-gray-600 mb-1">
            <strong>Shipping:</strong> {product.shipping}
          </p>
        )}
        {product.returnPolicy && (
          <p className="text-sm text-gray-600 mb-1">
            <strong>Return Policy:</strong> {product.returnPolicy}
          </p>
        )}
        {product.minimumOrderQuantity && (
          <p className="text-sm text-gray-600 mb-4">
            <strong>Minimum Order Quantity:</strong> {product.minimumOrderQuantity}
          </p>
        )}

        {/* Description */}
        <p className="text-sm text-gray-700 mb-6">
          {product.desc || product.description}
        </p>
      </div>

      <button
        onClick={() => addToCart(product)}
        className="bg-pink-600 hover:bg-pink-400 text-white py-2 px-6 rounded-full transition shadow"
      >
        Add to Cart 🛒
      </button>
    </div>
  </div>

  {/* Optional: Reviews Section */}
  {product.reviews && product.reviews.length > 0 && (
    <div className="max-w-4xl mx-auto mt-10 bg-white/70 backdrop-blur-lg border border-rose-100 rounded-2xl shadow-md p-6">
      <h3 className="text-xl font-semibold text-pink-700 mb-4">Customer Reviews</h3>
      <ul className="space-y-4">
        {product.reviews.map((review, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow border border-rose-100">
            <p className="text-sm text-gray-700 mb-1">⭐ {review.rating}/5</p>
            <p className="text-gray-800 mb-1">{review.comment}</p>
            <p className="text-xs text-gray-500">
              — {review.reviewerName} ({new Date(review.date).toLocaleDateString()})
            </p>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>

  );
};

export default ProductDetails;
