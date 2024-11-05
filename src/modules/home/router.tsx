import { RouteObject } from "react-router-dom";
import { HomePages } from "./index";

const RouterHomePage: RouteObject = {
  path: "/home",
  element: <HomePages />,
};

export default RouterHomePage;
