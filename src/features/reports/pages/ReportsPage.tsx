// features/reports/pages/ReportsPage.tsx

import { Box, Typography, CircularProgress } from "@mui/material";
import { useReports } from "../api/reports.hooks";
import ReportsSection from "../components/ReportsSection";

export default function ReportsPage() {
  const { data, isLoading } = useReports();

  if (isLoading) return <CircularProgress />;

  const reports = data?.results || [];

  // filter enabled + sort
  const filtered = reports
    .filter((r) => r.is_enabled)
    .sort((a, b) => a.order - b.order);

  const eduReports = filtered.filter((r) => r.report_type === "EDU");
  const pdapReports = filtered.filter((r) => r.report_type === "PDAP");

  return (
    <Box p={3}>
      <Typography variant="h4" fontWeight={600} mb={3}>
        Available Reports
      </Typography>

      <ReportsSection title="Education Reports" reports={eduReports} />
      <ReportsSection title="PDAP Reports" reports={pdapReports} />
    </Box>
  );
}