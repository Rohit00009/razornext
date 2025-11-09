import { motion } from "framer-motion";
import type { Product } from "../types/product";
import { ArrowLeft, ShoppingCart, Heart } from "lucide-react";

interface Props {
  product: Product;
  onBack: () => void;
  onToggleCart?: (product: Product) => void;
  onToggleFavorite?: (product: Product) => void;
  isInCart?: boolean;
  isFavorite?: boolean;
  cartCount?: number;
  favoriteCount?: number;
}

export default function ProductDetail({
  product,
  onBack,
  onToggleCart,
  onToggleFavorite,
  isInCart,
  isFavorite,
}: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onBack}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        key="product-detail"
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: -20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white/80 backdrop-blur-md border border-white/50 shadow-card rounded-3xl max-h-[90vh] w-full max-w-3xl overflow-y-auto p-6 sm:p-10"
      >
        <motion.button
          onClick={onBack}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="sticky top-4 z-20 mb-6 flex items-center gap-2 px-5 py-2 rounded-full 
                     bg-white/20 backdrop-blur-md border border-white/30 text-blue-700 font-medium 
                     shadow-md hover:bg-white/30 hover:text-pink-600 transition duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Products</span>
        </motion.button>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-3 w-full md:w-72">
              {product.images?.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt={`${product.title} ${index + 1}`}
                  className="h-56 w-56 object-contain rounded-2xl border border-gray-200 shadow-card bg-white flex-shrink-0 hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900">
              {product.title}
            </h2>
            <p className="text-gray-700 mt-3 leading-relaxed">
              {product.description}
            </p>

            <p className="text-2xl font-semibold text-blue-600 mt-6">
              ${product.price}
            </p>

            <div className="flex gap-3 mt-6 flex-wrap">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => onToggleCart?.(product)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-white font-medium transition ${
                  isInCart
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                <ShoppingCart size={18} />
                {isInCart ? "Added to Cart" : "Add to Cart"}
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => onToggleFavorite?.(product)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                  isFavorite
                    ? "bg-pink-100 border-pink-400 text-pink-600"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-pink-50"
                }`}
              >
                <Heart
                  size={18}
                  className={isFavorite ? "fill-pink-500 text-pink-500" : ""}
                />
                {isFavorite ? "Favorited" : "Favorite"}
              </motion.button>
            </div>
          </div>
        </div>

        {product.reviews && product.reviews.length > 0 && (
          <div className="mt-10 space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Customer Reviews
            </h3>
            {product.reviews.map((r, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-4 bg-white/70 shadow-sm"
              >
                <p className="text-gray-600 italic mb-2">“{r.comment}”</p>
                <p className="text-sm text-gray-500">
                  ⭐ {r.rating}/5 — {r.reviewerName}
                </p>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
