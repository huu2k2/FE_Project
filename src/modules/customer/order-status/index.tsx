import { Outlet } from "react-router-dom";
import { useLoading } from "../../../hooks/loading";
import { useEffect } from "react";
import { initializeCustomerSocket } from "../../../hooks/useCustomerSocket";

export const Layout: React.FC = () => {
  const { isLoading, setIsLoading } = useLoading();
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const socket = initializeCustomerSocket();
      return () => {
        socket.disconnect();
      };
    }, 1000);
  }, []);

  return (
    <>
      {!isLoading && (
        <div className="flex-col h-screen bg-[#fff] gap-4 p-4">
          <Outlet />
        </div>
      )}
    </>
  );
};
