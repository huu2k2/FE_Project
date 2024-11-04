import { RouterProvider } from "react-router-dom";
import { routers } from "./modules/router";

const App: React.FC = () => {
  return (
    <RouterProvider router={routers} />
  );
};

export default App;
