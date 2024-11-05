import { createBrowserRouter } from "react-router-dom";
import RouterPage404 from "./page_404/router";
import RouterHomePage from "./home/router";
import RouterLoginPage from "./login/router";

export const routers = createBrowserRouter([
  RouterPage404,
  RouterHomePage,
  RouterLoginPage,
]);
