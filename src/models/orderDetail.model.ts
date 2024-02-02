declare global {
  interface IOrderDetail {
    orderID: number;
    productSKU: string;
    purchasedQuantity: number;
    totalExpense: number;
    notes: string;
  }
}

class OrderDetail implements IOrderDetail {
  public orderID: number;
  public productSKU: string;
  public purchasedQuantity: number;
  public totalExpense: number;
  public notes: string;

  constructor(
    orderID: number,
    productSKU: string,
    purchasedQuantity: number,
    totalExpense: number,
    notes: string
  ) {
    this.orderID = orderID;
    this.productSKU = productSKU;
    this.purchasedQuantity = purchasedQuantity;
    this.totalExpense = totalExpense;
    this.notes = notes;
  }
}

export { OrderDetail };
