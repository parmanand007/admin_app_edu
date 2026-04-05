// shared/layout/Sidebar.tsx

import {
  Box,
  Typography,
  Select,
  MenuItem,
  Collapse,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { SIDEBAR_CONFIG } from "@/shared/config/sidebar.config";
import { useAuthStore } from "@/features/auth/store/auth.store";
import { useOrgStore } from "@/features/organization/store/org.store";

export default function Sidebar() {
  const type = useAuthStore((s) => s.type);
  const { organizations, selectedOrg, setSelectedOrg } = useOrgStore();

  const items = type ? SIDEBAR_CONFIG[type] : [];
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <Box
      sx={{
        width: 260,
        bgcolor: "#F8FAFC",
        borderRight: "1px solid #E5E7EB",
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Logo */}
      <Typography sx={{ fontSize: 22, fontWeight: 700, color: "#2DAAE1", mb: 3 }}>
        DOCTUS<span style={{ color: "#000" }}>TECH</span>
      </Typography>

      {/* Org Selector */}
      <Select
        size="small"
        value={selectedOrg?.org_id || ""}
        onChange={(e) => {
          const org = organizations.find((o) => o.org_id === e.target.value);
          if (org) setSelectedOrg(org);
        }}
        sx={{ mb: 3, bgcolor: "#fff", borderRadius: 2 }}
      >
        {organizations.map((org) => (
          <MenuItem key={org.org_id} value={org.org_id}>
            {org.name}
          </MenuItem>
        ))}
      </Select>

      {/* Menu */}
      <Box display="flex" flexDirection="column" gap={0.5}>
        {items.map((item) => {
          const Icon = item.icon;

          // Parent with children
          if (item.children) {
            const isOpen = openMenus[item.label];

            return (
              <Box key={item.label}>
                <Box
                  onClick={() => toggleMenu(item.label)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 2,
                    py: 1.2,
                    borderRadius: 2,
                    cursor: "pointer",
                    "&:hover": { backgroundColor: "#E2E8F0" },
                  }}
                >
                  <Box display="flex" alignItems="center" gap={1.5}>
                    {Icon && <Icon fontSize="small" />}
                    <Typography fontSize={14} fontWeight={500}>
                      {item.label}
                    </Typography>
                  </Box>
                  <ExpandMoreIcon
                    sx={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "0.2s",
                    }}
                  />
                </Box>

                <Collapse in={isOpen}>
                  <Box pl={4} mt={0.5} display="flex" flexDirection="column" gap={0.5}>
                    {item.children.map((child) => (
                      <NavLink key={child.path} to={child.path} style={{ textDecoration: "none" }}>
                        {({ isActive }) => (
                          <Box
                            sx={{
                              px: 2,
                              py: 1,
                              borderRadius: 2,
                              fontSize: 13,
                              backgroundColor: isActive ? "#E0F2FE" : "transparent",
                              color: isActive ? "#0284C7" : "#475569",
                              "&:hover": { backgroundColor: "#E2E8F0" },
                            }}
                          >
                            {child.label}
                          </Box>
                        )}
                      </NavLink>
                    ))}
                  </Box>
                </Collapse>
              </Box>
            );
          }

          // Single item
          return (
            <NavLink key={item.path} to={item.path} style={{ textDecoration: "none" }}>
              {({ isActive }) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    px: 2,
                    py: 1.2,
                    borderRadius: 2,
                    backgroundColor: isActive ? "#E0F2FE" : "transparent",
                    color: isActive ? "#0284C7" : "#334155",
                    fontWeight: 500,
                    "&:hover": { backgroundColor: "#E2E8F0" },
                  }}
                >
                  {item.icon && <item.icon fontSize="small" />}
                  {item.label}
                </Box>
              )}
            </NavLink>
          );
        })}
      </Box>

    </Box>
  );
}