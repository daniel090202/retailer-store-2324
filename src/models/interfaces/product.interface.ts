import { ProductDetail } from "../dto";

interface IProduct {
  SKU: string;
  UPC: string;
  name: string;
  brand: string;
  forGender: number;
  category: Array<number>;
  originalPrice: number;
  salePrice: number;
  unit: number;
  productDetail: Array<ProductDetail>;
  active: boolean;
  archived: boolean;
  verified: boolean;
  createdAt: string;
  updatedAt: string;
}

export type { IProduct };
