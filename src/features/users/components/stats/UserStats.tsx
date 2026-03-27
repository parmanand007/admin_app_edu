// features/users/components/UserStats.tsx

import { Grid } from "@mui/material";
import UserStatCard from "./UserStatCard";

export default function UserStats() {
  const stats = [
    { title: "Total Users", value: 61, color: "#F59E0B" },
    { title: "Total Active Users", value: 59, color: "#10B981" },
    { title: "Total Consumed Licenses", value: 120, color: "#3B82F6" },
    { title: "Total Remaining Licenses", value: 10, color: "#06B6D4" },
    { title: "Remaining Clinical Licenses", value: -14, color: "#EF4444" },
    { title: "Remaining Non-Clinical Licenses", value: 24, color: "#22C55E" },
  ];

  return (
    <Grid
      container
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: 2,
        mb: 3,
      }}
    >
      {stats.map((item) => (
        <UserStatCard key={item.title} {...item} />
      ))}
    </Grid>
  );
}