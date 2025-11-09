import { useState } from "react";
import type { Product } from "../types/product";

export const useCart = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);

  const toggleCart = (product: Product) => {
    setCart((prev) =>
      prev.find((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product]
    );
  };

  const toggleFavorite = (product: Product) => {
    setFavorites((prev) =>
      prev.find((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product]
    );
  };

  const isInCart = (id: number) => cart.some((p) => p.id === id);
  const isFavorite = (id: number) => favorites.some((p) => p.id === id);

  return {
    cart,
    favorites,
    toggleCart,
    toggleFavorite,
    isInCart,
    isFavorite,
  };
};
