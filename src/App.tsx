import { RouterProvider } from "react-router-dom";
import { routers } from "./modules/router";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const App: React.FC = () => {
  useEffect(() => {
    if (window.location.pathname === "/") {
      window.location.href = "/login";
    }
  }, []);
  return (
    <>
      <ToastContainer />
      <RouterProvider router={routers} />;
    </>
  );
};

export default App;
