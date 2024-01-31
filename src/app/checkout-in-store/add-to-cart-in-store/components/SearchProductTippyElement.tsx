const SearchProductTippyElement = ({
  SKU = "000000000",
  title = "Not found",
  onClick,
}: {
  SKU: string;
  title: string;
  onClick: () => void;
}) => {
  return (
    <div className="p-4 cursor-pointer hover:bg-slate-100" onClick={onClick}>
      <div className="flex justify-between">
        <span className="text-lg font-bold">Stock barcode:</span>
        <span className="">{SKU}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-lg font-bold">Name:</span>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default SearchProductTippyElement;
