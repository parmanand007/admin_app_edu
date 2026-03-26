// shared/layout/AppLayout.tsx

import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

import { useInitializeOrganizations } from "@/features/organization/api/org.hooks";

export default function AppLayout() {
  useInitializeOrganizations();

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        {/* Topbar (now includes breadcrumbs) */}
        <Box
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 1100,
            bgcolor: "#fff",
            borderBottom: "1px solid #E5E7EB",
          }}
        >
          <Topbar />
        </Box>

        {/* Content */}
        <Box
          sx={{
            flex: 1,
            overflow: "auto",
            bgcolor: "#F8FAFC",
          }}
        >
          <Box
            sx={{
              p: 3,
              maxWidth: 1400,
              mx: "auto",
              width: "100%",
            }}
          >
            {/* Page Content ONLY */}
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}