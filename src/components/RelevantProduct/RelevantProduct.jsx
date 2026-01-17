import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import SectionTitle from "../Shared/SectionTitle";

const RelevantProduct = ({ currentProduct, products }) => {
  const relevantProducts = products.filter(
    (item) =>
      item.category === currentProduct.category && item.id !== currentProduct.id
  );
  return (
    <div>
      <div className="mt-20"> 
        <SectionTitle
          title="Related Products"
          subtitle={`More products from ${currentProduct.category}`}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {relevantProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelevantProduct;
