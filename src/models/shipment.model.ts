import { Order } from "./order.model";

declare global {
  interface IShipment {
    barcode: string;
    location: string;
    orders: Array<Order>;
  }
}

class Shipment implements IShipment {
  public barcode: string;
  public location: string;
  public orders: Array<Order>;

  constructor(barcode: string, location: string, orders: Array<Order>) {
    this.barcode = barcode;
    this.location = location;
    this.orders = orders;
  }
}

export { Shipment };
