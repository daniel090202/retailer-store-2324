const Home = () => {
  return (
    <div className="mx-2 gap-x-14 items-center max-w-screen-xl p-4 md:flex md:p-8">
      <div className="relative">
        <h1 className="text-xl md:text-2xl lg:text-4xl">Notifications</h1>
        <span className="absolute z-1 py-1 px-2 text-xs top-[-8px] right-[216px] rounded-full bg-white shadow-lg md:py-2 md:px-4 md:top-[-12px] md:right-[-24px] md:text-base md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1">
          1
        </span>
      </div>
    </div>
  );
};

export default Home;
