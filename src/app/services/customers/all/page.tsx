"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import icons from "@/assets/Icons";
import Button from "@/components/Button";

import { appRoutes } from "@/config/pathConfig";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { getAllCustomers, getAllArchivedCustomers } from "@/redux-api";

import Table from "../components/Table";

const AllCustomers = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();

  const allCustomersData = useAppSelector((state) => {
    return state.customersReducer.customers.allCustomers?.data;
  });

  const allArchivedCustomersData = useAppSelector((state) => {
    return state.archivedCustomersReducer.archivedCustomers.allArchivedCustomers
      ?.data;
  });

  const pageNumber = searchParams?.get("page");
  const allCustomers = allCustomersData?.allCustomers;
  const totalCustomer = allCustomersData?.totalCustomer;
  const allArchivedCustomers = allArchivedCustomersData?.allArchivedCustomers;
  const totalPage =
    allCustomersData?.totalPage === 0 ? 1 : allCustomersData?.totalPage;

  useEffect(() => {
    const fetchCustomers = async () => {
      if (pageNumber !== null && pageNumber !== undefined) {
        await getAllCustomers(pageNumber, dispatch);
        await getAllArchivedCustomers(pageNumber, dispatch);
      }
    };

    fetchCustomers();
  }, [pageNumber, totalPage, dispatch]);

  const handleViewArchivedUsers = () => {
    const archivedPageNumber = 1;
    const path = `${appRoutes.customers.archived}?page=${archivedPageNumber}`;

    router.push(path);
  };

  const handleViewPreviousPage = () => {
    if (
      pageNumber !== null &&
      pageNumber !== undefined &&
      parseInt(pageNumber) > 1
    ) {
      const previousPage = parseInt(pageNumber) - 1;
      const path = `${appRoutes.users.all}?page=${previousPage}`;

      router.push(path);
    }

    return;
  };

  const handleViewNextPage = () => {
    if (
      totalPage !== undefined &&
      pageNumber !== null &&
      pageNumber !== undefined &&
      parseInt(pageNumber) < totalPage
    ) {
      const nextPage = parseInt(pageNumber) + 1;
      const path = `${appRoutes.users.all}?page=${nextPage}`;

      router.push(path);
    }

    return;
  };

  return (
    <div className="flex-1 flex flex-col mx-2 my-4 p-4 h-[680px] bg-white rounded-xl">
      <h1 className="my-2 text-2xl font-bold flex justify-center">
        Customers relationship management
      </h1>
      <div className="flex justify-between">
        <div className="my-2">
          <span className="font-bold">
            Total available customers in the store:
          </span>
          <span className="mx-4 text-lg">
            {totalCustomer?.toLocaleString()}
          </span>
          <span>person(s)</span>
        </div>
        <div>
          <Button
            leftIcon={icons.archive}
            rightIcon=""
            className=""
            onClick={() => handleViewArchivedUsers()}
          >
            Archive ({allArchivedCustomers?.length.toLocaleString()})
          </Button>
        </div>
      </div>
      <div className="flex-1">
        <Table customers={allCustomers} />
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
    </div>
  );
};

export default AllCustomers;
