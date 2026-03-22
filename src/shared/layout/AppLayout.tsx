// shared/layout/AppLayout.tsx

import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppLayout({ children }: any) {
  return (
    <Box display="flex">
      <Sidebar />

      <Box flex={1}>
        <Topbar />

        <Box p={3}>{children}</Box>
      </Box>
    </Box>
  );
}