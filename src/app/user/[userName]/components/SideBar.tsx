"use client";

import {
  renderUserActiveStatus,
  renderUserBlockedStatus,
  renderUserVerifiedStatus,
} from "@/utils";
import icons from "@/assets/Icons";
import { error, success } from "@/lib/hot-toast";
import { blockUser, unblockUser } from "@/services";

import Button from "@/app/components/Button";

const SideBar = ({
  userName,
  archived = false,
  active = false,
  admin = false,
  verified = false,
}: {
  userName: string;
  archived?: boolean;
  active?: boolean;
  admin?: boolean;
  verified?: boolean;
}) => {
  const renderButtons = () => {
    const buttons = [];

    if (archived) {
      buttons.push(
        <Button
          key={0}
          className="w-full mt-4 mb-2 p-4 text-xl"
          onClick={() => handleUnblockUser()}
        >
          Unblock user
        </Button>
      );
    } else {
      buttons.push(
        <Button
          key={1}
          className="w-full mt-4 mb-2 p-4 text-xl"
          onClick={() => handleBlockUser()}
        >
          Block user
        </Button>
      );
    }

    buttons.push(
      <Button
        key={2}
        className="w-full my-2 p-4 text-xl"
        onClick={() => handleResendVerification()}
      >
        Resend verification
      </Button>
    );

    buttons.push(
      <Button
        key={4}
        className="w-full my-2 p-4 text-xl"
        onClick={() => handleReviewSalesPerformance()}
      >
        Review sales performance
      </Button>
    );

    return buttons;
  };

  const handleBlockUser = async () => {
    const blockedUser = await blockUser(userName);

    if (blockedUser !== undefined) {
      success("User has been successfully blocked.");

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to block this user at this time.");
    }
  };

  const handleUnblockUser = async () => {
    const activatedUser = await unblockUser(userName);

    if (activatedUser !== undefined) {
      success("User has been successfully activated.");

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to activate this user at this time.");
    }
  };

  const handleResendVerification = () => {
    return;
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
            <span>{renderUserBlockedStatus(archived)}</span>
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
      {renderButtons()}
    </aside>
  );
};

export default SideBar;
