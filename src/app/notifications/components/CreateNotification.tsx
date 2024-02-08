import { useState } from "react";

import icons from "@/assets/Icons";
import { appRoutes } from "@/config/pathConfig";
import { createNotification } from "@/services/notificationServices";

import Modal from "@/app/components/Modal";
import Button from "@/app/components/Button";

const CreateNotification = ({
  createNotificationModal,
  setCreateNotificationModal,
}: {
  createNotificationModal: boolean;
  setCreateNotificationModal: (value: boolean) => void;
}) => {
  const [target, setTarget] = useState("-1");

  const [notification, setNotification] = useState<{
    title: string;
    target: string;
    degree: string;
    type: string;
    content: string;
  }>({
    title: "",
    target: "",
    degree: "",
    type: "",
    content: "",
  });

  const handleInputNotification = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setNotification({
      ...notification,
      [event.target.name]: event.target.value,
    });
  };

  const handleTargetSelectNotification = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTarget(event.target.value);
  };

  const handleCreateUser = async () => {
    await createNotification(notification);

    setCreateNotificationModal(!createNotificationModal);

    window.location.href = appRoutes.notifications.all;
  };

  return createNotificationModal ? (
    <Modal
      modal={createNotificationModal}
      setCloseModal={setCreateNotificationModal}
    >
      <div className="my-2 flex justify-between">
        <h1 className="text-2xl">New notification</h1>
        <span
          className="px-2 py-1 rounded-full cursor-pointer hover:bg-gray-200"
          onClick={() => setCreateNotificationModal(false)}
        >
          {icons.cross}
        </span>
      </div>
      <hr />
      <div className="flex">
        <div className="w-[200px]">
          <div className="my-4 ">
            <label htmlFor="position">Target</label>
            <select
              id="target"
              name="target"
              value={target}
              onChange={(event) => handleTargetSelectNotification(event)}
              className="w-full p-4 my-2 border rounded-xl shadow-xl cursor-pointer outline-none appearance-none"
            >
              <option value="-1" hidden>
                Select a target
              </option>
              <option value="0">All</option>
              <option value="1">Administrator</option>
              <option value="2">Accountant</option>
              <option value="3">Sales assistant</option>
            </select>
          </div>
          <fieldset className="my-4">
            <legend>Select a degree</legend>
            <div className="my-2">
              <input
                type="radio"
                id="normal"
                name="degree"
                value="0"
                className="accent-blue-400"
                defaultChecked
                onChange={(event) => handleInputNotification(event)}
              />
              <label htmlFor="normal" className="mx-4">
                Normal
              </label>
            </div>
            <div className="my-2">
              <input
                type="radio"
                id="important"
                name="degree"
                value="1"
                className="accent-yellow-400"
                onChange={(event) => handleInputNotification(event)}
              />
              <label htmlFor="important" className="mx-4">
                Important
              </label>
            </div>
            <div className="my-2">
              <input
                type="radio"
                id="urgent"
                name="degree"
                value="2"
                className="accent-red-400"
                onChange={(event) => handleInputNotification(event)}
              />
              <label htmlFor="urgent" className="mx-4">
                Urgent
              </label>
            </div>
          </fieldset>
          <fieldset className="my-4">
            <legend>Select a type</legend>
            <div className="my-2">
              <input
                type="radio"
                id="normal"
                name="type"
                value="0"
                className="accent-gray-400"
                defaultChecked
                onChange={(event) => handleInputNotification(event)}
              />
              <label htmlFor="distribution" className="mx-4">
                Normal
              </label>
            </div>
            <div className="my-2">
              <input
                type="radio"
                id="distribution"
                name="type"
                value="1"
                className="accent-gray-400"
                defaultChecked
                onChange={(event) => handleInputNotification(event)}
              />
              <label htmlFor="distribution" className="mx-4">
                Distribution
              </label>
            </div>
            <div className="my-2">
              <input
                type="radio"
                id="salary"
                name="type"
                value="2"
                className="accent-gray-400"
                onChange={(event) => handleInputNotification(event)}
              />
              <label htmlFor="salary" className="mx-4">
                Salary
              </label>
            </div>
          </fieldset>
        </div>
        <div className="flex-1 ml-4">
          <div className="my-4">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              onChange={(event) => handleInputNotification(event)}
              className="w-full p-4 my-2 border uppercase rounded-xl shadow-xl outline-none"
            />
          </div>
          <div className="my-4 flex flex-col">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              name="content"
              onChange={(event) => handleInputNotification(event)}
              className="w-[800px] h-[400px] p-4 my-2 border rounded-xl shadow-xl outline-none"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Button
          leftIcon={icons.plus}
          rightIcon=""
          className="mt-4 p-4"
          onClick={() => handleCreateUser()}
        >
          Create notification
        </Button>
      </div>
    </Modal>
  ) : (
    <div></div>
  );
};

export default CreateNotification;
