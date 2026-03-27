import { Box, Grid, Typography } from "@mui/material";
import { useDashboardData } from "../api/dashboard.hooks";
import Bar from "../components/Bar";
import StatCard from "../components/StatCard";

export default function DashboardPage() {
  const { profile, stats, engagement } = useDashboardData();

  if (profile.isLoading || stats.isLoading || engagement.isLoading) {
    return <div>Loading...</div>;
  }

  if (profile.isError || stats.isError || engagement.isError) {
    return <div>Something went wrong</div>;
  }

  const statsData = stats.data;
  const engagementData = engagement.data;

  if (!statsData || !engagementData) return null;

  const maxValue = Math.max(
    engagementData.logged_in,
    engagementData.programs_started,
    engagementData.programs_completed,
    1
  );

  return (
    <Box>
      {/* HEADER (ORG + STATS INLINE) */}
      <Box
        sx={{
          p: 3,
          borderRadius: 2,
          backgroundColor: "#E6F0F5",
          mb: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LEFT: ICON + TEXT */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* ICON */}
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: 2,
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #E2E8F0",
            }}
          >
            {/* simple placeholder icon */}
            <Typography fontWeight={600}>DT</Typography>
          </Box>

          {/* TEXT */}
          <Box>
            <Typography fontSize={18} fontWeight={600}>
              {statsData.organization}
            </Typography>

            <Typography fontSize={13} color="#64748B">
              Welcome to DT-Customer Admin
            </Typography>
          </Box>
        </Box>

        {/* RIGHT: STATS */}
        <Grid
          container
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 120px)",
            gap: 2,
          }}
        >
          <StatCard title="Total Users" value={statsData.total_users} compact />
          <StatCard
            title="Clinical Users"
            value={statsData.active_users}
            compact
          />
          <StatCard
            title="Non-Clinical User"
            value={statsData.pending_users}
            compact
          />
          <StatCard
            title="Total Licenses"
            value={statsData.active_licenses}
            compact
          />
        </Grid>
      </Box>

      {/* ENGAGEMENT */}
      <Box
        sx={{
          p: 3,
          borderRadius: 2,
          border: "1px solid #E5E7EB",
          backgroundColor: "#fff",
          mb: 3,
        }}
      >
        <Typography fontWeight={600} mb={3}>
          User Engagement Report
        </Typography>

        <Grid
          container
          sx={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: 4,
            alignItems: "center",
          }}
        >
          {/* LEFT: BAR CHART */}
          <Box sx={{ display: "flex", gap: 6, alignItems: "flex-end" }}>
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

          {/* RIGHT: LEGEND */}
          <Box>
            <Typography fontSize={12} color="#94A3B8" mb={2}>
              LEARNING PHASE: USERS WHO
            </Typography>

            <LegendItem
              label="Logged In"
              value={engagementData.logged_in}
              max={maxValue}
              color="#38BDF8"
            />

            <LegendItem
              label="Started Program"
              value={engagementData.programs_started}
              max={maxValue}
              color="#0EA5E9"
            />

            <LegendItem
              label="Completed Program"
              value={engagementData.programs_completed}
              max={maxValue}
              color="#6366F1"
            />
          </Box>
        </Grid>
      </Box>

      {/* EMPTY STATE */}
      <Box
        sx={{
          p: 6,
          borderRadius: 2,
          border: "1px solid #E5E7EB",
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <Typography color="#94A3B8" fontSize={14}>
          No data available
        </Typography>
      </Box>
    </Box>
  );
}

/* -------------------------------- */
/* LEGEND COMPONENT */
/* -------------------------------- */

function LegendItem({
  label,
  value,
  max,
  color,
}: {
  label: string;
  value: number;
  max: number;
  color: string;
}) {
  const percent = Math.round((value / max) * 100);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: 1.5,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: color,
          }}
        />
        <Typography fontSize={14}>{label}</Typography>
      </Box>

      <Typography fontSize={13} color="#64748B">
        {percent}%
      </Typography>
    </Box>
  );
}