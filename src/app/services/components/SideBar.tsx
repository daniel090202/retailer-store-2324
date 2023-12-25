"use client";

import Item from "./Item";
import Menu from "./Menu";

import { servicesSidebarRoutes } from "@/config/pathConfig";

const SideBar = () => {
  return (
    <aside className="w-1/3 m-2">
      <Menu className="flex flex-col">
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
