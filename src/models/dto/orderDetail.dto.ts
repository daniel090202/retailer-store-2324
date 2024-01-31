import { IOrderDetail } from "../interfaces";

class OrderDetail implements IOrderDetail {
  public productSKU: string;
  public purchasedQuantity: number;
  public totalExpense: number;
  public notes: string;

  constructor(
    productSKU: string,
    purchasedQuantity: number,
    totalExpense: number,
    notes: string
  ) {
    this.productSKU = productSKU;
    this.purchasedQuantity = purchasedQuantity;
    this.totalExpense = totalExpense;
    this.notes = notes;
  }
}

export { OrderDetail };
