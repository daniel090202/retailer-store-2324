import SideBar from "./components/SideBar";

const CustomerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:flex">
      <SideBar />
      {children}
    </div>
  );
};

export default CustomerLayout;
