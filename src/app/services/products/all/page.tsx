"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import icons from "@/assets/Icons";
import Button from "@/components/Button";

import { getAllArchivedProducts } from "@/redux-api";
import { appRoutes } from "@/config/pathConfig";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";

import Table from "../components/Table";
import CreateProduct from "../components/CreateProduct";

const AllProducts = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [createProductModal, setCreateProductModal] = useState(false);

  const products = useAppSelector((state) => {
    return state.productsReducer.products.allProducts?.data;
  });

  const archivedProducts = useAppSelector((state) => {
    return state.archivedProductsReducer.archivedProducts.allArchivedProducts
      ?.data;
  });

  useEffect(() => {
    const fetchProducts = async () => {
      await getAllArchivedProducts(dispatch);
    };

    fetchProducts();
  }, []);

  const handleCreateProduct = () => {
    setCreateProductModal(true);
  };

  const handleViewArchivedProducts = () => {
    router.push(appRoutes.products.archived);
  };

  return (
    <div className="mx-2 my-4 p-4 h-[680px] bg-white rounded-xl">
      <h1 className="my-2 text-2xl font-bold flex justify-center">
        Products catalog management
      </h1>
      <div className="flex justify-between">
        <div className="my-2">
          <span>Total available products in the store:</span>
          <span className="mx-4 text-lg">
            {products?.length.toLocaleString()}
          </span>
          <span>item(s)</span>
        </div>
        <div>
          <Button
            leftIcon={icons.plus}
            rightIcon=""
            className="mx-2"
            onClick={() => handleCreateProduct()}
          >
            New product
          </Button>
          <Button
            leftIcon={icons.archive}
            rightIcon=""
            className=""
            onClick={() => handleViewArchivedProducts()}
          >
            Archive ({archivedProducts?.length.toLocaleString()})
          </Button>
        </div>
      </div>
      <Table products={products} />
      <CreateProduct
        createProductModal={createProductModal}
        setCreateProductModal={setCreateProductModal}
      />
    </div>
  );
};

export default AllProducts;
