import { Outlet } from "react-router-dom";
import { NavBar } from "./navbar";
// import { DrawerBar } from "./drawer";

export const LayoutCustomer: React.FC = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex flex-1 overflow-hidden">
          <main className="flex-1 overflow-y-auto bg-[#fff] pb-16">
            <Outlet />
          </main>
        </div>
        <NavBar />
      </div>
    </>
  );
};
