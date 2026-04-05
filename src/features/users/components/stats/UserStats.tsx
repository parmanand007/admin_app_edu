// features/users/components/UserStats.tsx

import { Box, Grid, Typography } from "@mui/material";
import UserStatCard from "./UserStatCard";
import { useOrganizationStats } from "@/features/organization/api/org.hooks";

export default function UserStats() {
  const { data, isLoading, isError } = useOrganizationStats();

  // Loading state
  if (isLoading) {
    return <Typography fontSize={14}>Loading stats...</Typography>;
  }

  // Error state
  if (isError || !data) {
    return (
      <Typography fontSize={14} color="error">
        Failed to load stats
      </Typography>
    );
  }

  // Map API → UI
  const stats = [
    {
      title: "Total Users",
      value: data.total_users,
      color: "#F59E0B",
    },
    {
      title: "Total Active Users",
      value: data.active_users,
      color: "#10B981",
    },
    {
      title: "Total Consumed Licenses",
      value: data.active_licenses,
      color: "#3B82F6",
    },
    {
      title: "Total Remaining Licenses",
      value: data.remaining_licenses,
      color: "#06B6D4",
    },
    {
      title: "Remaining Clinical Licenses",
      value: data.remaining_cl_licenses,
      color: "#EF4444",
    },
    {
      title: "Remaining Non-Clinical Licenses",
      value: data.remaining_nc_licenses,
      color: "#22C55E",
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
        gap: 2,
        mb: 2,
      }}
    >
      {stats.map((item) => (
        <UserStatCard key={item.title} {...item} />
      ))}
    </Box>
  );
}