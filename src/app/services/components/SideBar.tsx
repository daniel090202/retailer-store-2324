"use client";

import Item from "./Item";
import Menu from "./Menu";

import { servicesSidebarRoutes } from "@/config/pathConfig";

const SideBar = () => {
  return (
    <aside className="md:w-1/4 md:m-2">
      <Menu className="flex md:flex-col">
        {servicesSidebarRoutes.map((route, index) => {
          const path = `${route.path}?page=1`;

          return (
            <Item
              key={index}
              path={path}
              icon={route.icon}
              title={route.title}
            />
          );
        })}
      </Menu>
    </aside>
  );
};

export default SideBar;
