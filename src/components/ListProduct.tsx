import useProductStore from "@/libs/store/ProductsToReviewStore";
import { useProductStoreWithAdapter } from "@/libs/store/ReviewedProductStore";
import { CheckCircle, XCircle } from "lucide-react";
import Image from "next/image";

function ListProduct() {
  const { addProduct } = useProductStoreWithAdapter();

  const { products, deleteProduct, loading, fetchProducts } = useProductStore();

 
  const handleReviewProduct = (
    productId: string,
    status: "approved" | "rejected"
  ) => {
    const productReview = products.filter(
      (product) => product.id === productId
    )[0];
    addProduct({ ...productReview, status });

    deleteProduct(productId);
  };

  return (
    <section className="mb-12">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="w-full p-4 flex justify-end items-center">
          <button
            onClick={fetchProducts}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Refresh
          </button>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading && (
              <tr>
                <td colSpan={3} className="text-center py-4">
                  Loading...
                </td>
              </tr>
            )}
            {!loading && products.length === 0 && (
              <tr>
                <td colSpan={3} className="text-center py-4">
                  No products to review
                </td>
              </tr>
            )}
            {!loading &&
              products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <Image
                        className="h-10 w-10 rounded-full object-cover"
                        src={product.urlImagen}
                        alt=""
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {product.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    ${product.price}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-4">
                      <button
                        onClick={() =>
                          handleReviewProduct(product.id, "approved")
                        }
                        className="text-green-600 hover:text-green-900"
                      >
                        <CheckCircle size={20} />
                      </button>
                      <button
                        onClick={() =>
                          handleReviewProduct(product.id, "rejected")
                        }
                        className="text-red-600 hover:text-red-900"
                      >
                        <XCircle size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        
      </div>
    </section>
  );
}

export default ListProduct;
