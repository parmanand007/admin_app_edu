// shared/layout/Topbar.tsx

import { Box, Typography, Avatar } from "@mui/material";
import { useAuthStore } from "@/features/auth/store/auth.store";

export default function Topbar() {
  const user = useAuthStore((s) => s.user);

  return (
    <Box
      sx={{
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 3,
        bgcolor: "#fff",
      }}
    >
      {/* Left Section (Title / Context) */}
      <Box>
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 600,
            color: "#0F172A",
          }}
        >
          Customer Admin
        </Typography>

        <Typography
          sx={{
            fontSize: 13,
            color: "#64748B",
          }}
        >
          Welcome to DoctusTech Admin
        </Typography>
      </Box>

      {/* Right Section (User Info) */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* User Name */}
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
            color: "#334155",
          }}
        >
          {user?.first_name || "User"}
        </Typography>

        {/* Avatar */}
        <Avatar
          sx={{
            width: 36,
            height: 36,
            bgcolor: "#0284C7",
            fontSize: 14,
          }}
        >
          {user?.first_name?.[0]?.toUpperCase() || "U"}
        </Avatar>
      </Box>
    </Box>
  );
}