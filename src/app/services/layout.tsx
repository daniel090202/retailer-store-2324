import SideBar from "./components/SideBar";

const ServicesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <SideBar />
      {children}
    </div>
  );
};

export default ServicesLayout;
