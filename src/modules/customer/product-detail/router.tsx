import { RouteObject } from "react-router-dom";
import { Layout } from "./index";
import ProductDetail from "./main";
const RouterHome: RouteObject = {
  path: "/product",
  element: <Layout />,
  children: [
    {
      path: ":id",
      element: <ProductDetail />,
    },
  ],
};

export default RouterHome;
