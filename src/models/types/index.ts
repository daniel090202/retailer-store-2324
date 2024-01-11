import { User, Product } from "../dto";

declare global {
  type AuthInitialState = {
    login: AuthState;
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
    isModerator: boolean;
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

export type { AuthState, AuthInitialState };
