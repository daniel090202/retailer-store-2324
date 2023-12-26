import "tippy.js/dist/tippy.css";
import PropTypes from "prop-types";
import HeadlessTippy from "@tippyjs/react/headless";

import icons from "@/assets/Icons";

import UserTippyElement from "./UserTippyElement";

const UserTippy = ({
  profileButtonClicked = false,
  setProfileButtonClicked,
  children,
}: {
  profileButtonClicked: boolean;
  setProfileButtonClicked: (value: boolean) => void;
  children: React.ReactElement;
}) => {
  const tippyContents = [
    {
      icon: icons.user,
      title: "View profile",
    },
    {
      icon: icons.listCheck,
      title: "Tasks",
    },
    {
      icon: icons.gear,
      title: "Settings",
    },
  ];

  const renderTippyContent = ({ ...attrs }) => {
    return (
      <div
        className="z-10 w-40 h-min absolute translate-x-[-50%] my-4 py-2 border text-base shadow-xl bg-white rounded-xl"
        {...attrs}
      >
        {tippyContents.map((content, index) => {
          return (
            <UserTippyElement
              key={index}
              icon={content.icon}
              title={content.title}
            />
          );
        })}
        <hr />
        <UserTippyElement
          key={tippyContents.length}
          icon={icons.logout}
          title={"Log out"}
        />
      </div>
    );
  };

  return (
    <HeadlessTippy
      visible={profileButtonClicked}
      interactive={true}
      placement="bottom"
      render={(attrs) => renderTippyContent(attrs)}
    >
      {children}
    </HeadlessTippy>
  );
};

UserTippy.propTypes = {
  profileButtonClicked: PropTypes.bool,
  setProfileButtonClicked: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default UserTippy;
