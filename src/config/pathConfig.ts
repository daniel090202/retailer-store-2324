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
  salesPerformance: {
    statistic: "/services/sales-performance/statistic",
  },
  checkout: {
    inStore: {
      checkout: "/checkout-in-store/add-to-cart-in-store",
    },
    onlineOrders: {
      orders: "/website-orders",
    },
  },
  notifications: {
    details: "/notifications",
    all: "/notifications/all",
    archived: "/notifications/archived",
  },
  getNotificationPath: function (id: number): string {
    return `/notifications/${id}`;
  },
  getCustomerPath: function (
    phone: string = "",
    option: number = 0,
    orderID: number = 0
  ): string {
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

const servicesSidebarRoutes: Array<{
  title: string;
  path: string;
  pathPrefix: string;
  icon: React.ReactNode | undefined;
}> = [
  {
    icon: icons.userGroup,
    title: "Human resources",
    path: appRoutes.users.all,
    pathPrefix: "/services/users",
  },
  {
    icon: icons.shirt,
    title: "Product catalog",
    path: appRoutes.products.all,
    pathPrefix: "/services/products",
  },
  {
    icon: icons.users,
    path: appRoutes.customers.all,
    title: "Customer relationship",
    pathPrefix: "/services/customers",
  },
  {
    icon: icons.barChart,
    path: appRoutes.salesPerformance.statistic,
    title: "Sales report",
    pathPrefix: "/services/sales-performance",
  },
];

export { appRoutes, servicesSidebarRoutes };
