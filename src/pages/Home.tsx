import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Star, Tag } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';

const heroImages = [
  {
    url: 'https://i.pinimg.com/736x/c6/9d/6b/c69d6bee94bd9c4707d2c335ef1d183d.jpg',
    title: 'Discover Your Signature Scent',
    subtitle: 'Explore our collection of luxury fragrances crafted with the finest ingredients.'
  },
  {
    url: 'https://i.pinimg.com/736x/f4/28/a8/f428a8f8fcda2f0f5247f43acf1dea16.jpg',
    title: 'Luxury in Every Drop',
    subtitle: 'Experience the art of perfumery with our exclusive collections.'
  },
  {
    url: 'public/web-bg-liva.png',
    title: 'Elegance Bottled',
    subtitle: 'Find your perfect fragrance from our curated selection.'
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = products.filter(product => product.featured);
  const newProducts = products.filter(product => product.isNew);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slideshow */}
      <div className="relative h-[calc(100vh-4rem)] pt-16">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src={image.url}
                alt={`Slide ${index + 1}`}
              />
              <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
            </div>
            
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white">
                  {image.title}
                </h1>
                <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-100">
                  {image.subtitle}
                </p>
                <div className="mt-6 md:mt-10">
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
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
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
            <ProductCard key={product.id} product={product} />
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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-gradient-to-r from-pink-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-10"
          >
            <Star className="h-6 w-6 text-purple-600 animate-sparkle" />
            <h2 className="text-3xl font-bold text-gray-900">About Liva</h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Liva Perfumes brings you exceptional fragrances that capture the essence of luxury and sophistication.
                Each scent is carefully crafted using the finest ingredients, creating unique and lasting impressions.
              </p>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="text-purple-600 font-medium hover:text-purple-700 transition"
                >
                  Learn more about us →
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative h-96 overflow-hidden rounded-lg shadow-lg"
            >
              <img
  src={`${import.meta.env.BASE_URL}shared image.png`}
  alt="About Liva"
  className="w-full h-full object-cover"
/>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}