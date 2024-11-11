import { Outlet } from "react-router-dom";
import { NavBar } from "./navbar";
import { Drawer } from "./drawer";

export const LayoutCustomer: React.FC = () => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="flex flex-col h-screen">
            <div className="flex flex-1 overflow-hidden">
              <main className="flex-1 overflow-y-auto bg-[#fff] pb-16">
                <Outlet />
              </main>
            </div>
            <NavBar />
          </div>
        </div>
        <Drawer></Drawer>
      </div>
    </>
  );
};
