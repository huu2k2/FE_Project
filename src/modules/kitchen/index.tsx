import { Outlet } from "react-router-dom";
import { NavBar } from "./navbar";
import { DrawerBar } from "./drawer";
import { useCheffSocket } from "../../hooks/useCheffSocket";

export const LayoutKitchen: React.FC = () => {
  useCheffSocket();

  return (
    <>
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="flex flex-1 overflow-hidden">
          <DrawerBar />
          <main className="flex-1 p-2 overflow-y-auto bg-[#fff]">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};
