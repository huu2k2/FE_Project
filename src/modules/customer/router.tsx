import { RouteObject } from "react-router-dom";
import { LayoutCustomer } from ".";
import { HomeComponent } from "./main/home/index";
import { NotificaationComponent } from "./main/notification/index";
import { Cart } from "./main/cart";
import { ProfilePage } from "./main/profile/index";
import { CartProvider } from "../../hooks/addTotalContext";
const RouterHome: RouteObject = {
  path: "/",
  element: (
    <CartProvider>
      <LayoutCustomer />
    </CartProvider>
  ),
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
      element: <Cart />,
    },
    {
      path: "person",
      element: <ProfilePage />,
    },
  ],
};

export default RouterHome;
