import React from "react";

const ProductDetailCard = ({product}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-5">
      {/* Image Section */}
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[420px] object-cover rounded-xl"
        />
      </div>
      {/* Details Section */}
      <div className="flex flex-col justify-between">
        <div>
          <span className="inline-block bg-indigo-600 text-sm px-3 py-1 rounded-full mb-3">
            {product.category}
          </span>

          <h1 className="text-4xl font-bold mb-3">{product.name}</h1>

          <p className="text-gray-300 mb-5 leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-2 text-gray-300">
            <p>
              <span className="font-semibold text-white">Brand:</span>{" "}
              {product.brand}
            </p>
            <p>
              <span className="font-semibold text-white">Rating:</span> ⭐{" "}
              {product.rating}
            </p>
            <p>
              <span className="font-semibold text-white">Stock:</span>{" "}
              {product.stock} available
            </p>
          </div>
        </div>

        {/* Price & Button */}
        <div className="mt-6">
          <p className="text-3xl font-bold mb-4">{product.price}</p>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors py-3 rounded-xl font-semibold">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
