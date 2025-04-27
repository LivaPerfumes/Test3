import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Minus, Plus, ShoppingCart, CreditCard } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<'3ML' | '6ML' | '12ML'>('3ML');
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return <div className="pt-24 text-center">Product not found</div>;
  }

  const images = [
    product.image,
    ...(product.additionalImages || [])
  ];

  const selectedSizeDetails = product.sizes.find(s => s.size === selectedSize);
  const currentPrice = selectedSizeDetails?.price || product.price;

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    addToCart(product, quantity, selectedSize);
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 1000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedSize);
    navigate('/checkout');
  };

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg bg-gray-100 ${
                    selectedImage === index ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="h-full w-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-serif font-bold text-gray-900">{product.name}</h1>
            <p className="mt-4 text-xl font-medium text-gray-900">${currentPrice}</p>
            <p className="mt-4 text-gray-500">{product.description}</p>

            {/* Size Selection */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Select Size</h3>
              <div className="grid grid-cols-3 gap-4">
                {product.sizes.map((sizeOption) => (
                  <button
                    key={sizeOption.size}
                    onClick={() => setSelectedSize(sizeOption.size)}
                    disabled={!sizeOption.inStock}
                    className={`
                      py-3 px-4 rounded-lg text-sm font-medium
                      ${selectedSize === sizeOption.size
                        ? 'bg-purple-600 text-white'
                        : sizeOption.inStock
                        ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }
                    `}
                  >
                    <div className="text-center">
                      <span className="block font-bold">{sizeOption.size}</span>
                      <span className="block mt-1">${sizeOption.price}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Notes */}
            {product.notes && (
              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-900">Fragrance Notes</h3>
                <div className="mt-2 space-y-2">
                  {product.notes.top && (
                    <div>
                      <p className="text-sm font-medium text-gray-700">Top Notes</p>
                      <p className="text-sm text-gray-500">{product.notes.top.join(', ')}</p>
                    </div>
                  )}
                  {product.notes.middle && (
                    <div>
                      <p className="text-sm font-medium text-gray-700">Middle Notes</p>
                      <p className="text-sm text-gray-500">{product.notes.middle.join(', ')}</p>
                    </div>
                  )}
                  {product.notes.base && (
                    <div>
                      <p className="text-sm font-medium text-gray-700">Base Notes</p>
                      <p className="text-sm text-gray-500">{product.notes.base.join(', ')}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
              <div className="mt-2 flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="rounded-md p-2 text-gray-400 hover:text-gray-500"
                >
                  <Minus className="h-5 w-5" />
                </button>
                <span className="text-gray-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="rounded-md p-2 text-gray-400 hover:text-gray-500"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Add to Cart and Buy Now Buttons */}
            <div className="mt-8 space-y-4">
              <button
                onClick={handleAddToCart}
                disabled={isAddingToCart || !selectedSizeDetails?.inStock}
                className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-400"
              >
                <ShoppingCart className="h-5 w-5" />
                {isAddingToCart ? 'Added!' : 'Add to Cart'}
              </button>
              
              <button
                onClick={handleBuyNow}
                disabled={!selectedSizeDetails?.inStock}
                className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 transition-colors disabled:bg-purple-400"
              >
                <CreditCard className="h-5 w-5" />
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}