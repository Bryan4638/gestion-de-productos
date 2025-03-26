export interface Product {
  id: string;
  name: string;
  description: string;
  revised: boolean;
  price: number;
  urlImagen: string;
  status: "approved" | "rejected";
}

export interface ProductState {
  products: Product[];
  currentPage: number;
  hasMore: boolean;
  isLoading: boolean;
  pageSize: number;
  initialize: () => void;
  addProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  loadMoreProducts: () => void;
  resetPagination: () => void;
}
