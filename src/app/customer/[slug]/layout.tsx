import PropTypes from "prop-types";

import SideBar from "./components/SideBar";

const CustomerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:flex">
      <SideBar />
      {children}
    </div>
  );
};

CustomerLayout.propsType = {
  children: PropTypes.node.isRequired,
};

export default CustomerLayout;
