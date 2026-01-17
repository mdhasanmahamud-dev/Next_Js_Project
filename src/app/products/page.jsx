import ProductCard from "@/components/ProductCard/ProductCard.jsx";
// import { products } from "../../../public/data/products.js";
import PageTitle from "@/components/Shared/PageTitle.jsx";
export default async function Products() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products.json`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products data");
  }

  const products = await res.json();
  return (
    <div className="container max-w-7xl mx-auto px-6 py-5">
      <PageTitle
        title="Our Products"
        subtitle="Browse through our wide range of electronics, gadgets, and more"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
