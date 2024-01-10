import PropTypes from "prop-types";

const UserTippyElement = ({
  icon,
  title,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}) => {
  return (
    <div onClick={onClick} className="p-4 hover:bg-slate-100">
      <span>{icon}</span>
      <span className="mx-2">{title}</span>
    </div>
  );
};

UserTippyElement.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
};

export default UserTippyElement;
