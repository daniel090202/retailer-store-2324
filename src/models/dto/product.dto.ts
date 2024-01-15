import { IProduct } from "../interfaces";

class Product implements IProduct {
  public SKU: string;
  public UPC: string;
  public name: string;
  public brand: string;
  public forGender: number;
  public category: Array<number>;
  public size: Array<string>;
  public color: Array<string>;
  public originalPrice: number;
  public salePrice: number;
  public unit: number;
  public initialInventory: number;
  public minimumInventory: number;
  public maximumInventory: number;
  public remainInventory: number;
  public soldQuantity: number;
  public storageLocation: Array<number>;
  public displayLocation: Array<number>;
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
    size: Array<string>,
    color: Array<string>,
    originalPrice: number,
    salePrice: number,
    unit: number,
    initialInventory: number,
    minimumInventory: number,
    maximumInventory: number,
    remainInventory: number,
    soldQuantity: number,
    storageLocation: Array<number>,
    displayLocation: Array<number>,
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
    this.size = size;
    this.color = color;
    this.originalPrice = originalPrice;
    this.salePrice = salePrice;
    this.unit = unit;
    this.initialInventory = initialInventory;
    this.minimumInventory = minimumInventory;
    this.maximumInventory = maximumInventory;
    this.remainInventory = remainInventory;
    this.soldQuantity = soldQuantity;
    this.storageLocation = storageLocation;
    this.displayLocation = displayLocation;
    this.active = active;
    this.archived = archived;
    this.verified = verified;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export { Product };
