import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// auth pages
import LoginPage from "@/features/auth/pages/LoginPage";
import VerifyOtpPage from "@/features/auth/pages/VerifyOtpPage";

// layout + protected
import AppLayout from "@/shared/layout/AppLayout";
import ProtectedRoute from "@/shared/components/ProtectedRoute";

// pages
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import UsersPage from "@/features/users/pages/UsersPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-otp" element={<VerifyOtpPage />} />

        {/* Protected Layout */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          {/* Default redirect */}
          <Route index element={<Navigate to="/dashboard" replace />} />
          {/* <Route index element={<div>Home Page</div>} /> */}

          {/* Dashboard */}
          <Route path="dashboard" element={<DashboardPage />} />

          {/* Example pages */}
          <Route path="users" element={<UsersPage />} />
          <Route path="reports" element={<div>Reports Page</div>} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />

      </Routes>
    </BrowserRouter>
  );
}