import icons from "@/assets/Icons";

import "tippy.js/dist/tippy.css";
import HeadlessTippy from "@tippyjs/react/headless";

import { useAppDispatch } from "@/lib/redux/store";
import { setCartCustomer } from "@/lib/redux/features";

import { Customer } from "@/models";

import SearchCustomerTippyElement from "./SearchCustomerTippyElement";

const SearchCustomerTippy = ({
  customersResult,
  setSearchCustomer,
  setCustomersResult,
  createCustomerModal,
  setCreateCustomerModal,
  children,
}: {
  createCustomerModal: boolean;
  customersResult?: Array<Customer>;
  setSearchCustomer: (value: string) => void;
  setCreateCustomerModal: (value: boolean) => void;
  setCustomersResult: (values?: Array<Customer>) => void;
  children: React.ReactElement;
}) => {
  const dispatch = useAppDispatch();

  const handleClickTippyContent = (customer: Customer) => {
    dispatch(setCartCustomer(customer));
  };

  const handleCreateCustomerModal = () => {
    setSearchCustomer("");
    setCustomersResult(undefined);
    setCreateCustomerModal(!createCustomerModal);
  };

  const renderTippyContent = ({ ...attrs }) => {
    return (
      customersResult !== undefined && (
        <div
          className="z-10 w-96 absolute translate-x-[-50%] py-2 border text-base shadow-xl bg-white rounded-xl"
          {...attrs}
        >
          {customersResult.map((customer, index) => {
            return (
              <SearchCustomerTippyElement
                key={index}
                customer={customer}
                onClick={() => {
                  handleClickTippyContent(customer);
                }}
              />
            );
          })}
          <hr />
          <div
            className="p-4 bg-gray-100 flex justify-center items-center cursor-pointer hover:bg-slate-200"
            onClick={() => handleCreateCustomerModal()}
          >
            <span
              className="px-2 py-1 rounded-full cursor-pointer hover:bg-gray-200"
              onClick={() => setCreateCustomerModal(!createCustomerModal)}
            >
              {icons.plus}
            </span>
            <span>Create customer</span>
          </div>
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
      onClickOutside={() => {
        setCustomersResult(undefined);
      }}
    >
      {children}
    </HeadlessTippy>
  );
};

export default SearchCustomerTippy;
