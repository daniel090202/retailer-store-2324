const Button = ({
  type = "default",
  leftIcon,
  rightIcon,
  className,
  onClick,
  children,
  ...props
}: {
  type?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  onClick?: () => Promise<void> | void | undefined;
  children: React.ReactNode;
}) => {
  const handleDisabledButton = () => {
    return;
  };

  const handleButtonStyle = (type: string): string => {
    switch (type) {
      case "disabled":
        return "p-2 border text-base text-gray-600 rounded-xl bg-gray-200 cursor-not-allowed";
      default:
        return "p-2 border text-base text-gray-600 rounded-xl shadow-lg bg-white hover:text-gray-800 hover:bg-slate-100 md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1";
    }
  };

  return (
    <button
      {...props}
      onClick={
        type !== "disabled"
          ? onClick
          : () => {
              handleDisabledButton();
            }
      }
      className={`${handleButtonStyle(type)} ${className}`}
    >
      {leftIcon && <span>{leftIcon}</span>}
      <span className="mx-2">{children}</span>
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};

export default Button;
