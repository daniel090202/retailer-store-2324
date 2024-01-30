import "tippy.js/dist/tippy.css";
import HeadlessTippy from "@tippyjs/react/headless";

import { useAppDispatch } from "@/lib/redux/store";
import { setCartItem } from "@/lib/redux/features";

import { Product, ProductDetail } from "@/models";

import SearchTippyElement from "./SearchProductTippyElement";

const SearchProductTippy = ({
  productResult,
  productDetailsResult,
  children,
}: {
  productResult?: Product;
  productDetailsResult?: Array<ProductDetail>;
  children: React.ReactElement;
}) => {
  const dispatch = useAppDispatch();

  const handleClickTippyContent = (
    productResult?: Product,
    productDetail?: ProductDetail
  ) => {
    if (productResult !== undefined && productDetail !== undefined) {
      dispatch(
        setCartItem({
          product: productResult,
          productDetail: productDetail,
        })
      );
    }
  };

  const renderTippyContent = ({ ...attrs }) => {
    return (
      productDetailsResult !== undefined && (
        <div
          className="z-10 w-96 absolute translate-x-[-50%] py-2 border text-base shadow-xl bg-white rounded-xl"
          {...attrs}
        >
          {productDetailsResult.map((productDetail, index) => {
            return (
              <SearchTippyElement
                key={index}
                SKU={productResult ? productDetail.SKU : "0000000000"}
                title={productResult ? productResult.name : "Not Found"}
                onClick={() => {
                  handleClickTippyContent(productResult, productDetail);
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
