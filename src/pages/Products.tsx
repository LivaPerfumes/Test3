import React, { useState } from 'react';
import { products } from '../data/products';
import { Category } from '../types';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const categories: Category[] = ['all', 'floral', 'woody', 'oriental', 'fresh'];
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="pt-16">
      {/* Header */}
      <div 
    className="bg-cover bg-center bg-no-repeat" 
    style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2018/05/13/18/06/scent-of-roses-3397281_1280.jpg')" }}>
        <div className="max-w-8xl mx-auto py-8 px-8 sm:px-8 lg:px-8">
          <h1 className="text-5xl font-serif font-bold text-gray-1000">Our Collection</h1>
          <p className="mt-4 text-xl text-gold-500">
            Discover our exclusive range of luxury fragrances
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={Number(product.id)} 
              product={{ 
                ...product, 
                id: Number(product.id), 
                topNote: product.topNote ?? '', 
                middleNote: product.middleNote ?? '', 
                baseNote: product.baseNote ?? '', 
                ml: product.ml ?? 'N/A' 
              }} 
            />
          ))}
        </div>
      </div>
      {/* ✅ Footer added here */}
            <Footer />
    </div>
  );
}