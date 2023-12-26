import PropTypes from "prop-types";

const Button = ({
  children,
  leftIcon,
  rightIcon,
  className,
  onClick,
}: {
  children: React.ReactNode;
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
  className: string;
  onClick: () => void | undefined;
}) => {
  return (
    <button
      className={`${className} p-2 border text-base text-gray-600 rounded-xl shadow-lg bg-white hover:text-gray-800 hover:bg-slate-100 md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1`}
      onClick={onClick}
    >
      {leftIcon && <span>{leftIcon}</span>}
      <span className="mx-2">{children}</span>
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
