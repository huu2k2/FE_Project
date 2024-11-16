import { Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#fff] gap-4 p-4">
        <Outlet />
      </div>
    </>
  );
};
