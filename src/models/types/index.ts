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

  type CustomersState = {
    error: boolean;
    allCustomers?:
      | {
          statusCode: number;
          message: string;
          data?: Array<Customer> | undefined;
        }
      | undefined;
    isFetching: boolean;
  };

  type UsersState = {
    error: boolean;
    allUsers:
      | {
          statusCode: number;
          message: string;
          data: Array<User> | undefined;
        }
      | undefined;
    isFetching: boolean;
  };

  type ProductsState = {
    error: boolean;
    allProducts:
      | {
          statusCode: number;
          message: string;
          data: Array<Product> | undefined;
        }
      | undefined;
    isFetching: boolean;
  };

  type AuthState = {
    isAuth: boolean;
    error: boolean;
    currentUser:
      | {
          statusCode: number;
          message: string;
          data: User | undefined;
          accessToken: string;
        }
      | undefined;
    isFetching: boolean;
  };
}
