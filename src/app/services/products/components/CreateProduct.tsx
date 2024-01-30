import { useState } from "react";

import icons from "@/assets/Icons";

import Modal from "@/components/Modal";
import Button from "@/components/Button";

import {
  allProductUnits,
  allStorageLocation,
  allProductCategories,
} from "@/utils";
import { createProduct } from "@/services";
import { appRoutes } from "@/config/pathConfig";

const CreateProduct = ({
  createProductModal,
  setCreateProductModal,
}: {
  createProductModal: boolean;
  setCreateProductModal: (value: boolean) => void;
}) => {
  const [unit, setUnit] = useState("-1");
  const [forGender, setForGender] = useState("-1");
  const [rowInputAmount, setRowInputAmount] = useState(1);

  const [categoryList, setCategoryList] = useState<Array<string>>([]);

  const [product, setProduct] = useState<{
    SKU: string;
    UPC: string;
    name: string;
    brand: string;
    forGender: string;
    category: Array<string>;
    originalPrice: string;
    salePrice: string;
    unit: string;
  }>({
    SKU: "",
    UPC: "",
    name: "",
    brand: "",
    forGender: "",
    category: [],
    originalPrice: "",
    salePrice: "",
    unit: "",
  });

  const [productDetails, setProductDetails] = useState<
    Array<{
      size: string;
      color: string;
      initialInventory: string;
      minimumInventory: string;
      maximumInventory: string;
      storageLocation: Array<string>;
    }>
  >([
    {
      size: "",
      color: "",
      initialInventory: "",
      minimumInventory: "",
      maximumInventory: "",
      storageLocation: [],
    },
  ]);

  const renderUnits = () => {
    const units = [];

    for (let i: number = 0; i < allProductUnits.length; i++) {
      units.push(
        <option key={i} value={i}>
          {allProductUnits[i]}
        </option>
      );
    }

    return units;
  };

  const renderCategories = () => {
    const categories = [];

    for (let i: number = 0; i < allProductCategories.length; i++) {
      categories.push(
        <option key={i} value={i}>
          {allProductCategories[i]}
        </option>
      );
    }

    return categories;
  };

  const renderStorageLocation = () => {
    const storageLocation = [];

    for (let i: number = 0; i < allStorageLocation.length; i++) {
      storageLocation.push(
        <option key={i} value={i}>
          {allStorageLocation[i]}
        </option>
      );
    }

    return storageLocation;
  };

  const renderProductDetails = () => {
    const rowInputs = [];

    for (let i: number = 0; i < rowInputAmount; i++) {
      rowInputs.push(
        <tr key={i} className="text-left">
          <td className="w-1/6 p-2 whitespace-nowrap">
            <input
              key={i}
              type="text"
              id={`color_${i}`}
              name={`color_${i}`}
              placeholder="Color"
              onChange={(event) => {
                handleProductDetailsInputProduct(event);
              }}
              className="w-full p-2 border rounded-xl outline-none"
            />
          </td>
          <td className="p-2 whitespace-nowrap">
            <input
              key={i}
              type="text"
              id={`size_${i}`}
              name={`size_${i}`}
              placeholder="Size"
              onChange={(event) => {
                handleProductDetailsInputProduct(event);
              }}
              className="w-full p-2 border rounded-xl outline-none"
            />
          </td>
          <td className="p-2 whitespace-nowrap">
            <input
              key={i}
              type="text"
              id={`initialInventory_${i}`}
              name={`initialInventory_${i}`}
              placeholder="Initial inventory"
              onChange={(event) => {
                handleProductDetailsInputProduct(event);
              }}
              className="w-full p-2 border rounded-xl outline-none"
            />
          </td>
          <td className="p-2 whitespace-nowrap">
            <input
              key={i}
              type="text"
              id={`minimumInventory_${i}`}
              name={`minimumInventory_${i}`}
              placeholder="Minimum inventory"
              onChange={(event) => {
                handleProductDetailsInputProduct(event);
              }}
              className="w-full p-2 border rounded-xl outline-none"
            />
          </td>
          <td className="p-2 whitespace-nowrap">
            <input
              key={i}
              type="text"
              id={`maximumInventory_${i}`}
              name={`maximumInventory_${i}`}
              placeholder="Maximum inventory"
              onChange={(event) => {
                handleProductDetailsInputProduct(event);
              }}
              className="w-full p-2 border rounded-xl outline-none"
            />
          </td>
          <td className="p-2 whitespace-nowrap">
            <select
              id={`storageLocation_${i}`}
              name={`storageLocation_${i}`}
              // value={storageLocationList[0]}
              onChange={(event) => handleStorageLocationSelectProduct(event)}
              className="w-full p-2 border rounded-xl cursor-pointer outline-none appearance-none"
            >
              <option value="-1" hidden>
                Select a location
              </option>
              {renderStorageLocation()}
            </select>
          </td>
          <td>
            <div
              onClick={() => handleDecreaseRowInputsAmount()}
              className="w-8 h-8 px-2 py-1 border rounded-full text-gray-400 cursor-pointer hover:bg-gray-200 hover:text-gray-600"
            >
              {icons.minus}
            </div>
          </td>
        </tr>
      );
    }

    return rowInputs;
  };

  const handleInputProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleForGenderSelectProduct = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setForGender(event.target.value);
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleCategorySelectProduct = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategoryList([...categoryList, event.target.value]);
    setProduct({ ...product, [event.target.name]: [event.target.value] });
  };

  const handleUnitSelectProduct = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setUnit(event.target.value);
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleIncreaseRowInputsAmount = () => {
    productDetails.push({
      size: "",
      color: "",
      initialInventory: "",
      minimumInventory: "",
      maximumInventory: "",
      storageLocation: [],
    });

    setRowInputAmount(rowInputAmount + 1);
  };

  const handleDecreaseRowInputsAmount = () => {
    if (rowInputAmount <= 1) {
      return;
    }

    productDetails.pop();
    setRowInputAmount(rowInputAmount - 1);
  };

  const handleStorageLocationSelectProduct = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const startIndex: number = parseInt(event.target.name.split("_")[1]);

    if (startIndex > productDetails.length) {
      return;
    }

    productDetails[startIndex].storageLocation.push(event.target.value);
    setProductDetails([...productDetails]);
  };

  const handleProductDetailsInputProduct = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const targetProductDetail: string = event.target.name.split("_")[0];
    const startIndex: number = parseInt(event.target.name.split("_")[1]);

    if (startIndex > productDetails.length) {
      return;
    }

    switch (targetProductDetail) {
      case "color":
        productDetails[startIndex].color = event.target.value;
        setProductDetails([...productDetails]);

        return;
      case "size":
        productDetails[startIndex].size = event.target.value;
        setProductDetails([...productDetails]);

        return;
      case "initialInventory":
        productDetails[startIndex].initialInventory = event.target.value;
        setProductDetails([...productDetails]);

        return;
      case "minimumInventory":
        productDetails[startIndex].minimumInventory = event.target.value;
        setProductDetails([...productDetails]);

        return;
      case "maximumInventory":
        productDetails[startIndex].maximumInventory = event.target.value;
        setProductDetails([...productDetails]);

        return;
      default:
        return;
    }
  };

  const handleCreateProduct = async () => {
    await createProduct({ ...product, details: [...productDetails] });

    setCreateProductModal(!createProductModal);

    window.location.href = appRoutes.products.all;
  };

  return createProductModal ? (
    <Modal modal={createProductModal} setCloseModal={setCreateProductModal}>
      <div className="my-2 flex justify-between">
        <h1 className="text-2xl">New product details</h1>
        <span
          className="px-2 py-1 rounded-full cursor-pointer hover:bg-gray-200"
          onClick={() => setCreateProductModal(false)}
        >
          {icons.cross}
        </span>
      </div>
      <hr />
      <div className="mx-auto py-3 space-y-3 grid grid-cols-3 gap-x-3">
        <div className="my-4">
          <label htmlFor="sku">Stock keeping unit</label>
          <input
            type="text"
            id="SKU"
            name="SKU"
            placeholder="Stock keeping unit"
            onChange={(event) => handleInputProduct(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          />
        </div>
        <div className="my-4">
          <label htmlFor="sku">Universal product code</label>
          <input
            type="number"
            id="UPC"
            name="UPC"
            placeholder="Universal product code"
            onChange={(event) => handleInputProduct(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          />
        </div>
        <div className="my-4">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Product's name"
            onChange={(event) => handleInputProduct(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          />
        </div>
        <div className="my-4">
          <label htmlFor="brand">Brand</label>
          <input
            id="brand"
            type="text"
            name="brand"
            placeholder="Product's brand"
            onChange={(event) => handleInputProduct(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          />
        </div>
        <div className="my-4 flex flex-col">
          <label htmlFor="originalPrice">Original price</label>
          <div className="flex justify-start items-center">
            <input
              type="number"
              id="originalPrice"
              name="originalPrice"
              placeholder="Original price"
              onChange={(event) => handleInputProduct(event)}
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            />
          </div>
        </div>
        <div className="my-4 flex flex-col">
          <label htmlFor="salePrice">Sale price</label>
          <div className="flex justify-start items-center">
            <input
              type="number"
              id="salePrice"
              name="salePrice"
              placeholder="Sale price"
              onChange={(event) => handleInputProduct(event)}
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="mr-4 my-4 flex flex-col">
          <label htmlFor="category">For gender</label>
          <select
            id="forGender"
            name="forGender"
            value={forGender}
            onChange={(event) => handleForGenderSelectProduct(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl cursor-pointer outline-none appearance-none"
          >
            <option value="-1" hidden>
              Select a kind of gender
            </option>
            <option value="0">Male</option>
            <option value="1">Female</option>
            <option value="2">Unisex</option>
          </select>
        </div>
        <div className="mr-4 my-4 flex flex-col">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={categoryList[0]}
            onChange={(event) => handleCategorySelectProduct(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl cursor-pointer outline-none appearance-none"
          >
            <option value="-1" hidden>
              Select a category
            </option>

            {renderCategories()}
          </select>
        </div>
        <div className="mr-4 my-4 flex flex-col">
          <label htmlFor="unit">Unit</label>
          <select
            id="unit"
            name="unit"
            value={unit}
            onChange={(event) => handleUnitSelectProduct(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl cursor-pointer outline-none appearance-none"
          >
            <option value="-1" hidden>
              Select a unit
            </option>

            {renderUnits()}
          </select>
        </div>
      </div>
      <table className="w-full h-full my-4 table-auto text-sm text-left">
        <thead className="bg-gray-100 text-gray-600 font-medium border-b">
          <tr>
            <th className="py-2 px-4">Color</th>
            <th className="py-2 px-4">Size</th>
            <th className="py-2 px-4">Initial inventory</th>
            <th className="py-2 px-4">Minimum inventory</th>
            <th className="py-2 px-4">Maximum inventory</th>
            <th className="py-2 px-4">Storage location</th>
            <th className="py-2 px-4"></th>
          </tr>
        </thead>
        <tbody className="text-gray-600 divide-y">
          {renderProductDetails()}
        </tbody>
      </table>
      <div className="my-4 flex justify-center">
        <div
          onClick={() => handleIncreaseRowInputsAmount()}
          className="w-8 h-8 px-2 py-1 border rounded-full text-gray-400 cursor-pointer hover:bg-gray-200 hover:text-gray-600"
        >
          {icons.plus}
        </div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Button
          leftIcon={icons.plus}
          rightIcon=""
          className="mt-4 p-4"
          onClick={() => handleCreateProduct()}
        >
          Create product
        </Button>
      </div>
    </Modal>
  ) : (
    <div></div>
  );
};

export default CreateProduct;
