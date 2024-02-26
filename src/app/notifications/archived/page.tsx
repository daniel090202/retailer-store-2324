"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import icons from "@/assets/Icons";
import { appRoutes } from "@/config/pathConfig";
import { useAppSelector } from "@/lib/redux/store";

import Button from "@/app/components/Button";

import Table from "../components/Table";
import CreateNotification from "../components/CreateNotification";

const ArchivedNotifications = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [createNotificationModal, setCreateNotificationModal] = useState(false);

  const allHiddenNotificationsData = useAppSelector((state) => {
    return state.hiddenNotificationsReducer.hiddenNotifications
      .allHiddenNotifications?.data;
  });

  const pageNumber = searchParams?.get("page");
  const totalHiddenNotification = allHiddenNotificationsData?.totalNotification;
  const hiddenNotifications = allHiddenNotificationsData?.allNotifications;
  const totalPage =
    allHiddenNotificationsData?.totalPage === 0
      ? 1
      : allHiddenNotificationsData?.totalPage;

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
      <div className="flex items-center bg-white rounded-xl">
        <span
          onClick={() => window.history.back()}
          className="mr-4 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-200"
        >
          {icons.arrowLeft}
        </span>
        <h1 className="my-2 text-2xl font-bold flex justify-center">
          All archived notifications
        </h1>
      </div>
      <div className="my-2 flex justify-start items-center">
        <span className="font-bold">Total hidden notifications:</span>
        <span className="mx-4 text-lg">
          {totalHiddenNotification?.toLocaleString()}
        </span>
        <span>notification(s)</span>
      </div>
      <div className="flex-1">
        <Table notifications={hiddenNotifications} />
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

export default ArchivedNotifications;
