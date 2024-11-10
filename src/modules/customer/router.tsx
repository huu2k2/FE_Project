import { RouteObject } from "react-router-dom";
import { LayoutCustomer } from ".";
import { HomeComponent } from "./main/home/index";
const RouterHome: RouteObject = {
  path: "/",
  element: <LayoutCustomer />,
  children: [
    {
      path: "home",
      element: <HomeComponent />,
    },
  ],
};

export default RouterHome;
