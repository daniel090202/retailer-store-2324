import * as request from "@/utils/http";

import { Product, ProductDetail } from "@/models";

const getProductsWithSKU = async (SKU: string = "", filter: string = "all") => {
  try {
    const url = "/products/get-product-with-sku";
    const params = new URLSearchParams([
      ["SKU", SKU],
      ["filter", filter],
    ]);

    const response = await request.get(url, { params });

    const productsData: {
      statusCode: number;
      message: string;
      data?: Array<ProductDetail>;
    } = response;

    if (productsData.statusCode === 200) {
      return productsData;
    }
  } catch (error) {
    console.log(error);
  }
};

const getProductWithUPC = async (UPC: string = "") => {
  try {
    const url = "/products/get-product-with-upc";
    const params = new URLSearchParams([["UPC", UPC]]);

    const response = await request.get(url, { params });

    const productsData: {
      statusCode: number;
      message: string;
      data?: Product;
    } = response;

    if (productsData.statusCode === 200) {
      return productsData;
    }
  } catch (error) {
    console.log(error);
  }
};

const getProductsWithUPC = async (
  pageNumber: string = "1",
  UPC: string = "",
  filter: string = "all",
  archivedProductStatus: string = "archived"
) => {
  try {
    const url = "/products/get-products-with-upc";
    const params = new URLSearchParams([
      ["page", pageNumber],
      ["UPC", UPC],
      ["filter", filter],
      ["archivedProductStatus", archivedProductStatus],
    ]);

    const response = await request.get(url, { params });

    const productsData: {
      statusCode: number;
      message: string;
      data?: {
        totalPage: number;
        totalProduct: number;
        allProducts: Array<Product>;
      };
    } = response;

    if (productsData.statusCode === 200) {
      return productsData;
    }
  } catch (error) {
    console.log(error);
  }
};

