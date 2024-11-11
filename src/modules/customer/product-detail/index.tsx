import { Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
  return (
    <>
      <div className="h-full bg-[#fff]">
        <Outlet />
      </div>
    </>
  );
};
