"use client";

import Button from "@/components/Button";

const SideBar = () => {
  const handleForwardOrder = () => {
    return;
  };

  return (
    <aside className="md:w-1/4 md:mx-2 md:my-4 text-xl font-medium rounded-xl">
      <div className="my-4">
        <label htmlFor="phone">Product</label>
        <input
          id="product"
          name="product"
          placeholder="Product's name or barcode"
          className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
        />
      </div>
      <div className="p-4 rounded-xl border-2">
        <div className="my-2 flex justify-between">
          <span>Total products:</span>
          <span>12</span>
        </div>
        <div className="my-2 flex justify-between">
          <span>Total expense:</span>
          <span>300.000</span>
        </div>
        <div className="my-2 flex justify-between">
          <span>Payment:</span>
          <span>400.000</span>
        </div>
        <div className="my-2 flex justify-between">
          <span>Coupons:</span>
          <span>0</span>
        </div>
        <hr className="my-2" />
        <div className="my-2 flex justify-between">
          <span>Exchange:</span>
          <span>100.000</span>
        </div>
      </div>
      <Button
        leftIcon=""
        rightIcon=""
        className="w-full my-4 p-4 text-xl"
        onClick={() => handleForwardOrder()}
      >
        Forward
      </Button>
    </aside>
  );
};

export default SideBar;
