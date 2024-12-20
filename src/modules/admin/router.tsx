import { RouteObject } from "react-router-dom";
import { LayoutAdmin } from ".";
import { StaffCompoment } from "./main/staff";
import { ProductCompoment } from "./main/product";
import { CategoryCompoment } from "./main/category";
import { AreaCompoment } from "./main/area";
import { TableCompoment } from "./main/table";
import { TurnoverCompoment } from "./main/turnover";
const RouterHome: RouteObject = {
  path: "/management",
  element: <LayoutAdmin />,
  children: [
    {
      path: "staff",
      element: <StaffCompoment />,
    },
    {
      path: "product",
      element: <ProductCompoment />,
    },
    {
      path: "category",
      element: <CategoryCompoment />,
    },
    {
      path: "area",
      element: <AreaCompoment />,
    },
    {
      path: "table",
      element: <TableCompoment />,
    },
    {
      path: "turnover",
      element: <TurnoverCompoment />,
    },
  ],
};

export default RouterHome;
