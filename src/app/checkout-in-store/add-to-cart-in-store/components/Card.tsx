import icons from "@/assets/Icons/index";
import { useAppDispatch } from "@/lib/redux/store";
import {
  removeCartItem,
  increaseCartItem,
  decreaseCartItem,
} from "@/lib/redux/features";

import { Product } from "@/models";

const Card = ({
  productData,
}: {
  productData: {
    product: Product;
    purchasedAmount: number;
  };
}) => {
  const dispatch = useAppDispatch();

  const product = productData.product;
  const purchasedAmount = productData.purchasedAmount;

  const totalPriceEachItem = product.salePrice * purchasedAmount;

  const handleAddItem = () => {
    dispatch(increaseCartItem(product.SKU));
  };

  const handleMinusItem = () => {
    if (purchasedAmount <= 1) {
      return;
    }

    dispatch(decreaseCartItem(product.SKU));
  };

  const handleRemoveItem = () => {
    dispatch(removeCartItem(product.SKU));
  };

  return (
    <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-600 md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-2">
      <div className="w-full flex justify-end">
        <span
          className="px-2 py-1 text-sm rounded-full hover:bg-gray-200"
          onClick={() => {
            handleRemoveItem();
          }}
        >
          {icons.cross}
        </span>
      </div>
      <hr className="my-2" />
      <a href="#">
        <span className="my-2 text-xl font-semibold capitalize tracking-tight text-gray-600 flex justify-center dark:text-white">
          {product.name}
        </span>
      </a>
      <hr className="my-2" />
      <div className="my-2 flex justify-between font-normal text-gray-500 dark:text-gray-400">
        <span>Color:</span>
        <span
          style={{ backgroundColor: product.productDetail[0].color }}
          className={"w-6 h-6 rounded-full"}
        ></span>
      </div>
      <div className="my-2 flex justify-between font-normal text-gray-500 dark:text-gray-400">
        <span>Amount:</span>
        <span>{purchasedAmount}</span>
      </div>
      <div className="my-2 flex justify-between font-normal text-gray-500 dark:text-gray-400">
        <span>Unit:</span>
        <span>{product.salePrice.toLocaleString()} VND</span>
      </div>
      <div className="my-2 flex justify-between font-normal text-gray-500 dark:text-gray-400">
        <span>Total:</span>
        <span>{totalPriceEachItem.toLocaleString()} VND</span>
      </div>
      <div className="mt-6 w-full flex justify-center">
        <span
          className="mx-2 px-2 py-1 text-sm border rounded-full hover:bg-gray-200"
          onClick={() => {
            handleAddItem();
          }}
        >
          {icons.plus}
        </span>
        <span
          className="mx-2 px-2 py-1 text-sm border rounded-full hover:bg-gray-200"
          onClick={() => {
            handleMinusItem();
          }}
        >
          {icons.minus}
        </span>
        <span
          className="mx-2 px-2 py-1 text-sm border rounded-full hover:bg-gray-200"
          onClick={() => {
            handleRemoveItem();
          }}
        >
          {icons.cross}
        </span>
      </div>
    </div>
  );
};

export default Card;
