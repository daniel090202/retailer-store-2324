import { useRouter } from "next/navigation";

import {
  logInFail,
  logOutFail,
  logInStart,
  logOutStart,
  logInSuccess,
  logOutSuccess,
} from "@/lib/redux/features/authSlice";

import { AppDispatch } from "@/lib/redux/store";

import { User } from "@/dto";

import { login } from "@/services";
import { appRoutes } from "@/config/pathConfig";

const loginUser = async (
  router: any,
  dispatch: AppDispatch,
  account: { userName: string; password: string }
) => {
  dispatch(logInStart());

  try {
    const user = await login(account);

    dispatch(logInSuccess(user as User));

    router.push(appRoutes.home);
  } catch (error) {
    dispatch(logInFail());
  }
};

export { loginUser };
