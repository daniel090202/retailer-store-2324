"use client";

import Card from "@/components/Card";

const Home = () => {
  return (
    <div className="mx-2 gap-x-14 w-full p-4 md:flex md:flex-col md:p-8">
      <div className="w-min relative p-4 shadow-lg rounded-xl">
        <h1 className="text-xl md:text-2xl lg:text-4xl">Notifications</h1>
        <span className="absolute z-10 px-2 py-1 text-xs top-[-8px] right-[216px] rounded-full bg-white shadow-xl md:py-2 md:px-4 md:top-[-12px] md:right-[-24px] md:text-base md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1">
          {1}
        </span>
      </div>
      <div className="my-4 grid grid-cols-4 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
