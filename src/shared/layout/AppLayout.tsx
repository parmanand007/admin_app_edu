// shared/layout/AppLayout.tsx
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import AppBreadcrumbs from "../components/AppBreadcrumbs";

import { useInitializeOrganizations } from "@/features/organization/api/org.hooks";

export default function AppLayout() {
  // Initialize organizations once after login
  useInitializeOrganizations();

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "hidden", // prevents body scroll
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Layout */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0, // prevents overflow issues
        }}
      >
        {/* Topbar (fixed behavior) */}
        <Box
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 1100,
            backgroundColor: "background.paper",
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Topbar />
        </Box>

        {/* Content Area */}
        <Box
          sx={{
            flex: 1,
            overflow: "auto",
            backgroundColor: "grey.50",
          }}
        >
          <Box
            sx={{
              p: 3,
              maxWidth: "1400px", // keeps content centered & consistent
              mx: "auto",
              width: "100%",
            }}
          >
            {/* Breadcrumbs */}
            <AppBreadcrumbs />

            {/* Page Content */}
            <Box mt={2}>
              <Outlet />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}