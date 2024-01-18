"use client";

import icons from "@/assets/Icons";
import Button from "@/components/Button";

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
  const customer = {
    fullName: "Daniel Nguyen",
    age: 21,
    gender: 0,
    address: "Ho Chi Minh",
    phone: "0936730339",
    email: "minhkhanh090202@gmail.com",
    accountLevel: 0,
  };

  const handleBlockCustomer = () => {
    return;
  };

  const handleReviewPurchaseHistory = () => {
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
            <span>{renderCustomerLevel(customer.accountLevel)}</span>
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
      <Button
        leftIcon=""
        rightIcon=""
        className="w-full mt-4 mb-2 p-4 text-xl"
        onClick={() => handleBlockCustomer()}
      >
        Block customer
      </Button>
      <Button
        leftIcon=""
        rightIcon=""
        className="w-full my-2 p-4 text-xl"
        onClick={() => handleReviewPurchaseHistory()}
      >
        Review purchase history
      </Button>
    </aside>
  );
};

export default SideBar;
