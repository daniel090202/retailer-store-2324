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
  checkout: {
    inStore: {
      checkout: "/checkout-in-store/add-to-cart-in-store",
      confirmOrder: "/checkout-in-store/confirm-order-in-store",
    },
    onlineOrders: {
      orders: "/website-orders",
    },
  },
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
    path: appRoutes.checkout.inStore.checkout,
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
