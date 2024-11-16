import { Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
  return (
    <>
      <div className="flex-col h-screen bg-[#fff] gap-4 p-4">
        <Outlet />
      </div>
    </>
  );
};
