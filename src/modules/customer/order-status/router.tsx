import { RouteObject } from "react-router-dom";
import { Layout } from "./index";
import OrderStatus from "./main";
const RouterHome: RouteObject = {
  path: "/order",
  element: <Layout />,
  children: [
    {
      path: "status",
      element: <OrderStatus />,
    },
  ],
};

export default RouterHome;
