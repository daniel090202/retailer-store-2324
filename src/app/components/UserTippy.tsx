import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import "tippy.js/dist/tippy.css";
import HeadlessTippy from "@tippyjs/react/headless";

import icons from "@/assets/Icons";

import { appRoutes } from "@/config/pathConfig";

import { User } from "@/models";

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
  const router = useRouter();
  const session = useSession();

  const user: User | undefined = session.data?.user;

  const tippyContents: Array<{
    icon: React.ReactNode;
    title: string;
    onClick: () => void;
  }> = [
    {
      icon: icons.user,
      title: "View profile",
      onClick: () => handleViewProfile(),
    },
    {
      icon: icons.listCheck,
      title: "Tasks",
      onClick: () => handleViewTasks(),
    },
    {
      icon: icons.gear,
      title: "Settings",
      onClick: () => handleViewSettings(),
    },
  ];

  const renderAuthSelection = () => {
    if (session.status !== "unauthenticated") {
      return (
        <UserTippyElement
          key={tippyContents.length}
          icon={icons.entering}
          title={"Log out"}
          onClick={() => handleLogOut()}
        />
      );
    } else {
      return (
        <UserTippyElement
          key={tippyContents.length}
          icon={icons.entering}
          title={"Log in"}
          onClick={() => handleLogIn()}
        />
      );
    }
  };

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
              onClick={content.onClick}
            />
          );
        })}
        <hr />
        {renderAuthSelection()}
      </div>
    );
  };

  const handleViewProfile = () => {
    setProfileButtonClicked(!profileButtonClicked);

    if (user !== undefined) {
      router.push(appRoutes.user + `/${user?.userName}`);
    } else {
      router.push("/api/auth/signin");
    }
  };

  const handleViewTasks = () => {
    setProfileButtonClicked(!profileButtonClicked);
  };

  const handleViewSettings = () => {
    setProfileButtonClicked(!profileButtonClicked);
  };

  const handleLogIn = () => {
    setProfileButtonClicked(!profileButtonClicked);

    router.push("/api/auth/signin");
  };

  const handleLogOut = () => {
    setProfileButtonClicked(!profileButtonClicked);

    router.push("/api/auth/signout");
  };

  return (
    <HeadlessTippy
      placement="bottom"
      interactive={true}
      interactiveDebounce={1000}
      visible={profileButtonClicked}
      render={(attrs) => renderTippyContent(attrs)}
      onClickOutside={() => {
        setProfileButtonClicked(!profileButtonClicked);
      }}
    >
      {children}
    </HeadlessTippy>
  );
};

export default UserTippy;
