import { useProductStoreWithAdapter } from "@/libs/store/ReviewedProductStore";
import { ProductCard } from "./ProductCard";
import { useEffect, useRef, useState } from "react";
import { Product } from "@/libs/types/types";
import { ProductModal } from "./ProductModal";

function ReviewedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const {
    products,
    loadMoreProducts,
    deleteProduct,
    hasMore,
    isLoading,
    initialize,
  } = useProductStoreWithAdapter();

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (products.length === 0) {
      initialize();
    }
  }, [initialize, products.length]);

  useEffect(() => {
    if (isLoading || !hasMore) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          loadMoreProducts();
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isLoading, hasMore, loadMoreProducts]);

  const handleDelete = (id: string) => () => {
    deleteProduct(id);
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={handleDelete(product.id)}
            onViewDetails={setSelectedProduct}
          />
        ))}
      </div>
      <div ref={loadMoreRef} className="h-10 flex items-center justify-center">
        {isLoading && (
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        )}
        {!hasMore && products.length > 0 && (
          <p className="text-gray-500">No hay más productos</p>
        )}
      </div>

      {products.length === 0 && !isLoading && (
        <p className="text-gray-500 text-center py-8">
          No hay productos disponibles
        </p>
      )}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}

export default ReviewedProducts;
