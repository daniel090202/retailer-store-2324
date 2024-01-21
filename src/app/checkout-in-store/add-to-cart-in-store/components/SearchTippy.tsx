import "tippy.js/dist/tippy.css";
import HeadlessTippy from "@tippyjs/react/headless";

import { useAppDispatch } from "@/lib/redux/store";
import { setCartItem } from "@/lib/redux/features";

import { Product } from "@/models";

import SearchTippyElement from "./SearchTippyElement";

const SearchTippy = ({
  productsResult,
  children,
}: {
  productsResult?: Array<Product>;
  children: React.ReactElement;
}) => {
  const dispatch = useAppDispatch();

  const handleClickTippyContent = (product: Product) => {
    dispatch(setCartItem(product));
  };

  const renderTippyContent = ({ ...attrs }) => {
    return (
      productsResult !== undefined && (
        <div
          className="z-10 w-96 absolute translate-x-[-50%] py-2 border text-base shadow-xl bg-white rounded-xl"
          {...attrs}
        >
          {productsResult.map((product, index) => {
            return (
              <SearchTippyElement
                key={index}
                title={product.name}
                onClick={() => {
                  handleClickTippyContent(product);
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

export default SearchTippy;
