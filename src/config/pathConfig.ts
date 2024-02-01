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
  customers: {
    all: "/services/customers/all",
    archived: "/services/customers/archived",
  },
  checkout: {
    inStore: {
      checkout: "/checkout-in-store/add-to-cart-in-store",
    },
    onlineOrders: {
      orders: "/website-orders",
    },
  },

  getCustomerPath: function (
    phone: string = "",
    option: number = 0,
    orderID: number = 0,
  ) {
    switch (option) {
      case 0:
        return `/customer/${phone}/profile`;
      case 1:
        return `/customer/${phone}/purchased-history/all`;
      case 2:
        return `/customer/${phone}/purchased-history/${orderID}`;
      default:
        return this.customers.all;
    }
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
