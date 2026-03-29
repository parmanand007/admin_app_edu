// features/users/components/UserStatCard.tsx

import { Box, Typography } from "@mui/material";

export default function UserStatCard({
  title,
  value,
  color,
}: {
  title: string;
  value: number;
  color: string;
}) {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        border: `1px solid ${color}`,
        backgroundColor: "#fff",
      }}
    >
      <Typography fontSize={18} fontWeight={600}>
        {value}
      </Typography>

      <Typography fontSize={12} color="#64748B">
        {title}
      </Typography>
    </Box>
  );
}