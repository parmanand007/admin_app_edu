// features/dashboard/components/Bar.tsx

import { Box, Typography } from "@mui/material";

interface BarProps {
  value: number;
  label: string;
  max?: number;
}

export default function Bar({ value, label, max = 100 }: BarProps) {
  const height = Math.max((value / max) * 150, 10);

  return (
    <Box textAlign="center">
      <Box
        sx={{
          width: 40,
          height,
          backgroundColor: "#4F46E5",
          borderRadius: 1,
          mb: 1,
        }}
      />
      <Typography fontSize={12}>{label}</Typography>
      <Typography fontSize={12} color="text.secondary">
        {value}
      </Typography>
    </Box>
  );
}