"use client";

import icons from "@/assets/Icons";

import {
  renderCustomerLevel,
  renderCustomerActiveStatus,
  renderCustomerBlockedStatus,
  renderCustomerVerifiedStatus,
} from "@/utils";

const SideBar = ({
  accountLevel,
  active,
  block,
  verified,
}: {
  accountLevel: number;
  active: boolean;
  block: boolean;
  verified: boolean;
}) => {
  return (
    <aside className="md:w-1/4 md:mx-2 md:my-4 text-xl font-medium rounded-xl">
      <div className="p-4 rounded-xl border-2">
        <h1 className="text-center">Account status</h1>
        <hr className="my-2" />
        <div className="my-2 flex justify-between">
          <span>Active status:</span>
          <div>
            <span>{renderCustomerActiveStatus(active)}</span>
            <span className="mx-2 w-2.5 h-2.5 text-sm">
              {icons.solidCircle}
            </span>
          </div>
        </div>
        <div className="my-2 flex justify-between">
          <span>Block status:</span>
          <div>
            <span>{renderCustomerBlockedStatus(block)}</span>
            <span className="mx-2 w-2.5 h-2.5 text-sm">{icons.lockOpened}</span>
          </div>
        </div>
        <div className="my-2 flex justify-between">
          <span>Account status:</span>
          <div>
            <span>{renderCustomerLevel(accountLevel)}</span>
            <span className="mx-2 w-2.5 h-2.5 text-lg">
              {icons.addressCard}
            </span>
          </div>
        </div>
        <div className="my-2 flex justify-between">
          <span>Verified status:</span>
          <div>
            <span>{renderCustomerVerifiedStatus(verified)}</span>
            <span className="mx-2 w-2.5 h-2.5 text-lg">{icons.check}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
