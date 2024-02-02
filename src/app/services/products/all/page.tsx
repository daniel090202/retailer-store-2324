"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import icons from "@/assets/Icons";
import Button from "@/components/Button";

import { appRoutes } from "@/config/pathConfig";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { getAllProducts, getAllArchivedProducts } from "@/redux-api";

import Table from "../components/Table";
import CreateProduct from "../components/CreateProduct";

const AllProducts = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();

  const [createProductModal, setCreateProductModal] = useState(false);

  const allProductsData = useAppSelector((state) => {
    return state.productsReducer.products.allProducts?.data;
  });

  const allArchivedProductsData = useAppSelector((state) => {
    return state.archivedProductsReducer.archivedProducts.allArchivedProducts
      ?.data;
  });

  const pageNumber = searchParams?.get("page");
  const allProducts = allProductsData?.allProducts;
  const totalProduct = allProductsData?.totalProduct;
  const allArchivedProducts = allArchivedProductsData?.allArchivedProducts;
  const totalPage =
    allProductsData?.totalPage === 0 ? 1 : allProductsData?.totalPage;

  useEffect(() => {
    const fetchProducts = async () => {
      if (pageNumber !== null && pageNumber !== undefined) {
        await getAllProducts(pageNumber, dispatch);
        await getAllArchivedProducts(pageNumber, dispatch);
      }
    };

    fetchProducts();
  }, [pageNumber, totalPage, dispatch]);

  const handleCreateProduct = () => {
    setCreateProductModal(true);
  };

  const handleViewArchivedProducts = () => {
    const archivedPageNumber = 1;
    const path = `${appRoutes.products.archived}?page=${archivedPageNumber}`;

    router.push(path);
  };

  const handleViewPreviousPage = () => {
    if (
      pageNumber !== null &&
      pageNumber !== undefined &&
      parseInt(pageNumber) > 1
    ) {
      const previousPage = parseInt(pageNumber) - 1;
      const path = `${appRoutes.users.all}?page=${previousPage}`;

      router.push(path);
    }

    return;
  };

  const handleViewNextPage = () => {
    if (
      totalPage !== undefined &&
      pageNumber !== null &&
      pageNumber !== undefined &&
      parseInt(pageNumber) < totalPage
    ) {
      const nextPage = parseInt(pageNumber) + 1;
      const path = `${appRoutes.users.all}?page=${nextPage}`;

      router.push(path);
    }

    return;
  };

  return (
    <div className="flex-1 flex flex-col mx-2 my-4 p-4 h-[680px] bg-white rounded-xl">
      <h1 className="my-2 text-2xl font-bold flex justify-center">
        Products catalog management
      </h1>
      <div className="flex justify-between">
        <div className="my-2">
          <span className="font-bold">
            Total available products in the store:
          </span>
          <span className="mx-4 text-lg">{totalProduct?.toLocaleString()}</span>
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
            Archive ({allArchivedProducts?.length.toLocaleString()})
          </Button>
        </div>
      </div>
      <div className="flex-1">
        <Table products={allProducts} />
      </div>
      <div className="flex justify-center items-center">
        <span>Page</span>
        <div className="mx-2">
          <span>{pageNumber}</span>
          <span>/</span>
          <span>{totalPage}</span>
        </div>
        <Button
          className="mx-4"
          leftIcon={icons.chevronLeft}
          onClick={() => handleViewPreviousPage()}
          type={pageNumber == "1" ? "disabled" : "default"}
        >
          Previous
        </Button>
        <Button
          rightIcon={icons.chevronRight}
          onClick={() => handleViewNextPage()}
          type={pageNumber == totalPage ? "disabled" : "default"}
        >
          Next
        </Button>
      </div>
      <CreateProduct
        createProductModal={createProductModal}
        setCreateProductModal={setCreateProductModal}
      />
    </div>
  );
};

export default AllProducts;
