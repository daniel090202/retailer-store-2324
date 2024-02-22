import { useState } from "react";
import { useSession } from "next-auth/react";

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
  const session = useSession();

  const [target, setTarget] = useState("-1");
  const [showSpecificTarget, setShowSpecificTarget] = useState(false);

  const [notification, setNotification] = useState<{
    title: string;
    target: string;
    degree: number;
    type: number;
    content: string;
    createdBy: string;
  }>({
    title: "",
    target: "",
    degree: 0,
    type: 0,
    content: "",
    createdBy: "",
  });

  const handleInputNotification = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setNotification({
      ...notification,
      [event.target.name]: event.target.value,
    });
  };

  const handleNumericInputNotification = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setNotification({
      ...notification,
      [event.target.name]: parseInt(event.target.value),
    });
  };

  const handleTargetSelectNotification = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const target = event.target.value;

    if (target === "3") {
      setTarget(target);
      setShowSpecificTarget(true);
    } else {
      setNotification({
        ...notification,
        [event.target.name]: event.target.value,
      });
      setShowSpecificTarget(false);
    }
  };

  const handleSpecificTargetInputNotification = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNotification({
      ...notification,
      target: `${target}_${event.target.value}`,
    });
  };

  const handleCreateUser = async () => {
    notification.title.toUpperCase();
    notification.createdBy = session.data?.user.userName;

    await createNotification(notification);

    setCreateNotificationModal(!createNotificationModal);

    window.location.href = `${appRoutes.notifications.all}?page=1`;
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
          <div className="my-4">
            <label htmlFor="position">Target</label>
            <select
              id="target"
              name="target"
              onChange={(event) => handleTargetSelectNotification(event)}
              className="w-full p-4 my-2 border rounded-xl shadow-xl cursor-pointer outline-none appearance-none"
            >
              <option value="-1" hidden>
                Select a target
              </option>
              <option value="0">Administrator</option>
              <option value="1">Accountant</option>
              <option value="2">Sales assistant</option>
              <option value="3">For specific target</option>
              <option value="4">All</option>
            </select>
          </div>
          {showSpecificTarget ? (
            <input
              type="text"
              id="specificTarget"
              name="specificTarget"
              placeholder="Specific target"
              onChange={(event) => handleSpecificTargetInputNotification(event)}
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            />
          ) : (
            <div></div>
          )}
          <fieldset className="my-4">
            <legend>Select a degree</legend>
            <div className="my-2">
              <input
                value={0}
                id="normal"
                type="radio"
                name="degree"
                className="accent-blue-400"
                checked={notification.degree === 0}
                onChange={(event) => handleNumericInputNotification(event)}
              />
              <label htmlFor="normal" className="mx-4">
                Normal
              </label>
            </div>
            <div className="my-2">
              <input
                value={1}
                type="radio"
                name="degree"
                id="important"
                className="accent-yellow-400"
                checked={notification.degree === 1}
                onChange={(event) => handleNumericInputNotification(event)}
              />
              <label htmlFor="important" className="mx-4">
                Important
              </label>
            </div>
            <div className="my-2">
              <input
                value={2}
                id="urgent"
                type="radio"
                name="degree"
                className="accent-red-400"
                checked={notification.degree === 2}
                onChange={(event) => handleNumericInputNotification(event)}
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
                value={0}
                id="normal"
                name="type"
                type="radio"
                className="accent-gray-400"
                checked={notification.type === 0}
                onChange={(event) => handleNumericInputNotification(event)}
              />
              <label htmlFor="distribution" className="mx-4">
                Normal
              </label>
            </div>
            <div className="my-2">
              <input
                value={1}
                name="type"
                type="radio"
                id="distribution"
                className="accent-gray-400"
                checked={notification.type === 1}
                onChange={(event) => handleNumericInputNotification(event)}
              />
              <label htmlFor="distribution" className="mx-4">
                Distribution
              </label>
            </div>
            <div className="my-2">
              <input
                value={2}
                id="salary"
                name="type"
                type="radio"
                className="accent-gray-400"
                checked={notification.type === 2}
                onChange={(event) => handleNumericInputNotification(event)}
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
