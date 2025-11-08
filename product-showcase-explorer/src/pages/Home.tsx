import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";
import Loader from "../components/Loader";
import type { Product } from "../types/product";

export default function Home() {
  const { products, loading, error } = useProducts();
  const [selected, setSelected] = useState<Product | null>(null);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        🛍️ Product Showcase Explorer
      </h1>
      {selected ? (
        <ProductDetail product={selected} onBack={() => setSelected(null)} />
      ) : (
        <ProductList products={products} onSelect={setSelected} />
      )}
    </div>
  );
}
