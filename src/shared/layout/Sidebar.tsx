// shared/layout/Sidebar.tsx
import { NavLink } from "react-router-dom";
import { SIDEBAR_CONFIG } from "@/shared/config/sidebar.config";
import { useAuthStore } from "@/features/auth/store/auth.store";

export default function Sidebar() {
  const type = useAuthStore((s) => s.type);

  const items = type ? SIDEBAR_CONFIG[type] : [];

  return (
    <div>
      {items.map((item) => (
        <NavLink key={item.path} to={item.path}>
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}