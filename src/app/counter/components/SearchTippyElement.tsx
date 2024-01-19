const SearchTippyElement = ({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) => {
  return (
    <div className="p-4 hover:bg-slate-100" onClick={onClick}>
      <span className="mx-2">{title}</span>
    </div>
  );
};

export default SearchTippyElement;
