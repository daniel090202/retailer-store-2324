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
      className={`${className} p-2 border text-lg text-gray-400 rounded-xl bg-gray-200 hover:text-gray-600 hover:bg-slate-100`}
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
