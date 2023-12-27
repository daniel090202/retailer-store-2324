import { useState } from "react";
import PropTypes from "prop-types";

import icons from "@/assets/Icons";

const CreateProduct = ({
  addProductModal,
  setAddProductModal,
}: {
  addProductModal: boolean;
  setAddProductModal: (value: boolean) => void;
}) => {
  const [originalPriceAmount, setOriginalPriceAmount] = useState(1);
  const [salePriceAmount, setSalePriceAmount] = useState(1);
  const [colorAmount, setColorAmount] = useState(1);
  const [sizeAmount, setSizeAmount] = useState(1);

  const renderAddColorInput = () => {
    const colorInputs = [];

    for (let i: number = 0; i < colorAmount; i++) {
      colorInputs.push(
        <input
          id={`color${i}`}
          name={`color${i}`}
          placeholder="Color"
          className="w-1/4 p-4 my-2 mr-4 border rounded-xl shadow-xl outline-none"
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
          id={`size${i}`}
          name={`size${i}`}
          placeholder="Size"
          className="w-1/4 p-4 my-2 mr-4 border rounded-xl shadow-xl outline-none"
        />
      );
    }

    return sizeInputs;
  };

  const renderAddOriginalPriceInput = () => {
    const originalPriceInputs = [];

    for (let i: number = 0; i < originalPriceAmount; i++) {
      originalPriceInputs.push(
        <input
          id={`originalPrice${i}`}
          name={`originalPrice${i}`}
          placeholder="Original"
          className="w-1/4 p-4 my-2 mr-4 border rounded-xl shadow-xl outline-none"
        />
      );
    }

    return originalPriceInputs;
  };

  const renderAddSalePriceInput = () => {
    const salePriceInputs = [];

    for (let i: number = 0; i < salePriceAmount; i++) {
      salePriceInputs.push(
        <input
          id={`salePrice${i}`}
          name={`salePrice${i}`}
          placeholder="Sale"
          className="w-1/4 p-4 my-2 mr-4 border rounded-xl shadow-xl outline-none"
        />
      );
    }

    return salePriceInputs;
  };

  return addProductModal ? (
    <div className="fixed inset-0 z-10 text-base overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setAddProductModal(false)}
      ></div>
      <div className="flex items-center min-h-screen p-8">
        <div className="relative w-full max-w-6xl max-h-[600px] p-4 mx-auto bg-white rounded-xl shadow-lg overflow-y-auto">
          <div className="my-2 flex justify-between">
            <h1 className="text-2xl">Create new product</h1>
            <span
              className="px-2 py-1 rounded-full hover:bg-gray-200"
              onClick={() => setAddProductModal(false)}
            >
              {icons.cross}
            </span>
          </div>
          <hr />
          <div className="mx-auto py-3 space-y-3 grid grid-cols-2 gap-x-4">
            <div className="my-4">
              <label htmlFor="barcode">Barcode</label>
              <input
                id="barcode"
                name="barcode"
                placeholder="Product's barcode"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            </div>
            <div className="my-4">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                placeholder="Product's name"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            </div>
            <div className="my-4">
              <label htmlFor="brand">Brand</label>
              <input
                id="brand"
                name="brand"
                placeholder="Product's brand"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            </div>
            <div className="my-4 flex flex-col">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                defaultValue={0}
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none appearance-none"
              >
                <option value="0" hidden>
                  Select a type
                </option>
                <option value="1">Phone</option>
                <option value="2">Tablet</option>
                <option value="3">Laptop</option>
              </select>
            </div>
            <div className="my-4 flex flex-col">
              <label htmlFor="color">Color</label>
              <div className="flex justify-start items-center">
                {renderAddColorInput()}
                <div
                  onClick={() => setColorAmount(colorAmount + 1)}
                  className="px-2 py-1 border rounded-full text-gray-200 hover:bg-gray-200 hover:text-gray-400"
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
                  className="px-2 py-1 border rounded-full text-gray-200 hover:bg-gray-200 hover:text-gray-400"
                >
                  {icons.plus}
                </div>
              </div>
            </div>
            <div className="my-4 flex flex-col">
              <label htmlFor="originalPrice">Original price</label>
              <div className="flex justify-start items-center">
                {renderAddOriginalPriceInput()}
                <div
                  onClick={() =>
                    setOriginalPriceAmount(originalPriceAmount + 1)
                  }
                  className="px-2 py-1 border rounded-full text-gray-200 hover:bg-gray-200 hover:text-gray-400"
                >
                  {icons.plus}
                </div>
              </div>
            </div>
            <div className="my-4 flex flex-col">
              <label htmlFor="salePrice">Sale price</label>
              <div className="flex justify-start items-center">
                {renderAddSalePriceInput()}
                <div
                  onClick={() => setSalePriceAmount(salePriceAmount + 1)}
                  className="px-2 py-1 border rounded-full text-gray-200 hover:bg-gray-200 hover:text-gray-400"
                >
                  {icons.plus}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

CreateProduct.propTypes = {
  addProductModal: PropTypes.bool,
  setAddProductModal: PropTypes.func,
};

export default CreateProduct;
