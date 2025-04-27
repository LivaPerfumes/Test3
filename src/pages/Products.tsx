import React, { useState } from 'react';
import { products } from '../data/products';
import { ProductType, AttarCategory, SprayCategory } from '../types';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [selectedType, setSelectedType] = useState<ProductType>('all');
  const [selectedAttarCategory, setSelectedAttarCategory] = useState<AttarCategory>('all');
  const [selectedSprayCategory, setSelectedSprayCategory] = useState<SprayCategory>('all');

  const productTypes: ProductType[] = ['all', 'attar', 'spray'];
  const attarCategories: AttarCategory[] = ['all', 'oodh', 'floral', 'fresh', 'woody', 'oriental'];
  const sprayCategories: SprayCategory[] = ['all', 'arabic', 'fresh', 'woody', 'sporty'];

  const filteredProducts = products.filter(product => {
    if (selectedType === 'all') return true;
    if (selectedType === 'attar') {
      if (product.type !== 'attar') return false;
      if (selectedAttarCategory === 'all') return true;
      return product.category === selectedAttarCategory;
    }
    if (selectedType === 'spray') {
      if (product.type !== 'spray') return false;
      if (selectedSprayCategory === 'all') return true;
      return product.category === selectedSprayCategory;
    }
    return true;
  });

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-gray-900">Our Collection</h1>
          <p className="mt-4 text-xl text-gray-500">
            Discover our exclusive range of luxury fragrances
          </p>
        </div>
      </div>

      {/* Product Type Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 mb-6">
          {productTypes.map((type) => (
            <button
              key={type}
              onClick={() => {
                setSelectedType(type);
                setSelectedAttarCategory('all');
                setSelectedSprayCategory('all');
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium ${
                selectedType === type
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Category Filters */}
        {selectedType === 'attar' && (
          <div className="flex flex-wrap gap-4 mb-6">
            {attarCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedAttarCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedAttarCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        )}

        {selectedType === 'spray' && (
          <div className="flex flex-wrap gap-4 mb-6">
            {sprayCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedSprayCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedSprayCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}