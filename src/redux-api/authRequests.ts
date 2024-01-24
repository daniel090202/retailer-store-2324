import { login } from "@/services";
import { logInFail, logInStart, logInSuccess } from "@/lib/redux/features";

import { User } from "@/models";
import { AppDispatch } from "@/lib/redux/store";

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
  } catch (error) {
    dispatch(logInFail());
  }
};



export { loginUser };
