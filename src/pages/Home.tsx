import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Star, Tag } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

export default function Home() {
  const featuredProducts = products.filter(product => product.featured);
  const newProducts = products.filter(product => product.isNew);

  const heroImages = [
    "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&q=80&w=2000",
    "https://i.pinimg.com/736x/c6/9d/6b/c69d6bee94bd9c4707d2c335ef1d183d.jpg",
    "https://i.pinimg.com/736x/f4/28/a8/f428a8f8fcda2f0f5247f43acf1dea16.jpg"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Slider Section - Half Height with Bottom-Left Aligned Text */}
      <div className="relative min-h-[50vh] overflow-hidden">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-full w-full transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
          </div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-end justify-start px-4 sm:px-6 lg:px-8 pb-12">
          <div style={{ marginTop: '200px' }}>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Discover Your Signature Scent
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-100">
              Explore our collection of luxury fragrances crafted with the finest ingredients.
            </p>
            <div className="mt-6">
              <Link
                to="/products"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-50"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-2 mb-8">
          <Tag className="h-6 w-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-900">New Arrivals</h2>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {newProducts.map((product) => (
            <ProductCard
              key={Number(product.id)}
              product={{
                ...product,
                id: Number(product.id),
                topNote: product.topNote ?? '',
                middleNote: product.middleNote ?? '',
                baseNote: product.baseNote ?? '',
                ml: product.ml ?? 'N/A',
              }}
            />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="h-6 w-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-900">Featured Collections</h2>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={Number(product.id)}
              product={{
                ...product,
                id: Number(product.id),
                topNote: product.topNote ?? '',
                middleNote: product.middleNote ?? '',
                baseNote: product.baseNote ?? '',
              }}
            />
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <Star className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">About Liva</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600">
                Liva Perfumes brings you exceptional fragrances that capture the essence of luxury and sophistication. 
                Each scent is carefully crafted using the finest ingredients, creating unique and lasting impressions.
              </p>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="text-purple-600 font-medium hover:text-purple-700"
                >
                  Learn more about us →
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
