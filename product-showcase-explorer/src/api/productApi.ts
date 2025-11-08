import type { Product } from "../types/product";

const BASE_URL = "https://dummyjson.com/products";

export const getAllProducts = async (): Promise<Product[]> => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();

  // ✅ Normalize structure: pick first image
  return data.products.map((p: any) => ({
    ...p,
    image: p.images?.[0] || "", // add single `image` key for UI
  }));
};
