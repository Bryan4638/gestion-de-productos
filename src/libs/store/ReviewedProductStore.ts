import { create } from "zustand";
import { ProductState } from "@/libs/types/types";
import { LocalStorageAdapter } from "@/libs/adapters/LocalStorageAdapter";
import { TIME_DELAY } from "@/conf";

export const useProductStoreWithAdapter = create<ProductState>((set, get) => ({
  products: [],
  currentPage: 0,
  hasMore: true,
  isLoading: false,
  pageSize: 7,

  initialize: () => {
    const loadedProducts = LocalStorageAdapter.load();
    console.log("first");
    const initialProducts = loadedProducts.slice(0, 7);
    set({
      products: initialProducts,
      hasMore: loadedProducts.length > 7,
    });
  },

  addProduct: (product) => {
    const existingProducts = LocalStorageAdapter.load();
    const productExists = existingProducts.some((p) => p.id === product.id);

    if (productExists) {
      console.warn("El producto ya existe y no se puede agregar nuevamente.");
      return;
    }

    const updatedProducts = [...existingProducts, product];
    LocalStorageAdapter.save(updatedProducts);
    set({
      currentPage: 0,
      hasMore: updatedProducts.length > 7,
    });
  },

  deleteProduct: (id) => {
    const updatedProducts = get().products.filter((p) => p.id !== id);
    LocalStorageAdapter.save(updatedProducts);
    set({
      products: updatedProducts,
      hasMore:
        updatedProducts.length > (get().currentPage + 1) * get().pageSize,
    });
  },

  loadMoreProducts: () => {
    if (get().isLoading || !get().hasMore) return;

    set({ isLoading: true });

    setTimeout(() => {
      const nextPage = get().currentPage + 1;
      const allProducts = LocalStorageAdapter.load();
      const endIdx = (nextPage + 1) * get().pageSize;
      const visibleProducts = allProducts.slice(0, endIdx);

      set({
        products: visibleProducts,
        currentPage: nextPage,
        hasMore: endIdx < allProducts.length,
        isLoading: false,
      });
    }, TIME_DELAY);
  },

  resetPagination: () => {
    const allProducts = LocalStorageAdapter.load();
    const initialProducts = allProducts.slice(0, get().pageSize);

    set({
      products: initialProducts,
      currentPage: 0,
      hasMore: allProducts.length > get().pageSize,
    });
  },
}));
