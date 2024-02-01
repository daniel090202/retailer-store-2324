declare global {
  interface IOrderDetail {
    orderID: number;
    productSKU: string;
    purchasedQuantity: number;
    totalExpense: number;
    notes: string;
  }
}

export type { IOrderDetail };
