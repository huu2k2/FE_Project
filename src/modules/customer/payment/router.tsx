import { RouteObject } from "react-router-dom";
import { Layout } from "./index";
import { Payment } from "./main/index";
const RouterPayment: RouteObject = {
  path: "payment",
  element: <Layout />,
  children: [
    {
      path: "order",
      element: <Payment />,
    },
  ],
};

export default RouterPayment;
