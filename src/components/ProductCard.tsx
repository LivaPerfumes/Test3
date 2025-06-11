import React from 'react';
import { Product } from '../types';
import { Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();

  const handleViewDetails = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/products/${product.id}`);
  };

  const displaySize = product.type === 'spray' ? '20ML - 100ML' : '3ML - 12ML';

  return (
    <div className="group relative">
      <div 
        className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 cursor-pointer"
        onClick={handleViewDetails}
      >
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
        <h3 className="text-base font-medium text-gray-900 cursor-pointer hover:text-purple-600" onClick={handleViewDetails}>
  {product.name}
</h3>
        <p className="mt-1 text-sm text-gray-500">{displaySize}</p>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
        <div className="mt-2">
          <p className="text-lg font-medium text-gray-900">₹{product.price}</p>
        </div>
      </div>
    </div>
  );
}