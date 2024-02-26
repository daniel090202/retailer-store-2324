import "tippy.js/dist/tippy.css";
import HeadlessTippy from "@tippyjs/react/headless";

import { useAppDispatch } from "@/lib/redux/store";
import { setCartItem } from "@/lib/redux/features";

import { Product, ProductDetail } from "@/models";

import SearchTippyElement from "./SearchProductTippyElement";

const SearchProductTippy = ({
  productsWithEachDetailResult,
  children,
}: {
  productsWithEachDetailResult?: Array<{
    product: Product;
    detail: ProductDetail;
  }>;
  children: React.ReactElement;
}) => {
  const dispatch = useAppDispatch();

  const handleClickTippyContent = (
    product?: Product,
    productDetail?: ProductDetail
  ) => {
    if (product !== undefined && productDetail !== undefined) {
      dispatch(
        setCartItem({
          product: product,
          productDetail: productDetail,
        })
      );
    }
  };

  const renderTippyContent = ({ ...attrs }) => {
    return (
      productsWithEachDetailResult !== undefined && (
        <div
          className="z-10 w-96 absolute translate-x-[-50%] py-2 border text-base shadow-xl bg-white rounded-xl"
          {...attrs}
        >
          {productsWithEachDetailResult.map((productWithEachDetail, index) => {
            const product = productWithEachDetail.product;
            const productDetail = productWithEachDetail.detail;

            return (
              <SearchTippyElement
                key={index}
                SKU={productDetail ? productDetail.SKU : "0000000000"}
                title={product ? product.name : "Not Found"}
                onClick={() => {
                  handleClickTippyContent(product, productDetail);
                }}
              />
            );
          })}
        </div>
      )
    );
  };

  return (
    <HeadlessTippy
      visible={true}
      interactive={true}
      placement="bottom"
      render={(attrs) => renderTippyContent(attrs)}
    >
      {children}
    </HeadlessTippy>
  );
};

export default SearchProductTippy;
