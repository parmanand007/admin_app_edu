// shared/router/RouteRenderer.tsx

import { Route } from "react-router-dom";
import { Suspense } from "react";
import { CircularProgress, Box } from "@mui/material";
import RoleBasedRoute from "@/shared/components/RoleBasedRoute";
import { AppRoute } from "@/shared/config/routes.config";

const Loader = () => (
  <Box display="flex" justifyContent="center" mt={10}>
    <CircularProgress />
  </Box>
);

export const renderRoutes = (routes: AppRoute[]) =>
  routes.map((route) => {
    const Element = route.element;

    if (route.children) {
      return (
        <Route key={route.path} path={route.path}>
          {renderRoutes(route.children)}
        </Route>
      );
    }

    return (
      <Route
        key={route.path}
        path={route.path.replace("/", "")}
        element={
          <RoleBasedRoute allowedRoles={route.roles}>
            <Suspense fallback={<Loader />}>
              <Element />
            </Suspense>
          </RoleBasedRoute>
        }
      />
    );
  });