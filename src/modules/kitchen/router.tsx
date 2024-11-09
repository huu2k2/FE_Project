import { RouteObject } from "react-router-dom";
import { LayoutKitchen } from "./index";
import { ListItemProductPage } from "./main/home/index";
import { AuthGuard } from "../../hooks/AuthGuard";
const RouterHome: RouteObject = {
  path: "/kitchen",
  element: <LayoutKitchen />,
  children: [
    {
      path: "order_id/:id",
      element: (
        // <AuthGuard allowedRoles={["kitchen"]}>
          <ListItemProductPage />
        // </AuthGuard>
      ),
    },
  ],
};

export default RouterHome;
