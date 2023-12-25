import React from "react";
import PropTypes from "prop-types";

const Menu = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return <nav className={className}>{children}</nav>;
};

Menu.propsType = {
  children: PropTypes.node.isRequired,
};

export default Menu;
