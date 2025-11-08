import type { Product } from "../types/product";

interface Props {
  product: Product;
  onSelect?: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: Props) {
  return (
    <div
      onClick={() => onSelect?.(product)}
      className="bg-white shadow-md rounded-xl p-4 cursor-pointer hover:scale-105 hover:shadow-lg transition"
    >
      <img
        src={product.images?.[0]}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
      />
      <h3 className="text-lg font-semibold line-clamp-1">{product.title}</h3>
      <p className="text-gray-500 text-sm line-clamp-2">
        {product.description}
      </p>
      <p className="text-blue-600 font-bold mt-2">${product.price}</p>
    </div>
  );
}
