import { Outlet } from "react-router-dom";
import { NavBar } from "./navbar";
import { DrawerBar } from "./drawer";
import { useEffect, useState } from "react";
import { initializeCheffSocket } from "../../hooks/useCheffSocket";
// import { handleReceiveMess } from "../../hooks/fc.socket";

export const LayoutKitchen: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      const socket = initializeCheffSocket();
      return () => {
        socket.disconnect();
      };
    }, 100);
  }, []);
  return (
    <>
      {isLoading && (
        <div className="flex flex-col h-screen">
          <NavBar />
          <div className="flex flex-1 overflow-hidden">
            <DrawerBar />
            <main className="flex-1 p-2 overflow-y-auto bg-[#fff]">
              <Outlet />
            </main>
          </div>
        </div>
      )}
    </>
  );
};
