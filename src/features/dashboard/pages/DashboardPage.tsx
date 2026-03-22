import { Box, Typography, Grid, Paper } from "@mui/material";

// types (future API ready)
interface StatCardProps {
  title: string;
  value: number | string;
}

// reusable card component
function StatCard({ title, value }: StatCardProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 2,
        border: "1px solid #eee",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        {title}
      </Typography>

      <Typography variant="h5" fontWeight={600} mt={1}>
        {value}
      </Typography>
    </Paper>
  );
}

export default function DashboardPage() {
  // later replace with API data (React Query)
  const stats = [
    { title: "Total Users", value: 1240 },
    { title: "Active Programs", value: 32 },
    { title: "Completed Modules", value: 845 },
    { title: "Revenue", value: "₹1,25,000" },
  ];

  return (
    <Box>
      {/* Page Title */}
      <Typography variant="h5" fontWeight={600} mb={3}>
        Dashboard
      </Typography>

      {/* Stats Section */}
      <Grid container spacing={3}>
  {stats.map((stat) => (
    <Grid key={stat.title} size={{ xs: 12, sm: 6, md: 3 }}>
      <StatCard {...stat} />
    </Grid>
  ))}
</Grid>

      {/* Future Sections */}
      <Box mt={4}>
        <Paper
          sx={{
            p: 3,
            borderRadius: 2,
            border: "1px solid #eee",
          }}
        >
          <Typography variant="h6" mb={2}>
            Recent Activity
          </Typography>

          <Typography variant="body2" color="text.secondary">
            No recent activity yet.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}