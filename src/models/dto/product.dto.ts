import { IProduct } from "../interfaces";
import { ProductDetail } from "./productDetail.dto";

class Product implements IProduct {
  public SKU: string;
  public UPC: string;
  public name: string;
  public brand: string;
  public forGender: number;
  public category: Array<number>;
  public originalPrice: number;
  public salePrice: number;
  public unit: number;
  public productDetails: Array<ProductDetail>;
  public active: boolean;
  public archived: boolean;
  public verified: boolean;
  public createdAt: string;
  public updatedAt: string;

  constructor(
    SKU: string,
    UPC: string,
    name: string,
    brand: string,
    forGender: number,
    category: Array<number>,
    originalPrice: number,
    salePrice: number,
    unit: number,
    productDetails: Array<ProductDetail>,
    active: boolean,
    archived: boolean,
    verified: boolean,
    createdAt: string,
    updatedAt: string
  ) {
    this.SKU = SKU;
    this.UPC = UPC;
    this.name = name;
    this.brand = brand;
    this.forGender = forGender;
    this.category = category;
    this.originalPrice = originalPrice;
    this.salePrice = salePrice;
    this.unit = unit;
    this.productDetails = productDetails;
    this.active = active;
    this.archived = archived;
    this.verified = verified;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export { Product };
