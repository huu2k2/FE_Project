import { RouteObject } from "react-router-dom";
import { Layout } from "./index";
import { ListComponent } from "./main/list/index";
import { DetailComponent } from "./main/detail/index";
const RouterHome: RouteObject = {
  path: "/order",
  element: <Layout />,
  children: [
    {
      path: "history",
      element: <ListComponent />,
    },
    {
      path: "history/:orderId",
      element: <DetailComponent />,
    },
  ],
};

export default RouterHome;
