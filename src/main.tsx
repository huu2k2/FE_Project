import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { LoadingProvider } from "./hooks/loading.tsx";

createRoot(document.getElementById("root")!).render(
  <LoadingProvider>
    <App />
  </LoadingProvider>
);
