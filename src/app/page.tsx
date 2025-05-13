"use client";
import { useEffect, useState } from "react";
import { BookmarkCheck, ShoppingBag } from "lucide-react";
import ListProduct from "@/components/ListProduct";
import ReviewedProducts from "@/components/ReviewedProducts";
import useProductStore from "@/libs/store/ProductsToReviewStore";
export default function Home() {
  const [activeTab, setActiveTab] = useState("products");
  const { fetchProducts } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Product Review System
          </h1>
        </div>

        <div className="min-h-screen bg-gray-100">
          <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm mb-6">
            <button
              onClick={() => setActiveTab("products")}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === "products"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Products to Review</span>
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === "saved"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <BookmarkCheck className="w-5 h-5" />
              <span>Reviewed Products</span>
            </button>
          </div>

          {activeTab === "products" ? <ListProduct /> : <ReviewedProducts />}
        </div>
      </div>
    </div>
  );
}
