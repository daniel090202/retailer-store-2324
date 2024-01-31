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
      <h1 className="text-2xl font-bold flex justify-center uppercase">
        <span>Welcome to No Brand</span>
        <span className="mx-2">{icons.faceSmile}</span>
      </h1>
      <div className="mx-auto py-3 space-y-3 text-gray-600">
        <div className="top-4">
          <label htmlFor="userName" className="ml-4 px-4">
            User name
          </label>
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
        </div>
        <div className="">
          <label htmlFor="password" className="ml-4 px-4">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your password"
            onChange={(event) => {
              handleInputAccount(event);
            }}
            className="w-full p-4 my-2 border-2 rounded-xl shadow-xl outline-none"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="rememberLogin"
            name="rememberLogin"
            value="1"
            className="h-4 w-4 accent-gray-400"
          />
          <label htmlFor="rememberLogin" className="mx-4">
            Remember for one session
          </label>
        </div>
        <div className="flex justify-center">
          <Button
            leftIcon={icons.entering}
            rightIcon=""
            className="mt-4 p-4"
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
