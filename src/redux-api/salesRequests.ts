import {
  getSalesStart,
  getSalesSuccess,
  getSalesFailed,
} from "@/lib/redux/features";
import { getSalesByTimeline } from "@/services";

import { AppDispatch } from "@/lib/redux/store";

const dispatchSalesByTimelineOrTimePeriod = async (
  dispatch: AppDispatch,
  pageNumber: string,
  timeline: string,
  startDay?: string,
  endDay?: string
) => {
  dispatch(getSalesStart());

  try {
    const salesData = (await getSalesByTimeline(pageNumber, timeline, startDay, endDay)) as {
      totalPage: number;
      totalOrders: number;
      totalRevenue: number;
      totalAmount: number;
      salesData: Array<{
        date: number;
        month: number;
        year: number;
        day: string;
        totalOrders: number;
        totalRevenue: number;
        totalAmount: number;
      }>;
    };

    dispatch(getSalesSuccess(salesData));
  } catch (error) {
    dispatch(getSalesFailed());
  }
};

export { dispatchSalesByTimelineOrTimePeriod };
