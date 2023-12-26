import icons from "@/assets/Icons/index";

const Filter = () => {
  return (
    <div className="my-4 text-base flex justify-start items-center">
      <div className="p-2 border rounded-xl shadow-lg bg-white">
        <label htmlFor="filter" className="mx-2">
          {icons.filter}
        </label>
        <select
          name="filter"
          id="filter"
          className="appearance-none outline-none"
        >
          <option value="0">All</option>
          <option value="1">Name</option>
          <option value="2">Color</option>
          <option value="3">Size</option>
          <option value="4">Price</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="p-2 mx-2 border rounded-xl shadow-lg outline-none"
      />
    </div>
  );
};

export default Filter;
