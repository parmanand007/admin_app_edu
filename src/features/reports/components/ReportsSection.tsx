// features/reports/components/ReportsSection.tsx

import { Typography, Box } from "@mui/material";
import ReportsGrid from "./ReportsGrid";

export default function ReportsSection({
  title,
  reports,
}: {
  title: string;
  reports: any[];
}) {
  if (!reports.length) return null;

  return (
    <Box mb={5}>
      <Typography variant="h5" fontWeight={600} mb={2}>
        {title}
      </Typography>

      <ReportsGrid reports={reports} />
    </Box>
  );
}