"use client";

import {
  renderNotificationStatus,
  renderNotificationTarget,
  renderNotificationDegree,
  renderNotificationType,
} from "@/utils";
import { error, success } from "@/lib/hot-toast";
import { hiddenNotification, publishNotification } from "@/services";

import { Notification } from "@/models";
import Button from "@/app/components/Button";

const SideBar = ({
  barcode,
  type,
  degree,
  target,
  hiddenStatus,
}: {
  barcode: string;
  type: number;
  degree: number;
  target: string;
  hiddenStatus: boolean;
}) => {
  const renderButtons = () => {
    const buttons = [];

    if (hiddenStatus) {
      buttons.push(
        <Button
          key={0}
          className="w-full mt-4 mb-2 p-4 text-xl"
          onClick={() => handlePublishNotification()}
        >
          Publish notification
        </Button>
      );
    } else {
      buttons.push(
        <Button
          key={1}
          className="w-full mt-4 mb-2 p-4 text-xl"
          onClick={() => handleHiddenNotification()}
        >
          Hidden notification
        </Button>
      );
    }

    return buttons;
  };

  const handleHiddenNotification = async () => {
    const notification: Notification | undefined = await hiddenNotification(
      barcode
    );

    if (notification !== undefined) {
      success("Notification has been successfully hidden.");

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to hidden this notification at this time.");
    }
  };

  const handlePublishNotification = async () => {
    const notification: Notification | undefined = await publishNotification(
      barcode
    );

    if (notification !== undefined) {
      success("Notification has been successfully published.");

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to publish this notification at this time.");
    }
  };

  return (
    <aside className="md:w-1/4 md:mx-2 md:my-4 text-lg font-medium rounded-xl">
      <div className="p-4 rounded-xl border-2">
        <h1 className="text-xl text-center">Notification details</h1>
        <hr className="my-2" />
        <div className="my-2 flex justify-between">
          <span>Status:</span>
          <span>{renderNotificationStatus(hiddenStatus)}</span>
        </div>
        <div className="my-2 flex justify-between">
          <span>Type of notification:</span>
          <span>{renderNotificationType(type)}</span>
        </div>
        <div className="my-2 flex justify-between">
          <span>Degree of notification:</span>
          <span>{renderNotificationDegree(degree)}</span>
        </div>
        <div className="my-2 flex justify-between">
          <span>Target receivers:</span>
          <span>{renderNotificationTarget(target)}</span>
        </div>
      </div>
      {renderButtons()}
    </aside>
  );
};

export default SideBar;
