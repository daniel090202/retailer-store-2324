import icons from "@/assets/Icons/index";

const Card = () => {
  const product = {
    barcode: "SWEATER0001",
    name: "Christmas Cardigan",
    category: 2,
    color: ["#9AC8EB"],
    size: ["XS"],
    salePrice: 350000,
    purchaseAmount: 6,
  };

  const totalPriceEachItem = product.salePrice * product.purchaseAmount;

  const handleRemoveCartItem = () => {
    return;
  };

  return (
    <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-600 md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-2">
      <div className="w-full flex justify-end">
        <span
          className="px-2 py-1 text-sm rounded-full hover:bg-gray-200"
          onClick={() => {
            handleRemoveCartItem();
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
          style={{ backgroundColor: product.color[0] }}
          className={"w-6 h-6 rounded-full"}
        ></span>
      </div>
      <div className="my-2 flex justify-between font-normal text-gray-500 dark:text-gray-400">
        <span>Amount:</span>
        <span>{product.purchaseAmount}</span>
      </div>
      <div className="my-2 flex justify-between font-normal text-gray-500 dark:text-gray-400">
        <span>Unit:</span>
        <span>{product.salePrice.toLocaleString()} VND</span>
      </div>
      <div className="my-2 flex justify-between font-normal text-gray-500 dark:text-gray-400">
        <span>Total:</span>
        <span>{totalPriceEachItem.toLocaleString()} VND</span>
      </div>
      <a
        href="#"
        className="inline-flex items-center mt-4 text-gray-400 cursor-pointer hover:underline hover:text-gray-600"
      >
        <span>See more details</span>
        <span className="mx-2">{icons.solidLinkDirect}</span>
      </a>
    </div>
  );
};

export default Card;
