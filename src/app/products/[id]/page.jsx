import ProductDetailCard from "@/components/ProductDetailCard/ProductDetailCard";
import RelevantProduct from "@/components/RelevantProduct/RelevantProduct";

const ProductDetail = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products.json`, {
    cache: "no-store",
  });
  const products = await res.json();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h1 className="text-2xl font-semibold">Product not found</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="container max-w-7xl mx-auto px-6 py-10 text-white">
        <ProductDetailCard product={product} />
        <RelevantProduct currentProduct={product} products={products} />
      </div>
    </div>
  );
};

export default ProductDetail;
