// features/reports/components/ReportsGrid.tsx

import { Grid } from "@mui/material";
import ReportCard from "./ReportCard";

export default function ReportsGrid({ reports }: { reports: any[] }) {
  return (
    <Grid container spacing={3} alignItems="stretch" >
      {reports.map((report) => (
        <Grid
      key={report.id}
      size={{ xs: 12, sm: 6, md: 4 }}
      sx={{ display: "flex" }}
    >
          <ReportCard report={report} />
        </Grid>
      ))}
    </Grid>
  );
}