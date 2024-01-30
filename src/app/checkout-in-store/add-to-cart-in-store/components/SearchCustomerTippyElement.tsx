import Image from "next/image";

import images from "@/assets/Images";

import { Customer } from "@/models";

const SearchCustomerTippyElement = ({
  customer,
  onClick,
}: {
  customer: Customer;
  onClick: () => void;
}) => {
  return (
    <div className="p-2 hover:bg-slate-100 flex" onClick={onClick}>
      <div className="mr-4 shadow-lg border rounded-full p-3 cursor-pointer">
        <Image
          src={images.maleDefaultProfilePicture}
          width={32}
          height={32}
          alt="User's profile picture."
        />
      </div>
      <div>
        <div className="mb-2">
          <span className="mr-8 text-lg font-bold">
            {customer.customerName}
          </span>
          <span>{customer.phone}</span>
        </div>
        <p>{customer.address}</p>
      </div>
    </div>
  );
};

export default SearchCustomerTippyElement;
