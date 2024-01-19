import { User, Customer, Product } from "../dto";

declare global {
  type AuthInitialState = {
    login: AuthState;
  };

  type ProductInitialState = {
    products: ProductsState;
  };

  type UsersInitialState = {
    users: UsersState;
  };

  type CustomersInitialState = {
    customers: CustomersState;
  };

  type CartInitialState = {
    cart: CartState;
  };

  type CartState = {
    customer?: string;
    allProducts: Array<{ product: Product; purchasedAmount: number }>;
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

  type UsersState = {
    error: boolean;
    allUsers: {
      statusCode: number;
      message: string;
      data: Array<User>;
    };
    isFetching: boolean;
  };

  type ProductsState = {
    error: boolean;
    allProducts: {
      statusCode: number;
      message: string;
      data: Array<Product>;
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
