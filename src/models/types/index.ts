import { User, Customer, Product, ProductDetail } from "../dto";

declare global {
  type AuthInitialState = {
    login: AuthState;
  };

  type ProductInitialState = {
    products: ProductsState;
  };

  type ArchivedProductInitialState = {
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
      data?: Array<Customer>;
    };
    isFetching: boolean;
  };

  type ArchivedCustomersState = {
    error: boolean;
    allArchivedCustomers?: {
      statusCode: number;
      message: string;
      data?: Array<Customer>;
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
      data?: Array<Product>;
    };
    isFetching: boolean;
  };

  type ArchivedProductsState = {
    error: boolean;
    allArchivedProducts?: {
      statusCode: number;
      message: string;
      data?: Array<Product>;
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