const getArchivedProducts = async (pageNumber: string) => {
  try {
    const url = "/products/get-all-archived-products";
    const params = new URLSearchParams([["page", pageNumber]]);

    const response = await request.get(url, { params });

    const archivedProductsData: {
      statusCode: number;
      message: string;
      data?: {
        totalPage: number;
        totalArchivedProduct: number;
        allArchivedProducts: Array<Product>;
      };
    } = response;

    if (archivedProductsData.statusCode === 200) {
      return archivedProductsData;
    }
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (product: {
  SKU: string;
  UPC: string;
  name: string;
  brand: string;
  forGender: string;
  category: Array<string>;
  originalPrice: string;
  salePrice: string;
  unit: string;
  details: Array<{
    size: string;
    color: string;
    initialInventory: string;
    minimumInventory: string;
    maximumInventory: string;
    storageLocation: Array<string>;
  }>;
}) => {
  try {
    const url = "/products/create-product";

    const response = await request.post(url, product);

    const createdProductData: {
      statusCode: number;
      message: string;
      data: Array<Product>;
    } = response.data;

    console.log(createdProductData);

    if (createdProductData.statusCode === 200) {
      return createdProductData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const archiveProduct = async (UPC: string): Promise<Product | undefined> => {
  try {
    const url = "/products/archive-product";

    const response = await request.patch(url, { UPC });

    const archivedCustomerData: {
      statusCode: number;
      message: string;
      data?: Product;
    } = response.data;

    if (archivedCustomerData.statusCode === 200) {
      return archivedCustomerData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const publishProduct = async (UPC: string): Promise<Product | undefined> => {
  try {
    const url = "/products/publish-product";

    const response = await request.patch(url, { UPC });

    const publishedProductData: {
      statusCode: number;
      message: string;
      data?: Product;
    } = response.data;

    if (publishedProductData.statusCode === 200) {
      return publishedProductData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const updateProductUPC = async (
  previousUPC: string,
  updatedUPC: string
): Promise<Product | undefined> => {
  try {
    const url = "/products/update-product-upc";

    const response = await request.patch(url, { previousUPC, updatedUPC });

    const userData: {
      statusCode: number;
      message: string;
      data?: Product;
    } = response.data;

    if (userData.statusCode === 200) {
      return userData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const updateProductBrand = async (
  UPC: string,
  brand: string
): Promise<Product | undefined> => {
  try {
    const url = "/products/update-product-brand";

    const response = await request.patch(url, { UPC, brand });

    const userData: {
      statusCode: number;
      message: string;
      data?: Product;
    } = response.data;

    if (userData.statusCode === 200) {
      return userData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const updateProductOriginalPrice = async (
  UPC: string,
  originalPrice: string
): Promise<Product | undefined> => {
  try {
    const url = "/products/update-product-original-price";

    const response = await request.patch(url, { UPC, originalPrice });

    const userData: {
      statusCode: number;
      message: string;
      data?: Product;
    } = response.data;

    if (userData.statusCode === 200) {
      return userData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const updateProductSalePrice = async (
  UPC: string,
  salePrice: string
): Promise<Product | undefined> => {
  try {
    const url = "/products/update-product-sale-price";

    const response = await request.patch(url, { UPC, salePrice });

    const userData: {
      statusCode: number;
      message: string;
      data?: Product;
    } = response.data;

    if (userData.statusCode === 200) {
      return userData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const updateProductDetailsSKU = async (
  previousSKU: string,
  updatedSKU: string
): Promise<ProductDetail | undefined> => {
  try {
    const url = "/products/update-product-details-sku";

    const response = await request.patch(url, { previousSKU, updatedSKU });

    const userData: {
      statusCode: number;
      message: string;
      data?: ProductDetail;
    } = response.data;

    if (userData.statusCode === 200) {
      return userData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const updateProductDetailsColor = async (
  SKU: string,
  color: string
): Promise<ProductDetail | undefined> => {
  try {
    const url = "/products/update-product-details-color";

    const response = await request.patch(url, { SKU, color });

    const userData: {
      statusCode: number;
      message: string;
      data?: ProductDetail;
    } = response.data;

    if (userData.statusCode === 200) {
      return userData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const updateProductDetailsSize = async (
  SKU: string,
  size: string
): Promise<ProductDetail | undefined> => {
  try {
    const url = "/products/update-product-details-size";

    const response = await request.patch(url, { SKU, size });

    const userData: {
      statusCode: number;
      message: string;
      data?: ProductDetail;
    } = response.data;

    if (userData.statusCode === 200) {
      return userData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const updateProductDetailsMinimumInventory = async (
  SKU: string,
  minimumInventory: string
): Promise<ProductDetail | undefined> => {
  try {
    const url = "/products/update-product-details-minimum-inventory";

    const response = await request.patch(url, { SKU, minimumInventory });

    const userData: {
      statusCode: number;
      message: string;
      data?: ProductDetail;
    } = response.data;

    if (userData.statusCode === 200) {
      return userData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const updateProductDetailsMaximumInventory = async (
  SKU: string,
  maximumInventory: string
): Promise<ProductDetail | undefined> => {
  try {
    const url = "/products/update-product-details-maximum-inventory";

    const response = await request.patch(url, { SKU, maximumInventory });

    const userData: {
      statusCode: number;
      message: string;
      data?: ProductDetail;
    } = response.data;

    if (userData.statusCode === 200) {
      return userData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const updateProductDetailsRemainInventory = async (
  SKU: string,
  remainInventory: string
): Promise<ProductDetail | undefined> => {
  try {
    const url = "/products/update-product-details-remain-inventory";

    const response = await request.patch(url, { SKU, remainInventory });

    const userData: {
      statusCode: number;
      message: string;
      data?: ProductDetail;
    } = response.data;

    if (userData.statusCode === 200) {
      return userData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export {
  getProductsWithSKU,
  getProductWithUPC,
  getProductsWithUPC,
  getArchivedProducts,
  createProduct,
  archiveProduct,
  publishProduct,
  updateProductUPC,
  updateProductBrand,
  updateProductOriginalPrice,
  updateProductSalePrice,
  updateProductDetailsSKU,
  updateProductDetailsColor,
  updateProductDetailsSize,
  updateProductDetailsMinimumInventory,
  updateProductDetailsMaximumInventory,
  updateProductDetailsRemainInventory,
};
