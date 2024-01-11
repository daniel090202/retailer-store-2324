import {
  logInFail,
  logOutFail,
  logInStart,
  logOutStart,
  logInSuccess,
  logOutSuccess,
} from "@/lib/redux/features/authSlice";

import { AppDispatch } from "@/lib/redux/store";

import { User } from "@/models/dto";

import { login } from "@/services";
import { appRoutes } from "@/config/pathConfig";

const loginUser = async (
  router: any,
  dispatch: AppDispatch,
  account: { userName: string; password: string }
) => {
  dispatch(logInStart());

  try {
    const userData = (await login(account)) as {
      statusCode: number;
      message: string;
      data: User;
      accessToken: string;
    };

    dispatch(logInSuccess(userData));

    router.push(appRoutes.home);
  } catch (error) {
    dispatch(logInFail());
  }
};

export { loginUser };
