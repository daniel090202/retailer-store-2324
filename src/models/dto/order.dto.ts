import { IOrder } from "../interfaces";
import { OrderDetail } from "./orderDetail.dto";

class Order implements IOrder {
  public customerPhone: string;
  public customerPayment: number;
  public customerPaymentMethod: number;
  public counterID: string;
  public cashierUserName: string;
  public couponsAmount: number;
  public totalExpense: number;
  public totalAmount: number;
  public totalDiscount: number;
  public exchange: number;
  public notes: string;
  public paymentStatus: number;
  public shipmentBarcode: string;
  public coupons: Array<string>;
  public orderDetails: Array<OrderDetail>;

  constructor(
    customerPhone: string,
    customerPayment: number,
    customerPaymentMethod: number,
    counterID: string,
    cashierUserName: string,
    couponsAmount: number,
    totalExpense: number,
    totalAmount: number,
    totalDiscount: number,
    exchange: number,
    notes: string,
    paymentStatus: number,
    shipmentBarcode: string,
    coupons: Array<string>,
    orderDetails: Array<OrderDetail>
  ) {
    this.customerPhone = customerPhone;
    this.customerPayment = customerPayment;
    this.customerPaymentMethod = customerPaymentMethod;
    this.counterID = counterID;
    this.cashierUserName = cashierUserName;
    this.couponsAmount = couponsAmount;
    this.totalExpense = totalExpense;
    this.totalAmount = totalAmount;
    this.totalDiscount = totalDiscount;
    this.exchange = exchange;
    this.notes = notes;
    this.paymentStatus = paymentStatus;
    this.shipmentBarcode = shipmentBarcode;
    this.coupons = coupons;
    this.orderDetails = orderDetails;
  }
}

export { Order };
