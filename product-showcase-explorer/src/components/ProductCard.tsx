import { motion } from "framer-motion";
import type { Product } from "../types/product";
import { Heart, ShoppingCart } from "lucide-react";

interface Props {
  product: Product;
  onSelect?: (product: Product) => void;
  onToggleCart?: (product: Product) => void;
  onToggleFavorite?: (product: Product) => void;
  isInCart?: boolean;
  isFavorite?: boolean;
}

export default function ProductCard({
  product,
  onSelect,
  onToggleCart,
  onToggleFavorite,
  isInCart,
  isFavorite,
}: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => onSelect?.(product)}
      className="relative bg-gradient-to-b from-white/80 to-gray-50/50 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all overflow-hidden cursor-pointer"
    >
      {/* 💰 Price Tag */}
      <span className="absolute top-3 right-3 bg-white/70 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm backdrop-blur-md">
        ${product.price}
      </span>

      {/* 🧋 Product Image */}
      <div className="w-full bg-gray-100 flex items-center justify-center rounded-t-3xl overflow-hidden">
        <motion.img
          src={product.images?.[0]}
          alt={product.title}
          className="h-44 w-full object-contain transition-transform duration-500"
        />
      </div>

      {/* 🏷️ Info Section */}
      <div className="p-4">
        <p className="text-xs text-gray-500 text-center bg-gray-50 rounded-full py-1 mb-3">
          Free Delivery until 16/06/2026
        </p>

        <h3 className="text-lg font-semibold text-gray-900 text-center">
          {product.title}
        </h3>

        <div className="flex justify-between items-center mt-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite?.(product);
            }}
            className={`p-2 rounded-full transition ${
              isFavorite
                ? "bg-pink-100 text-pink-600"
                : "bg-gray-100 text-gray-600 hover:bg-pink-50"
            }`}
          >
            <Heart fill={isFavorite ? "pink" : "none"} className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleCart?.(product);
            }}
            className={`p-2 rounded-full transition ${
              isInCart
                ? "bg-green-100 text-green-600"
                : "bg-gray-100 text-gray-600 hover:bg-green-50"
            }`}
          >
            <ShoppingCart
              fill={isInCart ? "green" : "none"}
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>

      {/* 🍵 Tags (optional) */}
      <div className="flex flex-wrap gap-2 justify-center px-4 pb-4">
        {(product as any).tags?.slice(0, 4).map((tag: string, i: number) => (
          <span
            key={i}
            className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
