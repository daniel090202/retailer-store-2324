import icons from "@/assets/Icons";
import {
  renderProductStorageLocation,
  renderProductDisplayLocation,
} from "@/utils";
import {
  updateProductDetailsSKU,
  updateProductDetailsColor,
  updateProductDetailsSize,
  updateProductDetailsMinimumInventory,
  updateProductDetailsMaximumInventory,
  updateProductDetailsRemainInventory,
} from "@/services";
import { error, success } from "@/lib/hot-toast";

import { Product, ProductDetail } from "@/models";

const Table = ({
  product,
  editMode,
  editedProduct,
  setEditedProduct,
}: {
  product: Product;
  editMode: boolean;
  editedProduct: Product;
  setEditedProduct: (value: Product) => void;
}) => {
  const productDetails = product.productDetails;

  const renderProductDetails = (): React.ReactNode => {
    return productDetails?.map((productDetail, index) => {
      return (
        <tr key={index} className="text-center">
          <td className="px-6 py-4 whitespace-nowrap">
            {editMode ? (
              <input
                type="number"
                id={`SKU_${index}`}
                name={`SKU_${index}`}
                onChange={(event) => {
                  handleEditTextProductDetailsProperties(event);
                }}
                placeholder={productDetail.SKU}
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            ) : (
              productDetail.SKU
            )}
            {editMode &&
            editedProduct.productDetails[index].SKU !== "" &&
            editedProduct.productDetails[index].SKU !==
              product.productDetails[index].SKU ? (
              <span
                onClick={() => {
                  handleUpdateProductDetailsSKU(
                    product.productDetails[index].SKU,
                    editedProduct.productDetails[index].SKU
                  );
                }}
                className="mx-4 rounded-full cursor-pointer hover:text-gray-400"
              >
                {icons.circleCheck}
              </span>
            ) : (
              <div></div>
            )}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {editMode ? (
              <input
                type="text"
                id={`color_${index}`}
                name={`color_${index}`}
                onChange={(event) => {
                  handleEditTextProductDetailsProperties(event);
                }}
                placeholder={productDetail.color}
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            ) : (
              <div
                style={{ backgroundColor: productDetail.color }}
                className={"w-8 h-8 border rounded-full shadow-xl"}
              ></div>
            )}
            {editMode &&
            editedProduct.productDetails[index].color !== "#" &&
            editedProduct.productDetails[index].color !==
              product.productDetails[index].color ? (
              <span
                onClick={() => {
                  handleUpdateProductDetailsColor(
                    product.productDetails[index].SKU,
                    editedProduct.productDetails[index].color
                  );
                }}
                className="mx-4 rounded-full cursor-pointer hover:text-gray-400"
              >
                {icons.circleCheck}
              </span>
            ) : (
              <div></div>
            )}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {editMode ? (
              <input
                type="text"
                id={`size_${index}`}
                name={`size_${index}`}
                onChange={(event) => {
                  handleEditTextProductDetailsProperties(event);
                }}
                placeholder={productDetail.size}
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            ) : (
              productDetail.size
            )}
            {editMode &&
            editedProduct.productDetails[index].size !== "" &&
            editedProduct.productDetails[index].size !==
              product.productDetails[index].size ? (
              <span
                onClick={() => {
                  handleUpdateProductDetailsSize(
                    product.productDetails[index].SKU,
                    editedProduct.productDetails[index].size
                  );
                }}
                className="mx-4 rounded-full cursor-pointer hover:text-gray-400"
              >
                {icons.circleCheck}
              </span>
            ) : (
              <div></div>
            )}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {editMode ? (
              <input
                type="number"
                id={`minimumInventory_${index}`}
                name={`minimumInventory_${index}`}
                onChange={(event) => {
                  handleEditNumericProductDetailsProperties(event);
                }}
                placeholder={productDetail.minimumInventory.toLocaleString()}
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            ) : (
              productDetail.minimumInventory
            )}
            {editMode &&
            editedProduct.productDetails[index].minimumInventory !== 0 &&
            editedProduct.productDetails[index].minimumInventory !==
              product.productDetails[index].minimumInventory ? (
              <span
                onClick={() => {
                  handleUpdateProductDetailsMinimumInventory(
                    product.productDetails[index].SKU,
                    editedProduct.productDetails[index].minimumInventory
                  );
                }}
                className="mx-4 rounded-full cursor-pointer hover:text-gray-400"
              >
                {icons.circleCheck}
              </span>
            ) : (
              <div></div>
            )}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {editMode ? (
              <input
                type="number"
                id={`maximumInventory_${index}`}
                name={`maximumInventory_${index}`}
                onChange={(event) => {
                  handleEditNumericProductDetailsProperties(event);
                }}
                placeholder={productDetail.maximumInventory.toLocaleString()}
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            ) : (
              productDetail.maximumInventory
            )}
            {editMode &&
            editedProduct.productDetails[index].maximumInventory !== 0 &&
            editedProduct.productDetails[index].maximumInventory !==
              product.productDetails[index].maximumInventory ? (
              <span
                onClick={() => {
                  handleUpdateProductDetailsMaximumInventory(
                    product.productDetails[index].SKU,
                    editedProduct.productDetails[index].maximumInventory
                  );
                }}
                className="mx-4 rounded-full cursor-pointer hover:text-gray-400"
              >
                {icons.circleCheck}
              </span>
            ) : (
              <div></div>
            )}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {editMode ? (
              <input
                type="number"
                id={`remainInventory_${index}`}
                name={`remainInventory_${index}`}
                onChange={(event) => {
                  handleEditNumericProductDetailsProperties(event);
                }}
                placeholder={productDetail.remainInventory.toLocaleString()}
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            ) : (
              productDetail.remainInventory
            )}
            {editMode &&
            editedProduct.productDetails[index].remainInventory !== 0 &&
            editedProduct.productDetails[index].remainInventory !==
              product.productDetails[index].remainInventory ? (
              <span
                onClick={() => {
                  handleUpdateProductDetailsRemainInventory(
                    product.productDetails[index].SKU,
                    editedProduct.productDetails[index].remainInventory
                  );
                }}
                className="mx-4 rounded-full cursor-pointer hover:text-gray-400"
              >
                {icons.circleCheck}
              </span>
            ) : (
              <div></div>
            )}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {editMode ? (
              <span className="cursor-not-allowed">
                {productDetail.soldQuantity}
              </span>
            ) : (
              productDetail.soldQuantity
            )}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <select id="storageLocation" name="storageLocation">
              {productDetail.storageLocation.map((storageLocation, index) => {
                return (
                  <option key={index} value={index}>
                    {renderProductStorageLocation(storageLocation)}
                  </option>
                );
              })}
            </select>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {productDetail.displayLocation[0] === 0 ? (
              renderProductDisplayLocation(productDetail.displayLocation[0])
            ) : (
              <select id="displayLocation" name="displayLocation">
                {productDetail.displayLocation.map((displayLocation, index) => {
                  return (
                    <option key={index} value={index}>
                      {renderProductDisplayLocation(displayLocation)}
                    </option>
                  );
                })}
              </select>
            )}
          </td>
        </tr>
      );
    });
  };

  const handleEditTextProductDetailsProperties = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const name = event.target.name;

    const target: string = name.split("_")[0];
    const index: number = parseInt(name.split("_")[1]);

    if (target === "color") {
      editedProduct.productDetails.splice(index, 1, {
        ...productDetails[index],
        [target]: `#${event.target.value}`,
      });
    } else {
      editedProduct.productDetails.splice(index, 1, {
        ...productDetails[index],
        [target]: event.target.value,
      });
    }

    setEditedProduct({
      ...editedProduct,
      productDetails: [...editedProduct.productDetails],
    });
  };

  const handleEditNumericProductDetailsProperties = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const name: string = event.target.name;
    const value: string = event.target.value;

    const target: string = name.split("_")[0];
    const index: number = parseInt(name.split("_")[1]);

    if (value !== "" && value.length > 0) {
      editedProduct.productDetails.splice(index, 1, {
        ...productDetails[index],
        [target]: parseInt(event.target.value),
      });

      setEditedProduct({
        ...editedProduct,
        productDetails: [...editedProduct.productDetails],
      });
    } else {
      editedProduct.productDetails.splice(index, 1, {
        ...productDetails[index],
        [target]: 0,
      });

      setEditedProduct({
        ...editedProduct,
        productDetails: [...editedProduct.productDetails],
      });
    }
  };

  const handleUpdateProductDetailsSKU = async (
    previousSKU: string,
    updatedSKU: string
  ) => {
    const productDetail: ProductDetail | undefined =
      await updateProductDetailsSKU(previousSKU, updatedSKU);

    if (productDetail !== undefined) {
      success(
        `Successfully changed the variance's stock keeping unit as ${productDetail.SKU}.`
      );

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to change the variance's stock keeping unit at this time.");
    }
  };

  const handleUpdateProductDetailsColor = async (
    SKU: string,
    color: string
  ) => {
    const productDetail: ProductDetail | undefined =
      await updateProductDetailsColor(SKU, color);

    if (productDetail !== undefined) {
      success(
        `Successfully changed the variance's color as ${productDetail.color}.`
      );

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to change the variance's color at this time.");
    }
  };

  const handleUpdateProductDetailsSize = async (SKU: string, size: string) => {
    const productDetail: ProductDetail | undefined =
      await updateProductDetailsSize(SKU, size);

    if (productDetail !== undefined) {
      success(
        `Successfully changed the variance's size as ${productDetail.size}.`
      );

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to change the variance's size at this time.");
    }
  };

  const handleUpdateProductDetailsMinimumInventory = async (
    SKU: string,
    minimumInventory: number
  ) => {
    const productDetail: ProductDetail | undefined =
      await updateProductDetailsMinimumInventory(
        SKU,
        minimumInventory.toString()
      );

    if (productDetail !== undefined) {
      success(
        `Successfully changed the variance's minimum inventory as ${productDetail.minimumInventory}.`
      );

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to change the variance's minimum inventory at this time.");
    }
  };

  const handleUpdateProductDetailsMaximumInventory = async (
    SKU: string,
    maximumInventory: number
  ) => {
    const productDetail: ProductDetail | undefined =
      await updateProductDetailsMaximumInventory(
        SKU,
        maximumInventory.toString()
      );

    if (productDetail !== undefined) {
      success(
        `Successfully changed the variance's maximum inventory as ${productDetail.maximumInventory}.`
      );

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to change the variance's maximum inventory at this time.");
    }
  };

  const handleUpdateProductDetailsRemainInventory = async (
    SKU: string,
    remainInventory: number
  ) => {
    const productDetail: ProductDetail | undefined =
      await updateProductDetailsRemainInventory(
        SKU,
        remainInventory.toString()
      );

    if (productDetail !== undefined) {
      success(
        `Successfully changed the variance's remain inventory as ${productDetail.remainInventory}.`
      );

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to change the variance's remain inventory at this time.");
    }
  };

  return (
    <table className="w-full my-4 table-auto text-sm text-center">
      <thead className="bg-gray-100 text-gray-600 font-medium border-b">
        <tr>
          <th className="py-3 px-6">Stock barcode</th>
          <th className="py-3 px-6">Color</th>
          <th className="py-3 px-6">Size</th>
          <th className="py-3 px-6">Minimum</th>
          <th className="py-3 px-6">Maximum</th>
          <th className="py-3 px-6">Remain</th>
          <th className="py-3 px-6">Sold quantity</th>
          <th className="py-3 px-6">Storage</th>
          <th className="py-3 px-6">Display</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 divide-y">{renderProductDetails()}</tbody>
    </table>
  );
};

export default Table;
