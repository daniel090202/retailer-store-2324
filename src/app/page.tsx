import Card from "@/components/Card";

const Home = () => {
  return (
    <div className="mx-2 gap-x-14 max-w-screen-xl p-4 md:flex md:flex-col md:p-8">
      <div className="w-min relative p-4 shadow-lg rounded-xl">
        <h1 className="text-xl md:text-2xl lg:text-4xl">Notifications</h1>
        <span className="absolute z-1 py-1 px-2 text-xs top-[-8px] right-[216px] rounded-full bg-white shadow-lg md:py-2 md:px-4 md:top-[-12px] md:right-[-24px] md:text-base md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1">
          {1}
        </span>
      </div>
      <div className="my-4 grid grid-cols-3 gap-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
