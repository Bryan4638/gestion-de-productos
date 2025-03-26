import React from 'react';
import { X } from 'lucide-react';
import { Product } from '../libs/types/types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <img
              src={product.urlImagen}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-semibold text-gray-900">
              ${product.price}
            </p>
            <div className="mt-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                ${product.status === 'approved' ? 'bg-green-100 text-green-800' :
                  product.status === 'rejected' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'}`}>
                {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}