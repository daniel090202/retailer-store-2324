"use client";

import { useState } from "react";

import icons from "@/assets/Icons";
import { signOut } from "next-auth/react";
import { changePassword } from "@/services";
import { error, success } from "@/lib/hot-toast";

import { User } from "@/models";
import Modal from "@/app/components/Modal";
import Button from "@/app/components/Button";

const ChangePassword = ({
  userName,
  changePasswordModal,
  setChangePasswordModal,
}: {
  userName: string;
  changePasswordModal: boolean;
  setChangePasswordModal: (value: boolean) => void;
}) => {
  const [openNewPassword, setOpenNewPassword] = useState<boolean>(false);
  const [openPreviousPassword, setOpenPreviousPassword] =
    useState<boolean>(false);

  const [newPassword, setNewPassword] = useState<string>("");
  const [previousPassword, setPreviousPassword] = useState<string>("");

  const handleChangePassword = async () => {
    const user: User | undefined = await changePassword(
      userName,
      newPassword,
      previousPassword
    );

    if (user !== undefined) {
      success(
        "New password has been successfully set. You will be automatically signed out."
      );

      setTimeout(async () => {
        await signOut({
          callbackUrl: "/api/auth/signin",
        });
      }, 4000);
    } else {
      error("Failed to change the password of your account at this time.");
    }
  };

  return changePasswordModal ? (
    <Modal modal={changePasswordModal} setCloseModal={setChangePasswordModal}>
      <div className="my-2 flex justify-between">
        <h1 className="text-2xl">Reset password</h1>
        <span
          className="px-2 py-1 rounded-full cursor-pointer hover:bg-gray-200"
          onClick={() => setChangePasswordModal(false)}
        >
          {icons.cross}
        </span>
      </div>
      <hr />
      <div className="mx-auto py-3">
        <div className="my-4">
          <label htmlFor="previousPassword">Previous password</label>
          <div className="my-2 flex items-center border rounded-xl shadow-xl">
            {openPreviousPassword ? (
              <input
                type="text"
                id="previousPassword"
                name="previousPassword"
                value={previousPassword}
                onChange={(event) => setPreviousPassword(event.target.value)}
                className="flex-1 p-4 rounded-xl outline-none"
              />
            ) : (
              <input
                type="password"
                id="previousPassword"
                name="previousPassword"
                value={previousPassword}
                onChange={(event) => setPreviousPassword(event.target.value)}
                className="flex-1 p-4 rounded-xl outline-none"
              />
            )}
            {openPreviousPassword ? (
              <span
                onClick={() => {
                  setOpenPreviousPassword(!openPreviousPassword);
                }}
                className="mx-4 cursor-pointer hover:text-gray-400"
              >
                {icons.eye}
              </span>
            ) : (
              <span
                onClick={() => {
                  setOpenPreviousPassword(!openPreviousPassword);
                }}
                className="mx-4 cursor-pointer hover:text-gray-400"
              >
                {icons.eyeClosed}
              </span>
            )}
          </div>
        </div>
        <div className="my-4">
          <label htmlFor="newPassword">New password</label>
          <div className="my-2 flex items-center border rounded-xl shadow-xl">
            {openNewPassword ? (
              <input
                type="text"
                id="newPassword"
                name="newPassword"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
                className="flex-1 p-4 rounded-xl outline-none"
              />
            ) : (
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
                className="flex-1 p-4 rounded-xl outline-none"
              />
            )}
            {openNewPassword ? (
              <span
                onClick={() => {
                  setOpenNewPassword(!openNewPassword);
                }}
                className="mx-4 cursor-pointer hover:text-gray-400"
              >
                {icons.eye}
              </span>
            ) : (
              <span
                onClick={() => {
                  setOpenNewPassword(!openNewPassword);
                }}
                className="mx-4 cursor-pointer hover:text-gray-400"
              >
                {icons.eyeClosed}
              </span>
            )}
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Button className="mt-4 p-4" onClick={() => handleChangePassword()}>
          Change password
        </Button>
      </div>
    </Modal>
  ) : (
    <div></div>
  );
};

export default ChangePassword;
