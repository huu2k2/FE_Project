import { Outlet } from "react-router-dom";
import { NavBar } from "./navbar";
import { Drawer } from "./drawer";

export const LayoutCustomer: React.FC = () => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-[#fff]">
          <div className="h-full">
            <main className="flex-1 ">
              <Outlet />
            </main>
            <NavBar />
          </div>
        </div>
        <Drawer></Drawer>
      </div>
    </>
  );
};
