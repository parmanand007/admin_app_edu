import { Box, Typography, Avatar } from "@mui/material";
import { useAuthStore } from "@/features/auth/store/auth.store";
import AppBreadcrumbs from "@/shared/components/AppBreadcrumbs";

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
      {/* LEFT: Breadcrumbs */}
      <AppBreadcrumbs />

      {/* RIGHT: User Info */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
            color: "#334155",
          }}
        >
          {user?.first_name || "User"}
        </Typography>

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