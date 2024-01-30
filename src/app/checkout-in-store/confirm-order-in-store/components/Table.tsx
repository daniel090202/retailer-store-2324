import { renderProductCategory } from "@/utils";

import { Product, ProductDetail } from "@/models";

const Table = ({
  productsInCartData,
}: {
  productsInCartData: Array<{
    product: Product;
    productDetail: ProductDetail;
    purchasedAmount: number;
  }>;
}) => {
  const renderAllProducts = (): React.ReactNode => {
    return productsInCartData?.map((productInCartData, index) => {
      const product: Product = productInCartData.product;
      const productDetail: ProductDetail = productInCartData.productDetail;
      const purchasedAmount: number = productInCartData.purchasedAmount;

      const totalPrice = product.salePrice * purchasedAmount;

      return (
        <tr key={index}>
          <td className="px-6 py-4 whitespace-nowrap">{productDetail.SKU}</td>
          <td className="px-6 py-4">{product.name}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <select name="category" id="category">
              {product.category.map((category, index) => {
                return (
                  <option key={index} value={index}>
                    {renderProductCategory(category)}
                  </option>
                );
              })}
            </select>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">{productDetail.color}</td>
          <td className="px-6 py-4 whitespace-nowrap">{productDetail.size}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            {product.salePrice.toLocaleString()}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">{purchasedAmount}</td>
          <td className="px-6 py-4 whitespace-nowrap">{totalPrice.toLocaleString()}</td>
        </tr>
      );
    });
  };

  return (
    <table className="w-full my-4 table-auto text-sm text-left">
      <thead className="bg-gray-100 text-gray-600 font-medium border-b">
        <tr>
          <th className="py-3 px-6">Stock barcode</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Category</th>
          <th className="py-3 px-6">Color</th>
          <th className="py-3 px-6">Size</th>
          <th className="py-3 px-6">Sale price</th>
          <th className="py-3 px-6">Quantity</th>
          <th className="py-3 px-6">Total price</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 divide-y">{renderAllProducts()}</tbody>
    </table>
  );
};

export default Table;
