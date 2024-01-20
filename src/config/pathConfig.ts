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
  customers: {
    all: "/services/customers/all",
    archived: "/services/customers/archived",
  },
  counter: "/counter",
};

const navigationRoutes: Array<{
  title: string;
  path: string;
  icon: React.ReactNode | undefined;
}> = [
  {
    title: "Home",
    path: appRoutes.home,
    icon: undefined,
  },
  {
    title: "Services",
    path: appRoutes.users.all,
    icon: undefined,
  },
  {
    title: "Counter",
    path: appRoutes.counter,
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
    path: appRoutes.users.all,
    icon: icons.userGroup,
  },
  {
    title: "Product catalog",
    path: appRoutes.products.all,
    icon: icons.shirt,
  },
  {
    title: "Customer relationship",
    path: appRoutes.customers.all,
    icon: icons.users,
  },
];

export { appRoutes, navigationRoutes, servicesSidebarRoutes };
