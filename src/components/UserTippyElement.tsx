import PropTypes from "prop-types";

const UserTippyElement = ({
  key,
  icon,
  title,
}: {
  key: number;
  icon: React.ReactNode;
  title: string;
}) => {
  return (
    <div key={key} className="p-4 hover:bg-slate-100">
      <span>{icon}</span>
      <span className="mx-2">{title}</span>
    </div>
  );
};

UserTippyElement.propTypes = {
  key: PropTypes.number,
  icon: PropTypes.node,
  title: PropTypes.string,
};

export default UserTippyElement;
