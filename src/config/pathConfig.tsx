import icons from "@/assets/Icons/index";

const userProfilePath = "/user";
const productDetailsPath = "/product";

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
    title: "Counter",
    path: "/counter",
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

export {
  userProfilePath,
  productDetailsPath,
  appRoutes,
  navigationRoutes,
  servicesSidebarRoutes,
};
