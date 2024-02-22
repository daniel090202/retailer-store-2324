"use client";

import icons from "@/assets/Icons";
import { appRoutes } from "@/config/pathConfig";
import { error, success } from "@/lib/hot-toast";
import { archiveProduct, publishProduct } from "@/services";

import Button from "@/app/components/Button";

import {
  renderProductActiveStatus,
  renderProductArchivedStatus,
  renderProductVerifiedStatus,
} from "@/utils";

const SideBar = ({
  UPC,
  archived = false,
  active = false,
  verified = false,
}: {
  UPC: string;
  archived: boolean;
  active: boolean;
  verified: boolean;
}) => {
  const renderButtons = () => {
    const buttons = [];

    if (archived) {
      buttons.push(
        <Button
          key={0}
          className="w-full mt-4 mb-2 p-4 text-xl"
          onClick={() => handlePublishProduct()}
        >
          Publish product
        </Button>
      );
    } else {
      buttons.push(
        <Button
          key={1}
          className="w-full mt-4 mb-2 p-4 text-xl"
          onClick={() => handleArchiveProduct()}
        >
          Archive product
        </Button>
      );
    }

    buttons.push(
      <Button
        key={2}
        className="w-full my-2 p-4 text-xl"
        onClick={() => handleReviewImportation()}
      >
        Review importation
      </Button>
    );

    buttons.push(
      <Button
        key={3}
        className="w-full my-2 p-4 text-xl"
        onClick={() => handleReviewSalesHistory()}
      >
        Review sales history
      </Button>
    );

    return buttons;
  };

  const handleArchiveProduct = async () => {
    const archivedProduct = await archiveProduct(UPC);

    if (archivedProduct !== undefined) {
      success("Product has been successfully archived.");

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to archive this product at this time.");
    }
  };

  const handlePublishProduct = async () => {
    const publishedProduct = await publishProduct(UPC);

    if (publishedProduct !== undefined) {
      success("Product has been successfully published.");

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to publish this product at this time.");
    }
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
      {renderButtons()}
    </aside>
  );
};

export default SideBar;
