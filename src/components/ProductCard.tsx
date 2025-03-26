import React from "react";
import { Eye, Trash2 } from "lucide-react";
import { Product } from "../libs/types/types";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  onDelete: (id: string) => void;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({
  product,
  onDelete,
  onViewDetails,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={product.urlImagen}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ${product.price}
          </span>
          <span
            className={`px-2 py-1 rounded-full text-sm font-medium
            ${
              product.status === "approved"
                ? "bg-green-100 text-green-800"
                : product.status === "rejected"
                ? "bg-red-100 text-red-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
          </span>
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={() => onViewDetails(product)}
            className="p-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <Eye size={20} />
          </button>
          <button
            onClick={() => onDelete(product.id)}
            className="p-2 text-red-600 hover:text-red-800 transition-colors"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
