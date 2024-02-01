import { IOrder } from "../interfaces";
import { OrderDetail } from "./orderDetail.dto";

class Order implements IOrder {
  public id: number;
  public customerPhone: string;
  public customerPayment: number;
  public customerPaymentMethod: number;
  public counterID: string;
  public cashierUserName: string;
  public couponsAmount: number;
  public addedCoupons: Array<string>;
  public totalExpense: number;
  public totalAmount: number;
  public totalDiscount: number;
  public exchange: number;
  public notes: string;
  public paymentStatus: number;
  public shipmentBarcode: string;
  public coupons: Array<string>;
  public orderDetails: Array<OrderDetail>;
  public createdAt: string;
  public updatedAt: string;

  constructor(
    id: number,
    customerPhone: string,
    customerPayment: number,
    customerPaymentMethod: number,
    counterID: string,
    cashierUserName: string,
    couponsAmount: number,
    addedCoupons: Array<string>,
    totalExpense: number,
    totalAmount: number,
    totalDiscount: number,
    exchange: number,
    notes: string,
    paymentStatus: number,
    shipmentBarcode: string,
    coupons: Array<string>,
    orderDetails: Array<OrderDetail>,
    createdAt: string,
    updatedAt: string
  ) {
    this.id = id;
    this.customerPhone = customerPhone;
    this.customerPayment = customerPayment;
    this.customerPaymentMethod = customerPaymentMethod;
    this.counterID = counterID;
    this.cashierUserName = cashierUserName;
    this.couponsAmount = couponsAmount;
    this.addedCoupons = addedCoupons;
    this.totalExpense = totalExpense;
    this.totalAmount = totalAmount;
    this.totalDiscount = totalDiscount;
    this.exchange = exchange;
    this.notes = notes;
    this.paymentStatus = paymentStatus;
    this.shipmentBarcode = shipmentBarcode;
    this.coupons = coupons;
    this.orderDetails = orderDetails;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export { Order };
