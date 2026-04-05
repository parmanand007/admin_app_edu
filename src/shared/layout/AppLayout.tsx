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
        // overflow: "hidden", // prevents outer scroll
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
          height: "100%", // FIX
        }}
      >
        {/* Topbar */}
        <Box
          sx={{
            flexShrink: 0,
            bgcolor: "#fff",
            borderBottom: "1px solid #E5E7EB",
          }}
        >
          <Topbar />
        </Box>

        {/* ONLY SCROLL AREA */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            px: 4,
            py: 4,
            backgroundColor: "background.paper",

            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}