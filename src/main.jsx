import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./assets/styles/globalStyles.css";
import "./assets/styles/root.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
