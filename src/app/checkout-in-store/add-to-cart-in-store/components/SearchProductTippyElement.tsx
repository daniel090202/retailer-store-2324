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
    <div className="p-4 hover:bg-slate-100" onClick={onClick}>
      <p className="mx-2 text-lg font-bold ">{title}</p>
      <p className="mx-2 italic">Stock barcode: {SKU}</p>
    </div>
  );
};

export default SearchProductTippyElement;
