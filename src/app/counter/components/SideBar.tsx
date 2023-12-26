"use client";

const SideBar = () => {
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
      <div>
        <label htmlFor="phone">Customer</label>
        <input
          id="phone"
          name="phone"
          placeholder="Customer's phone"
          className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
        />
      </div>
    </aside>
  );
};

export default SideBar;
