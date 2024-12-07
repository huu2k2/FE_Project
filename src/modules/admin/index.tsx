import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { NavBar } from "./navbar";
import { DrawerBar } from "./drawer";
import { useLayoutEffect } from "react";

export const LayoutAdmin: React.FC = () => {
  const path = useLocation()
  const navigation = useNavigate()
  useLayoutEffect(()=>{
    if (path.pathname === '/management') {
      navigation('/management/staff');
    }
    
  },[path])
  return (
    <>
      <div className="flex flex-col h-screen ">
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
