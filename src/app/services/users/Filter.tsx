import icons from "@/assets/Icons/index";

const Filter = () => {
  return (
    <div className="my-4 text-base flex justify-start items-center">
      <div className="p-2 border rounded-xl bg-white shadow-lg">
        <label htmlFor="filter" className="mx-2">
          {icons.filter}
        </label>
        <select
          name="filter"
          id="filter"
          className="cursor-pointer appearance-none outline-none"
        >
          <option value="0">All</option>
          <option value="1">Age</option>
          <option value="2">Gender</option>
          <option value="3">Address</option>
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
