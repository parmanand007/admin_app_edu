import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const routeNameMap: Record<string, string> = {
  dashboard: "Dashboard",
  users: "Users",
  reports: "Reports",
};

export default function AppBreadcrumbs() {
  const location = useLocation();
  const navigate = useNavigate();

  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <Breadcrumbs separator="/" aria-label="breadcrumb">
      <Link
        sx={{ cursor: "pointer", fontSize: 13 }}
        onClick={() => navigate("/dashboard")}
        color="inherit"
      >
        Customer Admin
      </Link>

      {pathnames.map((value, index) => {
        const isLast = index === pathnames.length - 1;

        const label = routeNameMap[value] || value;

        return isLast ? (
          <Typography key={value} fontSize={13} color="text.primary">
            {label}
          </Typography>
        ) : (
          <Link
            key={value}
            sx={{ cursor: "pointer", fontSize: 13 }}
            onClick={() => navigate(`/${value}`)}
            color="inherit"
          >
            {label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}