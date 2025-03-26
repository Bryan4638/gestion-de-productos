import { create } from 'zustand'
import { Product } from '../types/types'
import api from '../services/Api';

interface ProductStore {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
}

const useProductStore = create<ProductStore>((set) => ({
  products: [],
  loading: false,
  error: null,

  // Obtener productos desde la API
  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get("/product?page=1&limit=10&revised=false")
      set({ products: response.data, loading: false });
    } catch (error) {
      set({ error: 'Error al cargar productos', loading: false });
    }
  },

  // Eliminar un producto
  deleteProduct: async (id) => {
    set({ error: null });
    try {
      await api.delete(`/product/${id}`);
      set((state) => ({
        products: state.products.filter(product => product.id !== id),
      }));
    } catch (error) {
      set({ error: 'Error al eliminar producto' });
    }
  }
}));

export default useProductStore;