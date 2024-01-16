"use client";

import icons from "@/assets/Icons";
import Button from "@/components/Button";

import {
  renderProductActiveStatus,
  renderProductArchivedStatus,
  renderProductVerifiedStatus,
} from "@/utils";

const SideBar = ({
  active = false,
  archived = false,
  verified = false,
}: {
  active: boolean;
  archived: boolean;
  verified: boolean;
}) => {
  const handleArchiveProduct = () => {
    return;
  };

  const handleReviewImportation = () => {
    return;
  };

  const handleReviewSalesHistory = () => {
    return;
  };

  return (
    <aside className="md:w-1/4 md:mx-2 md:my-4 text-xl font-medium rounded-xl">
      <div className="p-4 rounded-xl border-2">
        <h1 className="text-center">Product status</h1>
        <hr className="my-2" />
        <div className="my-2 flex justify-between">
          <span>Active status:</span>
          <div>
            <span>{renderProductActiveStatus(active)}</span>
            <span className="mx-2 w-2.5 h-2.5 text-sm">
              {icons.solidCircle}
            </span>
          </div>
        </div>
        <div className="my-2 flex justify-between">
          <span>Archived status:</span>
          <div>
            <span>{renderProductArchivedStatus(archived)}</span>
            <span className="mx-2 w-2.5 h-2.5 text-sm">{icons.lockOpened}</span>
          </div>
        </div>
        <div className="my-2 flex justify-between">
          <span>Verified status:</span>
          <div>
            <span>{renderProductVerifiedStatus(verified)}</span>
            <span className="mx-2 w-2.5 h-2.5 text-lg">{icons.check}</span>
          </div>
        </div>
      </div>
      <Button
        leftIcon=""
        rightIcon=""
        className="w-full mt-4 mb-2 p-4 text-xl"
        onClick={() => handleArchiveProduct()}
      >
        Archive product
      </Button>
      <Button
        leftIcon=""
        rightIcon=""
        className="w-full my-2 p-4 text-xl"
        onClick={() => handleReviewImportation()}
      >
        Review importation
      </Button>
      <Button
        leftIcon=""
        rightIcon=""
        className="w-full my-2 p-4 text-xl"
        onClick={() => handleReviewSalesHistory()}
      >
        Review sales history
      </Button>
    </aside>
  );
};

export default SideBar;
