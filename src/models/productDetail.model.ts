declare global {
  interface IProductDetail {
    UPC: string;
    SKU: string;
    size: string;
    color: string;
    initialInventory: number;
    minimumInventory: number;
    maximumInventory: number;
    remainInventory: number;
    soldQuantity: number;
    storageLocation: Array<number>;
    displayLocation: Array<number>;
  }
}

class ProductDetail implements IProductDetail {
  public UPC: string;
  public SKU: string;
  public size: string;
  public color: string;
  public initialInventory: number;
  public minimumInventory: number;
  public maximumInventory: number;
  public remainInventory: number;
  public soldQuantity: number;
  public storageLocation: Array<number>;
  public displayLocation: Array<number>;

  constructor(
    UPC: string,
    SKU: string,
    size: string,
    color: string,
    initialInventory: number,
    minimumInventory: number,
    maximumInventory: number,
    remainInventory: number,
    soldQuantity: number,
    storageLocation: Array<number>,
    displayLocation: Array<number>
  ) {
    this.UPC = UPC;
    this.SKU = SKU;
    this.size = size;
    this.color = color;
    this.initialInventory = initialInventory;
    this.minimumInventory = minimumInventory;
    this.maximumInventory = maximumInventory;
    this.remainInventory = remainInventory;
    this.soldQuantity = soldQuantity;
    this.storageLocation = storageLocation;
    this.displayLocation = displayLocation;
  }
}

export { ProductDetail };
