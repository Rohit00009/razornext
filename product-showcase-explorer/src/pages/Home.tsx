import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";
import Loader from "../components/Loader";
import Topbar from "../components/Topbar";
import type { Product } from "../types/product";

export default function Home() {
  const { products, loading, error } = useProducts();
  const [selected, setSelected] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("newest");

  const { cart, favorites, toggleCart, toggleFavorite, isInCart, isFavorite } =
    useCart();

  const categories = useMemo(() => {
    const cats = Array.from(
      new Set(products.map((p) => p.category).filter(Boolean))
    );
    return cats as string[];
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      const matchesSearch = p.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" ? true : p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    if (sortOption === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sortOption === "price-desc") result.sort((a, b) => b.price - a.price);
    if (sortOption === "title-asc")
      result.sort((a, b) => a.title.localeCompare(b.title));
    if (sortOption === "title-desc")
      result.sort((a, b) => b.title.localeCompare(a.title));

    return result;
  }, [products, searchTerm, selectedCategory, sortOption]);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Topbar
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortOption={sortOption}
        onSortChange={setSortOption}
        cartCount={cart.length}
        favoriteCount={favorites.length}
      />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <AnimatePresence mode="wait">
          {selected ? (
            <ProductDetail
              key="detail"
              product={selected}
              onBack={() => setSelected(null)}
              onToggleCart={toggleCart}
              onToggleFavorite={toggleFavorite}
              isInCart={isInCart(selected.id)}
              isFavorite={isFavorite(selected.id)}
            />
          ) : (
            <ProductList
              key="list"
              products={filteredProducts}
              onSelect={setSelected}
              onToggleCart={toggleCart}
              onToggleFavorite={toggleFavorite}
              isInCart={isInCart}
              isFavorite={isFavorite}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
