// features/reports/components/ReportCard.tsx

import { Card, CardContent, Typography, Button, Chip, Box } from "@mui/material";
import doctorImg from "@/assets/report/defaultThumbnail.svg";

interface Props {
  report: any;
}

export default function ReportCard({ report }: Props) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        height: 300,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          boxShadow: 4,
        },
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={report.thumbnail || doctorImg}
        alt={report.name}
        sx={{
          width: "100%",
          height: 120,
          objectFit: "cover",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          backgroundColor: "#f5f7fb",
        }}
      />

      {/* Content */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        {/* TOP CONTENT BLOCK (FIXED HEIGHT) */}
        <Box>
          {/* Title (FIXED HEIGHT) */}
          <Typography
            variant="subtitle1"
            fontWeight={600}
            sx={{
              height: 44, // FIXED height for 2 lines
              lineHeight: "22px",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {report.name}
          </Typography>

          {/* Description (FIXED HEIGHT) */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mt: 1,
              height: 40, // FIXED height
              lineHeight: "20px",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {report.description || ""}
          </Typography>
        </Box>

        {/* BOTTOM SECTION */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Chip label={report.report_type} size="small" />

          <Button
            size="small"
            variant="text"
            onClick={() => {
              window.open(`/reports/${report.mapping_id}`, "_blank");
            }}
          >
            View Report →
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}