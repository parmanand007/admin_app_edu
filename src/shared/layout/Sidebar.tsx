// shared/layout/Sidebar.tsx

import { Box, Typography, List, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", path: "/" },
  { label: "Programs", path: "/programs" },
  { label: "Contests", path: "/contests" },
  { label: "Performance", path: "/performance" },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        width: 240,
        bgcolor: "#0F172A",
        color: "#fff",
        minHeight: "100vh",
        p: 2,
      }}
    >
      {/* Logo */}
      <Typography variant="h6" fontWeight={600} mb={3}>
        Admin Panel
      </Typography>

      {/* Menu */}
      <List>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <ListItemButton
              key={item.label}
              onClick={() => navigate(item.path)}
              sx={{
                borderRadius: 1,
                mb: 1,
                bgcolor: isActive ? "#1E293B" : "transparent",
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
}