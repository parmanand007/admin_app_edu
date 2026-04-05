// shared/components/RoleBasedRoute.tsx

import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/features/auth/store/auth.store";

interface Props {
  allowedRoles?: string[];
  children: React.ReactNode;
}

export default function RoleBasedRoute({ allowedRoles, children }: Props) {
  const type = useAuthStore((s) => s.type);

  if (!type) return <Navigate to="/login" replace />;

  if (allowedRoles && !allowedRoles.includes(type)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}