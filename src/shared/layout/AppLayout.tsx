import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import AppBreadcrumbs from "../components/AppBreadcrumbs";

export default function AppLayout() {
  return (
    <Box display="flex" height="100vh">
      
      <Sidebar />

      <Box flex={1} display="flex" flexDirection="column">
        <Topbar />

        <Box p={3} flex={1} overflow="auto">
          <AppBreadcrumbs />
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}