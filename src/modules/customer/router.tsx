import { RouteObject } from "react-router-dom";
import { LayoutCustomer } from ".";
import { HomeComponent } from "./main/home/index";
import { NotificaationComponent } from "./main/notification/index";
import { Order } from "./main/order";
import { ProfilePage } from "./main/profile/index";
const RouterHome: RouteObject = {
  path: "/",
  element: <LayoutCustomer />,
  children: [
    {
      path: "home",
      element: <HomeComponent />,
    },
    {
      path: "notification",
      element: <NotificaationComponent />,
    },
    {
      path: "cart",
      element: <Order />,
    },
    {
      path: "person",
      element: <ProfilePage />,
    },
  ],
};

export default RouterHome;
