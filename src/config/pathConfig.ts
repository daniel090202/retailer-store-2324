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
  isAuthenticated: boolean;
  shownTarget: Array<number>;
  icon: React.ReactNode | undefined;
}> = [
  {
    shownTarget: [0, 1, 2],
    icon: icons.shirt,
    isAuthenticated: false,
    title: "Product catalog",
    path: appRoutes.products.all,
    pathPrefix: "/services/products",
  },
  {
    shownTarget: [0],
    isAuthenticated: true,
    icon: icons.userGroup,
    title: "Human resources",
    path: appRoutes.users.all,
    pathPrefix: "/services/users",
  },
  {
    icon: icons.users,
    isAuthenticated: false,
    shownTarget: [0, 1, 2],
    path: appRoutes.customers.all,
    title: "Customer relationship",
    pathPrefix: "/services/customers",
  },
  {
    shownTarget: [0, 1],
    icon: icons.barChart,
    isAuthenticated: true,
    title: "Sales report",
    pathPrefix: "/services/sales-performance",
    path: appRoutes.salesPerformance.statistic,
  },
];

export { appRoutes, servicesSidebarRoutes };
