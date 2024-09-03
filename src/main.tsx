import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./global.css";
import { AuthProvider } from "./context/auth-context.tsx";
import { QueryProvider } from "./lib/react-query/query-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <QueryProvider>
          <App />
        </QueryProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
