import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

const ProductList: React.FC = () => {
  return (
    <div className="px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Perfume Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={Number(product.id)}
            product={{
              ...product,
              id: Number(product.id),
              topNote: product.topNote ?? "",
              middleNote: product.middleNote ?? "",
              baseNote: product.baseNote ?? "",
              ml: product.ml ?? "",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
