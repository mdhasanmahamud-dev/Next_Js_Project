import React from "react";
import SectionTitle from "@/components/Shared/SectionTitle.jsx";
import ProductCard from "@/components/ProductCard/ProductCard.jsx";
const MostPopular = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products.json`, {
    cache: "no-store",
  });
  const products = await res.json();
  const mostPopularProducts = products.filter((product) => product.isPopular);
  return (
    <div className="container max-w-7xl mx-auto px-6">
      <SectionTitle
        title="Most Popular Products"
        subtitle="Check out our trending products loved by customers"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mostPopularProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MostPopular;
