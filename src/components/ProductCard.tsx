import React from "react";

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  ml: string;
  topNote: string;
  middleNote: string;
  baseNote: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md bg-white">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-50"
      />

     {/* Hover Overlay */}
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center z-10">
      <h3 className="text-lg font-semibold mb-2">Perfume: {product.name}</h3>
      <p className="text-sm"><strong>Top Note: </strong> {product.topNote}</p>
      <p>__________________________</p>
      <p className="text-sm"><strong>Middle Note: </strong> {product.middleNote}</p>
      <p>__________________________</p>
      <p className="text-sm"><strong>Base Note: </strong> {product.baseNote}</p>
    </div>


      {/* Product Info (always visible) */}
      <div className="p-4">
        <h4 className="text-lg font-semibold">{product.name}</h4>
        <p className="text-sm text-gray-500">{product.ml}</p>
        <p className="text-sm text-gray-700 mt-1">{product.description}</p>
        <p className="text-base font-bold mt-2">₹{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
