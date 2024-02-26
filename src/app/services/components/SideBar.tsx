"use client";

import { useSession } from "next-auth/react";

import { servicesSidebarRoutes } from "@/config/pathConfig";

import Item from "./Item";
import Menu from "./Menu";
import { User } from "@/models";

const SideBar = () => {
  const session = useSession();

  const user: User = session.data?.user;

  return (
    <aside className="md:w-1/4 md:m-2">
      <Menu className="flex md:flex-col">
        {servicesSidebarRoutes.map((route, index) => {
          const path = `${route.path}?page=1`;

          const isAuthenticated = route.shownTarget.find((target) => {
            return target === user?.position;
          });

          if (isAuthenticated) {
            return (
              <Item
                key={index}
                path={path}
                icon={route.icon}
                title={route.title}
                pathPrefix={route.pathPrefix}
              />
            );
          }
        })}
      </Menu>
    </aside>
  );
};

export default SideBar;
