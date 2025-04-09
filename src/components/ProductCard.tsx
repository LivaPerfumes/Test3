import React from 'react';
import { Product } from '../types';
import { Tag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
        />
        {product.isNew && (
          <div className="absolute top-2 right-2">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-600 text-white">
              <Tag className="w-3 h-3 mr-1" />
              New
            </span>
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.size}</p>
        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-lg font-medium text-gray-900">₹{product.price}</p>

        </div>
      </div>
    </div>
  );
}