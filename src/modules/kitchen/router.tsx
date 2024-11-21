import { RouteObject } from "react-router-dom";
import { LayoutKitchen } from "./index";
import { ListItemProductPage } from "./main/home/index";
import { AuthGuard } from "../../hooks/auth-guard";
import { ERole } from "../../enum/enum";
const RouterHome: RouteObject = {
  path: "/kitchen",
  element: (
    <AuthGuard allowedRoles={[ERole.CHEFF]}>
      <LayoutKitchen />
    </AuthGuard>
  ),
  children: [
    {
      path: "order_id/:orderId",
      element: <ListItemProductPage />,
    },
  ],
};

export default RouterHome;
