"use client";

import Item from "./Item";
import Menu from "./Menu";

import { servicesSidebarRoutes } from "@/config/pathConfig";

const SideBar = () => {
  return (
    <aside className="md:w-1/4 md:m-2">
      <Menu className="flex md:flex-col">
        {servicesSidebarRoutes.map((route, index) => {
          return (
            <Item
              key={index}
              title={route.title}
              path={route.path}
              icon={route.icon}
            />
          );
        })}
      </Menu>
    </aside>
  );
};

export default SideBar;
