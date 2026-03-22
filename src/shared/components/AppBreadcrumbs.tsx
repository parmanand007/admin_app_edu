import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const routeMap: Record<string, string> = {
  dashboard: "Dashboard",
  users: "Users",
};

export default function AppBreadcrumbs() {
  const location = useLocation();
  const navigate = useNavigate();

  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <Breadcrumbs sx={{ mb: 2 }}>
      <Link onClick={() => navigate("/dashboard")} sx={{ cursor: "pointer" }}>
        Customer Admin
      </Link>

      {paths.map((segment, index) => {
        const to = "/" + paths.slice(0, index + 1).join("/");
        const isLast = index === paths.length - 1;

        const label = routeMap[segment] || segment;

        return isLast ? (
          <Typography key={to}>{label}</Typography>
        ) : (
          <Link key={to} onClick={() => navigate(to)} sx={{ cursor: "pointer" }}>
            {label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}