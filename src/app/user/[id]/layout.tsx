import PropTypes from "prop-types";

import SideBar from "./components/SideBar";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:flex">
      <SideBar />
      {children}
    </div>
  );
};

UserLayout.propsType = {
  children: PropTypes.node.isRequired,
};

export default UserLayout;
