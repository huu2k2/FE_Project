import { RouteObject } from "react-router-dom";
import { LayoutKitchen } from "./index";
import { ListItemProductPage } from "./main/home/index";
const RouterHome: RouteObject = {
  path: "/kitchen",
  element: <LayoutKitchen />,
  children: [{ path: "order_id/:id", element: <ListItemProductPage /> }],
};

export default RouterHome;
