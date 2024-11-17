import { Outlet } from "react-router-dom";
import { NavBar } from "./navbar";
import { DrawerBar } from "./drawer";
import { useEffect } from "react";
import { io } from "socket.io-client";

const URL = "http://localhost:8989/cheff";

export const LayoutKitchen: React.FC = () => {
  useEffect(() => {
    const cheffSocket = io(URL);
    cheffSocket.on("connection", () => {
      console.log("connected to server");
    });

    cheffSocket.on("test", (mes: string) => {
      console.log(mes);
    });

    return () => {
      cheffSocket.on("disconnect", () => {});
    };
  });

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
