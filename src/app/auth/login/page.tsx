"use client";

import { useState } from "react";

import { signIn } from "next-auth/react";

import icons from "@/assets/Icons";

import Modal from "@/components/Modal";
import Button from "@/components/Button";

const Login = () => {
  const [loginUserModal, setLoginUserModal] = useState(false);
  const [account, setAccount] = useState({
    userName: "",
    password: "",
  });

  const handleInputAccount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({ ...account, [event.target.name]: event.target.value });
  };

  const handleUserLogin = async () => {
    await signIn("credentials", {
      userName: account.userName,
      password: account.password,
      callbackUrl: "/",
    });
  };

  return (
    <Modal modal={loginUserModal} setCloseModal={setLoginUserModal}>
      <h1 className="text-2xl font-bold flex justify-center">
        <span>Welcome back</span>
        <span className="mx-2">{icons.faceSmile}</span>
      </h1>
      <div className="mx-auto py-3 space-y-3 text-gray-600">
        <fieldset>
          <label htmlFor="userName">User name</label>
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="Your username"
            onChange={(event) => {
              handleInputAccount(event);
            }}
            className="w-full p-4 my-2 border-2 rounded-xl shadow-xl outline-none"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Your password"
            onChange={(event) => {
              handleInputAccount(event);
            }}
            className="w-full p-4 my-2 border-2 rounded-xl shadow-xl outline-none"
          />
        </fieldset>
        <div className="flex items-center">
          <input
            value="1"
            type="checkbox"
            id="rememberLogin"
            name="rememberLogin"
            className="h-4 w-4 accent-gray-400"
          />
          <label htmlFor="rememberLogin" className="mx-4">
            Remember for one session
          </label>
        </div>
        <div className="flex justify-center">
          <Button
            className="mt-4 p-4"
            leftIcon={icons.entering}
            onClick={() => handleUserLogin()}
          >
            Log in
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
