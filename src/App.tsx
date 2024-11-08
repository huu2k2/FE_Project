import { RouterProvider } from "react-router-dom";
import { routers } from "./modules/router";
import { useEffect } from "react";

const App: React.FC = () => {
  useEffect(() => {
    if (window.location.pathname === "/") {
      window.location.href = "/login";
    }
  }, []);
  return <RouterProvider router={routers} />;
};

export default App;
