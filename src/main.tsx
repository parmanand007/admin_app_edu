// main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import QueryProvider from "./app/providers/QueryProvider";
import AppThemeProvider from "./app/providers/ThemeProvider";
import AppRouter from "./app/providers/RouterProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <AppThemeProvider>
        <AppRouter />
      </AppThemeProvider>
    </QueryProvider>
  </React.StrictMode>
);