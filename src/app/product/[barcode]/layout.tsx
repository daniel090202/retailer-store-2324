import PropTypes from "prop-types";

import SideBar from "./components/SideBar";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:flex">
      <SideBar />
      {children}
    </div>
  );
};

ProductLayout.propsType = {
  children: PropTypes.node.isRequired,
};

export default ProductLayout;
