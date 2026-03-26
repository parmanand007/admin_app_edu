// features/dashboard/pages/DashboardPage.tsx

import { Box, Grid, Typography } from "@mui/material";
import { useDashboardData } from "../api/dashboard.hooks";
import StatCard from "../components/StatCard";
import Bar from "../components/Bar";

export default function DashboardPage() {
  const { profile, stats, engagement } = useDashboardData();

  if (profile.isLoading || stats.isLoading || engagement.isLoading) {
    return <div>Loading...</div>;
  }

  if (profile.isError || stats.isError || engagement.isError) {
    return <div>Something went wrong</div>;
  }

  const profileData = profile.data;
  const statsData = stats.data;
  const engagementData = engagement.data;

  if (!profileData || !statsData || !engagementData) {
    return null;
  }

  const maxValue = Math.max(
    engagementData.logged_in,
    engagementData.programs_started,
    engagementData.programs_completed
  );

  return (
    <Box>
      {/* HEADER */}
      <Box
        sx={{
          p: 3,
          borderRadius: 2,
          backgroundColor: "#E6F0F5",
          mb: 3,
        }}
      >
        <Typography fontSize={20} fontWeight={600}>
          {statsData.organization}
        </Typography>

        <Typography color="text.secondary">
          Welcome to DT-Customer Admin
        </Typography>
      </Box>

      {/* STATS */}
      <Grid container spacing={2} mb={3}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard title="Total Users" value={statsData.total_users} />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard title="Clinical Users" value={statsData.active_users} />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard title="Pending Users" value={statsData.pending_users} />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Total Licenses"
            value={statsData.active_licenses}
          />
        </Grid>
      </Grid>

      {/* ENGAGEMENT */}
      <Box
        sx={{
          p: 3,
          borderRadius: 2,
          border: "1px solid #E5E7EB",
        }}
      >
        <Typography fontWeight={600} mb={3}>
          User Engagement Report
        </Typography>

        <Box display="flex" gap={6}>
          <Bar
            value={engagementData.logged_in}
            label="Logged In"
            max={maxValue}
          />
          <Bar
            value={engagementData.programs_started}
            label="Started Program"
            max={maxValue}
          />
          <Bar
            value={engagementData.programs_completed}
            label="Completed Program"
            max={maxValue}
          />
        </Box>
      </Box>
    </Box>
  );
}