"use client";

import Image from "next/image";

import images from "@/assets/Images";

const User = ({ params }: { params: { id: string } }) => {
  const user = {
    fullName: "Nguyen Le Minh Khanh",
    age: 21,
    gender: 0,
    salary: 3000000,
    address: "Ho Chi Minh",
    phone: "0936730339",
    email: "minhkhanh090202@gmail.com",
  };

  return (
    <div className="flex-1 h-[480px] mx-2 my-4 p-4 bg-white rounded-xl overflow-y-scroll">
      <div className="flex justify-center items-center">
        <div className="shadow-lg border rounded-xl p-3 cursor-pointer">
          <Image
            src={images.maleDefaultProfilePicture}
            width={40}
            height={40}
            alt="User's profile picture."
          />
        </div>
        <h1 className="mx-4 text-2xl font-bold">{user.fullName}</h1>
      </div>
      <div className="mx-auto py-3 space-y-3 grid grid-cols-2 gap-x-4">
        <div className="my-4">
          <label htmlFor="email">Email address</label>
          <p
            id="email"
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          >
            {user.email}
          </p>
        </div>
        <div className="my-4">
          <label htmlFor="address">Residential address</label>
          <p
            id="address"
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          >
            {user.address}
          </p>
        </div>
        <div className="my-4">
          <label htmlFor="phone">Phone number</label>
          <p
            id="phone"
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          >
            {user.phone}
          </p>
        </div>
        <div className="my-4">
          <label htmlFor="salary">Basic salary</label>
          <p
            id="salary"
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          >
            {user.salary.toLocaleString()} VND
          </p>
        </div>
        <div className="my-4">
          <label htmlFor="age">Age</label>
          <p
            id="age"
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          >
            {user.age}
          </p>
        </div>
        <div className="my-4">
          <label htmlFor="gender">Gender</label>
          <p
            id="gender"
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          >
            {user.gender === 0 ? "Male" : "Female"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
