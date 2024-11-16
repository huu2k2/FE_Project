import { RouteObject } from "react-router-dom";
import { LoginPage } from "./index";

const RouterLoginPage: RouteObject[] = [
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];

export default RouterLoginPage;
