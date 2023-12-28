import PropTypes from "prop-types";

import SideBar from "./components/SideBar";

const CounterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:flex">
      <SideBar />
      {children}
    </div>
  );
};

CounterLayout.propsType = {
  children: PropTypes.node.isRequired,
};

export default CounterLayout;
