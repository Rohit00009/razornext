import type { Product } from "../types/product";

interface Props {
  product: Product | null;
  onBack: () => void;
}

export default function ProductDetail({ product, onBack }: Props) {
  if (!product) return null;

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <button
        onClick={onBack}
        className="text-blue-600 underline mb-4 hover:text-blue-800"
      >
        ← Back
      </button>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="h-64 w-64 object-contain"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-blue-600">
            ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
}
