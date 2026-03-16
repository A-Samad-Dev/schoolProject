import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SchoolProvider from "./assets/Components/SchoolProvider.jsx";
import { BrowserRouter } from "react-router";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SchoolProvider>
        <App />
      </SchoolProvider>
    </BrowserRouter>
  </StrictMode>,
);
