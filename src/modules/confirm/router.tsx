import { RouteObject } from "react-router-dom";
import { LoginPage } from "./index";

const RouterCustomerLoginPage: RouteObject = {
  path: "/login/customer",
  element: <LoginPage />,
  children: [
    {
      path: ":tableId",  
      element: <LoginPage />  
    }
  ]
};

export default RouterCustomerLoginPage;
