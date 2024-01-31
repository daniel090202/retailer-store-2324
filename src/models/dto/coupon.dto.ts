import { ICoupon } from "../interfaces";

class Coupon implements ICoupon {
  public barcode: string;
  public discountPercentage: number;
  public usageStatus: number;
  public createdBy: string;
  public expiredIn: Date;

  constructor(
    barcode: string,
    discountPercentage: number,
    usageStatus: number,
    createdBy: string,
    expiredIn: Date
  ) {
    this.barcode = barcode;
    this.createdBy = createdBy;
    this.expiredIn = expiredIn;
    this.usageStatus = usageStatus;
    this.discountPercentage = discountPercentage;
  }
}

export { Coupon };
