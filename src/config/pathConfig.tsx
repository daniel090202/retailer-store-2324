import icons from "@/assets/Icons/index";

const appRoutes = {
  home: "/",
};

const navigationRoutes = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Services",
    path: "/services/users",
  },
  {
    title: "About us",
    path: "/about",
  },
];

const servicesSidebarRoutes = [
  {
    title: "Human resources",
    path: "/services/users",
    icon: icons.userGroup,
  },
  {
    title: "Product catalog",
    path: "/services/products",
    icon: icons.shirt,
  },
  {
    title: "Customer relationship",
    path: "/services/customers",
    icon: icons.users,
  },
];

export { appRoutes, navigationRoutes, servicesSidebarRoutes };
