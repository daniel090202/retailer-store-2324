"use client";

import { useState } from "react";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import icons from "@/assets/Icons";

import Modal from "@/app/components/Modal";
import Button from "@/app/components/Button";

const Login = () => {
  const router = useRouter();

  const [logoutUserModal, setLogoutUserModal] = useState(false);

  const handleUserAgreeLogout = async () => {
    await signOut({
      callbackUrl: "/api/auth/signin",
    });
  };

  const handleUserDisagreeLogout = async () => {
    router.push("/");
  };

  return (
    <Modal modal={logoutUserModal} setCloseModal={setLogoutUserModal}>
      <h1 className="text-2xl font-bold flex justify-center uppercase">
        <span>See you later</span>
        <span className="mx-2">{icons.handsWaving}</span>
      </h1>
      <hr />
      <p className="my-4 text-lg">Do you really want to log out?</p>
      <div className="flex justify-evenly items-center">
        <Button
          leftIcon={icons.check}
          rightIcon=""
          className="mt-4 p-4"
          onClick={() => handleUserAgreeLogout()}
        >
          Yes
        </Button>
        <Button
          leftIcon={icons.cross}
          rightIcon=""
          className="mt-4 p-4"
          onClick={() => handleUserDisagreeLogout()}
        >
          No
        </Button>
      </div>
    </Modal>
  );
};

export default Login;
