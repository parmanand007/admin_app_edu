// shared/layout/Topbar.tsx

import { Box, Typography, Avatar } from "@mui/material";

export default function Topbar() {
  return (
    <Box
      sx={{
        height: 64,
        px: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #E5E7EB",
        bgcolor: "#fff",
      }}
    >
      {/* Title */}
      <Typography variant="h6" fontWeight={600}>
        Dashboard
      </Typography>

      {/* Right Section */}
      <Box display="flex" alignItems="center" gap={2}>
        <Typography variant="body2">John Doe</Typography>
        <Avatar sx={{ width: 32, height: 32 }} />
      </Box>
    </Box>
  );
}