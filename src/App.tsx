import { RouterProvider } from "react-router-dom";
import { routers } from "./modules/router";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { LoadingComponent } from "./components/loading";
import { useLoading } from "./hooks/loading";
const App: React.FC = () => {
  const context = useLoading();
  useEffect(() => {
    if (window.location.pathname === "/") {
      window.location.href = "/login";
    }
  }, []);
  return (
    <>
      {context.isLoading && <LoadingComponent />}
      <ToastContainer />
      <RouterProvider router={routers} />;
    </>
  );
};

export default App;
