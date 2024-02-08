"use client";

import { useRouter } from "next/navigation";

import {
  renderUserActiveStatus,
  renderUserBlockedStatus,
  renderUserVerifiedStatus,
} from "@/utils";
import icons from "@/assets/Icons";
import { appRoutes } from "@/config/pathConfig";

import Button from "@/app/components/Button";

const SideBar = ({
  active = false,
  admin = false,
  block = false,
  verified = false,
}: {
  active?: boolean;
  admin?: boolean;
  block?: boolean;
  verified?: boolean;
}) => {
  const router = useRouter();

  const handleBlockUser = () => {
    return;
  };

  const handleResendVerification = () => {
    return;
  };

  const handleReviewNotifications = () => {
    router.push(appRoutes.notifications.all);
  };

  const handleReviewSalesPerformance = () => {
    return;
  };

  return (
    <aside className="md:w-1/4 md:mx-2 md:my-4 text-xl font-medium rounded-xl">
      <div className="p-4 rounded-xl border-2">
        <h1 className="text-center">Account status</h1>
        <hr className="my-2" />
        <div className="my-2 flex justify-between">
          <span>Active status:</span>
          <div>
            <span>{renderUserActiveStatus(active)}</span>
            <span className="mx-2 w-2.5 h-2.5 text-sm">
              {icons.solidCircle}
            </span>
          </div>
        </div>
        <div className="my-2 flex justify-between">
          <span>Block status:</span>
          <div>
            <span>{renderUserBlockedStatus(block)}</span>
            <span className="mx-2 w-2.5 h-2.5 text-sm">{icons.lockOpened}</span>
          </div>
        </div>
        <div className="my-2 flex justify-between">
          <span>Verified status:</span>
          <div>
            <span>{renderUserVerifiedStatus(verified)}</span>
            <span className="mx-2 w-2.5 h-2.5 text-lg">{icons.check}</span>
          </div>
        </div>
      </div>
      <Button
        className="w-full mt-4 mb-2 p-4 text-xl"
        onClick={() => handleBlockUser()}
      >
        Block user
      </Button>
      <Button
        className="w-full my-2 p-4 text-xl"
        onClick={() => handleResendVerification()}
      >
        Resend verification
      </Button>
      <Button
        className="w-full my-2 p-4 text-xl"
        onClick={() => handleReviewNotifications()}
      >
        Review notifications
      </Button>
      <Button
        className="w-full my-2 p-4 text-xl"
        onClick={() => handleReviewSalesPerformance()}
      >
        Review sales performance
      </Button>
    </aside>
  );
};

export default SideBar;
