"use client";

import { useRouter, useSearchParams } from "next/navigation";

import icons from "@/assets/Icons";
import { appRoutes } from "@/config/pathConfig";
import { useAppSelector } from "@/lib/redux/store";

import Button from "@/app/components/Button";

import Table from "./components/Table";
import Filter from "./components/Filter";

const SalesPerformance = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const overallSales = useAppSelector((state) => {
    return state.salesReducer.sales.sales;
  });

  const salesData = overallSales?.salesData;
  const pageNumber = searchParams?.get("page");
  const totalPage = overallSales?.totalPage === 0 ? 1 : overallSales?.totalPage;

  const handleViewPreviousPage = () => {
    if (
      pageNumber !== null &&
      pageNumber !== undefined &&
      parseInt(pageNumber) > 1
    ) {
      const previousPage = parseInt(pageNumber) - 1;
      const path = `${appRoutes.salesPerformance.statistic}?page=${previousPage}`;

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
      const path = `${appRoutes.salesPerformance.statistic}?page=${nextPage}`;

      router.push(path);
    }
  };

  return (
    <div className="flex-1 flex flex-col mx-2 my-4 p-4 h-[680px] bg-white rounded-xl flex flex-col">
      <h1 className="text-2xl font-bold flex justify-center">Sales report</h1>
      <div className="flex flex-col justify-center">
        <div>
          <span className="font-bold">Total products sold in this week:</span>
          <span className="mx-4 text-lg">{overallSales?.totalAmount}</span>
          <span>item(s)</span>
        </div>
        <div className="my-2">
          <span className="font-bold">Total orders placed in this week:</span>
          <span className="mx-4 text-lg">{overallSales?.totalOrders}</span>
          <span>order(s)</span>
        </div>
        <div>
          <span className="font-bold">
            Overall revenue of the branch in this week:
          </span>
          <span className="mx-4 text-lg">
            {overallSales?.totalRevenue.toLocaleString()}
          </span>
          <span>VND</span>
        </div>
      </div>
      <Filter />
      <div className="flex-1">
        <Table salesData={salesData} />
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

export default SalesPerformance;
