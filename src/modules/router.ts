import { createBrowserRouter } from "react-router-dom";
import RouterPage404 from "./page_404/router";
import RouterLoginPage from "./login/router";
import RouterKitchenPage from "./kitchen/router";
import RouterAdmin from "./admin/router";
import RouterCusomerLogin from "./confirm/router";
import RouterCusomer from "./customer/router";
import RouterHistoryOrder from "./customer/order-history/router";

export const routers = createBrowserRouter([
  RouterPage404,
  ...RouterLoginPage,
  RouterKitchenPage,
  RouterAdmin,
  RouterCusomerLogin,
  RouterCusomer,
  RouterHistoryOrder, 
]);
