import { RouteObject } from "react-router-dom";
import { LayoutAdmin } from ".";
import { StaffManagement } from "./main/staff";
import { ProductManagement } from "./main/product";
const RouterHome: RouteObject = {
  path: "/management",
  element: <LayoutAdmin />,
  children: [
    {
      path: "staff",
      element: <StaffManagement />,
    },
    {
      path: "product",
      element: <ProductManagement />,
    },
  ],
};

export default RouterHome;
