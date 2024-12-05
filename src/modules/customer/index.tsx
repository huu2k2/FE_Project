import { Outlet } from "react-router-dom";
import { NavBar } from "./navbar";
import { Drawer } from "./drawer";
import { useEffect } from "react";
import { useLoading } from "../../hooks/loading";
import {
  getCustomerSocket,
  initializeCustomerSocket,
} from "../../hooks/useCustomerSocket";
import { handleReceiveMess, handleSendMess } from "../../hooks/fc.socket";
import { toast } from "react-toastify";

export const LayoutCustomer: React.FC = () => {
  const { isLoading, setIsLoading } = useLoading();
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const customerSocket = initializeCustomerSocket();
      const orderId = localStorage.getItem("orderId");
      handleSendMess(customerSocket!, "agianConnect", orderId);
      return () => {
        customerSocket.disconnect();
      };
    }, 1000);
  }, []);

  const customerSocket = getCustomerSocket();
  useEffect(() => {
    if (!customerSocket) return;
    handleReceiveMess(customerSocket!, "receiveNotification", (val) => {
      toast.info(val.title);
    });
    handleReceiveMess(customerSocket!, "confirmPaymentSuccess", (val) => {
      toast.info(val.title);
    });
  }, [customerSocket]);

  return (
    <>
      {!isLoading && (
        <div className="drawer w-full h-full overflow-auto no-scrollbar">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content bg-[#fff]">
            <div className="h-full">
              <main className="flex-1 ">
                <Outlet />
              </main>
              <NavBar />
            </div>
          </div>
          <Drawer />
        </div>
      )}
    </>
  );
};
