// features/dashboard/components/StatCard.tsx

import { Box, Typography } from "@mui/material";

interface StatCardProps {
  title: string;
  value: number;
}

export default function StatCard({ title, value }: StatCardProps) {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        border: "1px solid #E5E7EB",
        backgroundColor: "#fff",
      }}
    >
      <Typography fontSize={12} color="text.secondary">
        {title}
      </Typography>

      <Typography fontSize={20} fontWeight={600}>
        {value}
      </Typography>
    </Box>
  );
}