// shared/layout/Sidebar.tsx

import { Box, Typography, Select, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { SIDEBAR_CONFIG } from "@/shared/config/sidebar.config";
import { useAuthStore } from "@/features/auth/store/auth.store";
import { useOrgStore } from "@/features/organization/store/org.store";

export default function Sidebar() {
  const type = useAuthStore((s) => s.type);
  const { organizations, selectedOrg, setSelectedOrg } = useOrgStore();

  const items = type ? SIDEBAR_CONFIG[type] : [];

  return (
    <Box
      sx={{
        width: 260,
        bgcolor: "#F8FAFC",
        borderRight: "1px solid #E5E7EB",
        p: 2,
        display: "flex",
        flexDirection: "column",
        flexShrink: 0, 
      }}
    >
      <Typography sx={{ fontSize: 22, fontWeight: 700, color: "#2DAAE1", mb: 3 }}>
        DOCTUS<span style={{ color: "#000" }}>TECH</span>
      </Typography>

      <Select
        size="small"
        value={selectedOrg?.org_id || ""}
        onChange={(e) => {
          const org = organizations.find((o) => o.org_id === e.target.value);
          if (org) setSelectedOrg(org);
        }}
        sx={{ mb: 3, bgcolor: "#fff" }}
      >
        {organizations.map((org) => (
          <MenuItem key={org.org_id} value={org.org_id}>
            {org.name}
          </MenuItem>
        ))}
      </Select>

      <Box display="flex" flexDirection="column" gap={1}>
        {items.map((item) => (
          <NavLink key={item.path} to={item.path} style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <Box
                sx={{
                  px: 2,
                  py: 1.2,
                  borderRadius: 1,
                  backgroundColor: isActive ? "#E0F2FE" : "transparent",
                  color: isActive ? "#0284C7" : "#334155",
                  fontWeight: 500,
                  "&:hover": { backgroundColor: "#E2E8F0" },
                }}
              >
                {item.label}
              </Box>
            )}
          </NavLink>
        ))}
      </Box>

      <Box mt="auto">
        <Typography fontSize={12} color="text.secondary" mb={1}>
          ACCOUNT
        </Typography>

        <NavLink to="/settings" style={{ textDecoration: "none" }}>
          <Box sx={{ px: 2, py: 1.2, borderRadius: 1, "&:hover": { backgroundColor: "#E2E8F0" } }}>
            Settings
          </Box>
        </NavLink>
      </Box>
    </Box>
  );
}