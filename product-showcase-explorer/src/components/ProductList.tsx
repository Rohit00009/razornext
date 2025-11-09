import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import type { Product } from "../types/product";

interface Props {
  products: Product[];
  onSelect: (product: Product) => void;
  onToggleCart: (product: Product) => void;
  onToggleFavorite: (product: Product) => void;
  isInCart: (id: number) => boolean;
  isFavorite: (id: number) => boolean;
}

export default function ProductList({
  products,
  onSelect,
  onToggleCart,
  onToggleFavorite,
  isInCart,
  isFavorite,
}: Props) {
  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          onSelect={() => onSelect(p)}
          onToggleCart={onToggleCart}
          onToggleFavorite={onToggleFavorite}
          isInCart={isInCart(p.id)}
          isFavorite={isFavorite(p.id)}
        />
      ))}
    </motion.div>
  );
}
