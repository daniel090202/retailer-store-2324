import PropTypes from "prop-types";

const Header = ({ children }: { children: React.ReactNode }) => {
  return <header>{children}</header>;
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
