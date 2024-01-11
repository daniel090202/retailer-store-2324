const Menu = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return <nav className={className}>{children}</nav>;
};

export default Menu;
