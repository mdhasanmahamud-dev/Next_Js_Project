import React from "react";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`} className="block h-full">
      <div className="bg-gray-800 text-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer h-full flex flex-col">
        
        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />

        {/* Content */}
        <div className="p-4 flex flex-col h-[180px]">
          <h2 className="text-lg font-semibold mb-1">
            {product.name}
          </h2>

          {/* Fixed height description */}
          <p className="text-gray-300 text-sm mb-2 overflow-hidden h-[48px]">
            {product.shortDescription}
          </p>

          {/* Bottom aligned */}
          <div className="mt-auto">
            <p className="font-bold text-lg">{product.price}</p>
            <p className="text-gray-400 text-sm mt-1">
              {product.category}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
