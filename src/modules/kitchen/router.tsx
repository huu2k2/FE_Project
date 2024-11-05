import { RouteObject } from "react-router-dom";
import { LayoutKitchen } from "./index";
import { HomePage } from "./main/home/index";
const RouterHome: RouteObject = {
  path: "/kitchen",
  element: <LayoutKitchen />,
  children: [{ path: "home", element: <HomePage /> }],
};

export default RouterHome;
