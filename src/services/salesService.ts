import * as request from "@/utils/http";

const getSalesByTimeline = async (
  pageNumber: string = "1",
  timeline: string = "2",
  startDay?: string,
  endDay?: string
) => {
  try {
    const url = "/sales-performance/get-sales-by-timeline-or-time-period";

    let params;

    if (startDay && endDay) {
      params = new URLSearchParams([
        ["timeline", timeline],
        ["page", pageNumber],
        ["startDay", startDay],
        ["endDay", endDay],
      ]);
    } else {
      params = new URLSearchParams([
        ["timeline", timeline],
        ["page", pageNumber],
      ]);
    }

    const response = await request.get(url, { params });

    const salesData: {
      statusCode: number;
      message: string;
      data?: {
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
    } = response;

    if (salesData?.statusCode === 200) {
      return salesData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export { getSalesByTimeline };
