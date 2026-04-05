// shared/router/AppRouter.tsx

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// auth pages
import LoginPage from "@/features/auth/pages/LoginPage";
import VerifyOtpPage from "@/features/auth/pages/VerifyOtpPage";

// layout
import AppLayout from "@/shared/layout/AppLayout";
import ProtectedRoute from "@/shared/components/ProtectedRoute";
import { renderRoutes } from "@/shared/router/RouteRenderer";
import { APP_ROUTES, ROUTES } from "@/shared/config/routes.config";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.VERIFY_OTP} element={<VerifyOtpPage />} />

        {/* Protected */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          {/* Default */}
          <Route index element={<Navigate to={ROUTES.DASHBOARD} replace />} />

          {/* Dynamic */}
          {renderRoutes(APP_ROUTES)}

          {/* Internal fallback */}
          <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
        </Route>

        {/* Global fallback */}
        <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />

      </Routes>
    </BrowserRouter>
  );
}