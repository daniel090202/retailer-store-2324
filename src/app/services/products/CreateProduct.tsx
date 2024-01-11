import { useState } from "react";

import icons from "@/assets/Icons";

import Modal from "@/components/Modal";
import Button from "@/components/Button";

import {
  allProductUnits,
  allStorageLocation,
  allProductCategories,
} from "@/utils/productProperties";

const CreateProduct = ({
  createProductModal,
  setCreateProductModal,
}: {
  createProductModal: boolean;
  setCreateProductModal: (value: boolean) => void;
}) => {
  const [sizeAmount, setSizeAmount] = useState(1);
  const [colorAmount, setColorAmount] = useState(1);
  const [salePriceAmount, setSalePriceAmount] = useState(1);
  const [originalPriceAmount, setOriginalPriceAmount] = useState(1);

  const [unit, setUnit] = useState("-1");
  const [category, setCategory] = useState("-1");
  const [forGender, setForGender] = useState("-1");
  const [storageLocation, setStorageLocation] = useState("-1");

  const [sizeList, setSizeList] = useState<string[]>([]);
  const [colorList, setColorList] = useState<string[]>([]);

  const [product, setProduct] = useState<{
    SKU: string;
    UPC: string;
    name: string;
    brand: string;
    forGender: string;
    category: string;
    size: string[];
    color: string[];
    originalPrice: string;
    salePrice: string;
    unit: string;
    initialInventory: string;
    minimumInventory: string;
    maximumInventory: string;
    storageLocation: string;
  }>({
    SKU: "",
    UPC: "",
    name: "",
    brand: "",
    forGender: "",
    category: "",
    size: [],
    color: [],
    originalPrice: "",
    salePrice: "",
    unit: "",
    initialInventory: "",
    minimumInventory: "",
    maximumInventory: "",
    storageLocation: "",
  });

  const handleColorInputProduct = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const startIndex = parseInt(event.target.name.split("_")[1]);

    if (startIndex < colorList.length) {
      colorList.splice(startIndex, 1, event.target.value);
    } else {
      colorList.splice(startIndex, 0, event.target.value);
    }

    setColorList([...colorList]);
    setProduct({ ...product, color: [...colorList] });
  };

  const handleSizeInputProduct = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const startIndex = parseInt(event.target.name.split("_")[1]);

    if (startIndex < sizeList.length) {
      sizeList.splice(startIndex, 1, event.target.value);
    } else {
      sizeList.splice(startIndex, 0, event.target.value);
    }

    setSizeList([...sizeList]);
    setProduct({ ...product, size: [...sizeList] });
  };

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

  const renderAddColorInput = () => {
    const colorInputs = [];

    for (let i: number = 0; i < colorAmount; i++) {
      colorInputs.push(
        <input
          key={i}
          type="text"
          id={`color${i}`}
          name={`color_${i}`}
          placeholder="Color"
          onChange={(event) => {
            handleColorInputProduct(event);
          }}
          className="w-1/6 p-4 my-2 mr-4 border rounded-xl shadow-xl outline-none"
        />
      );
    }

    return colorInputs;
  };

  const renderAddSizeInput = () => {
    const sizeInputs = [];

    for (let i: number = 0; i < sizeAmount; i++) {
      sizeInputs.push(
        <input
          key={i}
          type="text"
          id={`size${i}`}
          name={`size_${i}`}
          placeholder="Size"
          onChange={(event) => {
            handleSizeInputProduct(event);
          }}
          className="w-1/6 p-4 my-2 mr-4 border rounded-xl shadow-xl outline-none"
        />
      );
    }

    return sizeInputs;
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
    setCategory(event.target.value);
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleUnitSelectProduct = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setUnit(event.target.value);
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleStorageLocationSelectProduct = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setStorageLocation(event.target.value);
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleCreateProduct = () => {
    return;
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
      <div className="mx-auto py-3 space-y-3 grid grid-cols-5 gap-x-5">
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
        <div className="my-4">
          <label htmlFor="initialInventory">Initial inventory</label>
          <input
            type="number"
            id="initialInventory"
            name="initialInventory"
            placeholder="Initial inventory"
            onChange={(event) => handleInputProduct(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          />
        </div>
        <div className="my-4">
          <label htmlFor="minimumInventory">Minimum inventory</label>
          <input
            type="number"
            id="minimumInventory"
            name="minimumInventory"
            placeholder="Minimum inventory"
            onChange={(event) => handleInputProduct(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          />
        </div>
        <div className="my-4">
          <label htmlFor="maximumInventory">Maximum inventory</label>
          <input
            type="number"
            id="maximumInventory"
            name="maximumInventory"
            placeholder="Maximum inventory"
            onChange={(event) => handleInputProduct(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          />
        </div>
      </div>
      <div className="mx-auto py-3 space-y-3 grid grid-cols-4 gap-x-4">
        <div className="my-4 flex flex-col">
          <label htmlFor="storageLocation">Storage location</label>
          <select
            id="storageLocation"
            name="storageLocation"
            value={storageLocation}
            onChange={(event) => handleStorageLocationSelectProduct(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl cursor-pointer outline-none appearance-none"
          >
            <option value="-1" hidden>
              Select a location
            </option>

            {renderStorageLocation()}
          </select>
        </div>
        <div className="my-4 flex flex-col">
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
        <div className="my-4 flex flex-col">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(event) => handleCategorySelectProduct(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl cursor-pointer outline-none appearance-none"
          >
            <option value="-1" hidden>
              Select a category
            </option>

            {renderCategories()}
          </select>
        </div>
        <div className="my-4 flex flex-col">
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
      <div className="mx-auto py-3 space-y-3">
        <div className="my-4 w-full flex flex-col">
          <label htmlFor="color">Color</label>
          <div className="flex justify-start items-center">
            {renderAddColorInput()}
            <div
              onClick={() => setColorAmount(colorAmount + 1)}
              className="px-2 py-1 border rounded-full text-gray-200 cursor-pointer hover:bg-gray-200 hover:text-gray-400"
            >
              {icons.plus}
            </div>
          </div>
        </div>
        <div className="my-4 flex flex-col">
          <label htmlFor="size">Size</label>
          <div className="flex justify-start items-center">
            {renderAddSizeInput()}
            <div
              onClick={() => setSizeAmount(sizeAmount + 1)}
              className="px-2 py-1 border rounded-full text-gray-200 cursor-pointer hover:bg-gray-200 hover:text-gray-400"
            >
              {icons.plus}
            </div>
          </div>
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
