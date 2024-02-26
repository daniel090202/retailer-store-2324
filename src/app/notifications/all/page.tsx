"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import icons from "@/assets/Icons";
import { appRoutes } from "@/config/pathConfig";
import { useAppSelector } from "@/lib/redux/store";

import Button from "@/app/components/Button";

import Table from "../components/Table";
import CreateNotification from "../components/CreateNotification";

const AllNotifications = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [createNotificationModal, setCreateNotificationModal] = useState(false);

  const allNotificationsData = useAppSelector((state) => {
    return state.notificationsReducer.notifications.allNotifications?.data;
  });

  const allHiddenNotificationsData = useAppSelector((state) => {
    return state.hiddenNotificationsReducer.hiddenNotifications
      .allHiddenNotifications?.data;
  });

  const pageNumber = searchParams?.get("page");
  const notifications = allNotificationsData?.allNotifications;
  const totalNotification = allNotificationsData?.totalNotification;
  const hiddenNotifications = allHiddenNotificationsData?.allNotifications;
  const totalPage =
    allNotificationsData?.totalPage === 0 ? 1 : allNotificationsData?.totalPage;

  const handleCreateNotifications = () => {
    setCreateNotificationModal(!createNotificationModal);
  };

  const handleViewDraftNotifications = () => {
    const archivedPageNumber = 1;
    const path = `${appRoutes.notifications.archived}?page=${archivedPageNumber}`;

    router.push(path);
  };

  const handleViewPreviousPage = () => {
    if (
      pageNumber !== null &&
      pageNumber !== undefined &&
      parseInt(pageNumber) > 1
    ) {
      const previousPage = parseInt(pageNumber) - 1;
      const path = `${appRoutes.notifications.all}?page=${previousPage}`;

      router.push(path);
    }
  };

  const handleViewNextPage = () => {
    if (
      pageNumber !== null &&
      totalPage !== undefined &&
      pageNumber !== undefined &&
      parseInt(pageNumber) < totalPage
    ) {
      const nextPage = parseInt(pageNumber) + 1;
      const path = `${appRoutes.notifications.all}?page=${nextPage}`;

      router.push(path);
    }
  };

  return (
    <div className="flex-1 flex flex-col mx-2 my-4 p-4 h-[680px] bg-white rounded-xl">
      <h1 className="my-2 uppercase font-bold text-2xl flex justify-center">
        Notifications center
      </h1>
      <div className="flex justify-between">
        <div className="my-2">
          <span className="font-bold">
            Total announced notifications in the store:
          </span>
          <span className="mx-4 text-lg">
            {totalNotification?.toLocaleString()}
          </span>
          <span>notification(s)</span>
        </div>
        <div className="flex">
          <Button
            className="mx-2"
            leftIcon={icons.plus}
            onClick={() => handleCreateNotifications()}
          >
            New notification
          </Button>
          <Button
            leftIcon={icons.archive}
            onClick={() => handleViewDraftNotifications()}
          >
            Draft ({hiddenNotifications?.length.toLocaleString()})
          </Button>
        </div>
      </div>
      <div className="flex-1">
        <Table notifications={notifications} />
      </div>
      <div className="flex justify-center items-center">
        <span>Page</span>
        <div className="mx-2">
          <span>{pageNumber}</span>
          <span>/</span>
          <span>{totalPage}</span>
        </div>
        <Button
          className="mx-4"
          leftIcon={icons.chevronLeft}
          onClick={() => handleViewPreviousPage()}
          type={pageNumber == "1" ? "disabled" : "default"}
        >
          Previous
        </Button>
        <Button
          rightIcon={icons.chevronRight}
          onClick={() => handleViewNextPage()}
          type={pageNumber == totalPage ? "disabled" : "default"}
        >
          Next
        </Button>
      </div>
      <CreateNotification
        createNotificationModal={createNotificationModal}
        setCreateNotificationModal={setCreateNotificationModal}
      />
    </div>
  );
};

export default AllNotifications;
