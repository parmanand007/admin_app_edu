
import { Box, Typography } from "@mui/material";

export default function StatCard({
  title,
  value,
  compact = false,
}: {
  title: string;
  value: number;
  compact?: boolean;
}) {
  return (
    <Box
      sx={{
        p: compact ? 1.5 : 2,
        borderRadius: 2,
        border: "1px solid #E5E7EB",
        backgroundColor: "#fff",
        textAlign: compact ? "center" : "left",
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