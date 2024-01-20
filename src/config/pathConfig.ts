import icons from "@/assets/Icons/index";

const appRoutes = {
  home: "/",
  user: "/user",
  users: {
    all: "/services/users/all",
    archived: "/services/users/archived",
  },
  login: "/login",
  product: "/product",
  products: {
    all: "/services/products/all",
    archived: "/services/products/archived",
  },
  customer: "/customer",
  customers: "/customers",
};

const navigationRoutes: Array<{
  title: string;
  path: string;
  icon: React.ReactNode | undefined;
}> = [
  {
    title: "Home",
    path: "/",
    icon: undefined,
  },
  {
    title: "Services",
    path: "/services/users/all",
    icon: undefined,
  },
  {
    title: "Counter",
    path: "/counter",
    icon: undefined,
  },
];

const servicesSidebarRoutes: Array<{
  title: string;
  path: string;
  icon: React.ReactNode | undefined;
}> = [
  {
    title: "Human resources",
    path: "/services/users/all",
    icon: icons.userGroup,
  },
  {
    title: "Product catalog",
    path: "/services/products/all",
    icon: icons.shirt,
  },
  {
    title: "Customer relationship",
    path: "/services/customers",
    icon: icons.users,
  },
];

export {
  appRoutes,
  navigationRoutes,
  servicesSidebarRoutes,
};
