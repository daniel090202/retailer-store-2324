import SideBar from "./components/SideBar";

const CounterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:flex">
      <SideBar />
      {children}
    </div>
  );
};

export default CounterLayout;
