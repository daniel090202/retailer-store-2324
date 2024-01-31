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
    <div className="px-4 py-2 flex hover:bg-slate-100" onClick={onClick}>
      <div className="mr-4 shadow-lg border rounded-full p-3 cursor-pointer">
        <Image
          src={images.maleDefaultProfilePicture}
          width={32}
          height={32}
          alt="User's profile picture."
        />
      </div>
      <div className="flex-1">
        <div className="mb-2 flex justify-between items-center">
          <span className="text-lg font-bold">
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
