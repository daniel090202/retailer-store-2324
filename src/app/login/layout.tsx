import PropTypes from "prop-types";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="justify-center md:flex">{children}</div>;
};

LoginLayout.propsType = {
  children: PropTypes.node.isRequired,
};

export default LoginLayout;
