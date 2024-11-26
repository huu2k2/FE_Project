import { RouterProvider } from "react-router-dom";
import { routers } from "./modules/router";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { LoadingComponent } from "./components/loading";
import { useLoading } from "./hooks/loading";
import { initializeCheffSocket } from "./hooks/useCheffSocket";
import useCustomerSocket from "./hooks/useCustomerSocket";
import { handleReceiveMess } from "./hooks/fc.socket";
const App: React.FC = () => {
  const context = useLoading();
  useEffect(() => {
    if (window.location.pathname === "/") {
      window.location.href = "/login";
    }
    initializeCheffSocket();
  }, []);

  const customerSocket = useCustomerSocket();

  useEffect(() => {
    if (!customerSocket) return;
    console.log("Home1");
    handleReceiveMess(customerSocket!, "receiveNotification", (val) => {
      toast.info(val);
    });
  }, [customerSocket]);

  return (
    <>
      {context.isLoading && <LoadingComponent />}
      <ToastContainer />
      <RouterProvider router={routers} />;
    </>
  );
};

export default App;
