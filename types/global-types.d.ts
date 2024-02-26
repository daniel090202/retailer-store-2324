import { User, Customer, Product, ProductDetail, Notification } from "@/models";

declare global {
  type AuthInitialState = {
    login: AuthState;
  };

  type ProductsInitialState = {
    products: ProductsState;
  };

  type ArchivedProductsInitialState = {
    archivedProducts: ArchivedProductsState;
  };

  type UsersInitialState = {
    users: UsersState;
  };

  type ArchivedUsersInitialState = {
    archivedUsers: ArchivedUsersState;
  };

  type CustomersInitialState = {
    customers: CustomersState;
  };

  type ArchivedCustomersInitialState = {
    archivedCustomers: ArchivedCustomersState;
  };

  type CartInitialState = {
    cart: CartState;
  };

  type NotificationsInitialState = {
    notifications: NotificationsState;
  };

  type HiddenNotificationsInitialState = {
    hiddenNotifications: HiddenNotificationsState;
  };

  type SalesInitialState = {
    sales: SalesState;
  };

  type SalesState = {
    error: boolean;
    sales?: {
      totalPage: number;
      totalOrders: number;
      totalRevenue: number;
      totalAmount: number;
      salesData: Array<{
        date: number;
        month: number;
        year: number;
        day: string;
        totalOrders: number;
        totalRevenue: number;
        totalAmount: number;
      }>;
    };
    isFetching: boolean;
  };

  type HiddenNotificationsState = {
    error: boolean;
    allHiddenNotifications?: {
      statusCode: number;
      message: string;
      data?: {
        totalPage: number;
        totalNotification: number;
        allNotifications: Array<Notification>;
      };
    };
    isFetching: boolean;
  };

  type NotificationsState = {
    error: boolean;
    allNotifications?: {
      statusCode: number;
      message: string;
      data?: {
        totalPage: number;
        totalNotification: number;
        allNotifications: Array<Notification>;
      };
    };
    isFetching: boolean;
  };

  type CartState = {
    customer?: Customer;
    allProducts: Array<{
      product: Product;
      productDetail: ProductDetail;
      purchasedAmount: number;
    }>;
  };

  type CustomersState = {
    error: boolean;
    allCustomers?: {
      statusCode: number;
      message: string;
      data?: {
        totalPage: number;
        totalCustomer: number;
        allCustomers: Array<Customer>;
      };
    };
    isFetching: boolean;
  };

  type ArchivedCustomersState = {
    error: boolean;
    allArchivedCustomers?: {
      statusCode: number;
      message: string;
      data?: {
        totalPage: number;
        totalArchivedCustomer: number;
        allArchivedCustomers: Array<Customer>;
      };
    };
    isFetching: boolean;
  };

  type UsersState = {
    error: boolean;
    allUsers?: {
      statusCode: number;
      message: string;
      data?: {
        totalUser: number;
        totalPage: number;
        allUsers: Array<User>;
      };
    };
    isFetching: boolean;
  };

  type ArchivedUsersState = {
    error: boolean;
    allArchivedUsers?: {
      statusCode: number;
      message: string;
      data?: {
        totalPage: number;
        totalArchivedUser: number;
        allArchivedUsers: Array<User>;
      };
    };
    isFetching: boolean;
  };

  type ProductsState = {
    error: boolean;
    allProducts?: {
      statusCode: number;
      message: string;
      data?: {
        totalPage: number;
        totalProduct: number;
        allProducts: Array<Product>;
      };
    };
    isFetching: boolean;
  };

  type ArchivedProductsState = {
    error: boolean;
    allArchivedProducts?: {
      statusCode: number;
      message: string;
      data?: {
        totalPage: number;
        totalArchivedProduct: number;
        allArchivedProducts: Array<Product>;
      };
    };
    isFetching: boolean;
  };

  type AuthState = {
    isAuth: boolean;
    error: boolean;
    currentUser?: {
      statusCode: number;
      message: string;
      data?: User;
      accessToken: string;
    };
    isFetching: boolean;
  };
}
