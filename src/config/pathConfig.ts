import icons from "@/assets/Icons/index";

const userProfilePath = "/user";
const productDetailsPath = "/product";
const customerProfilePath = "/customer";

type routeProperties = Array<{
  title: string;
  path: string;
  icon: React.ReactNode | undefined;
}>;

const appRoutes = {
  home: "/",
  user: "/user",
  users: "/user",
  login: "/login",
  product: "product",
  products: "products",
  customer: "customer",
  customers: "customers",
};

const navigationRoutes: routeProperties = [
  {
    title: "Home",
    path: "/",
    icon: undefined,
  },
  {
    title: "Services",
    path: "/services/users",
    icon: undefined,
  },
  {
    title: "Counter",
    path: "/counter",
    icon: undefined,
  },
];

const servicesSidebarRoutes: routeProperties = [
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
  customerProfilePath,
  appRoutes,
  navigationRoutes,
  servicesSidebarRoutes,
};
