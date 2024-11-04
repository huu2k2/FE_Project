import { createBrowserRouter } from "react-router-dom";
import RouterPage404 from "./page_404/router";
import RouterHomePage from "./home/router";
export const routers = createBrowserRouter([RouterPage404, RouterHomePage]);
