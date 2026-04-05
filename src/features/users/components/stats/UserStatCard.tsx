import { Box, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

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
        px: 2,
        py: 1.5,
        borderRadius: "12px",
        border: "1px solid #E5E7EB",
        backgroundColor: `${color}10`, // VERY LIGHT tint (important)
        height: 80,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* TOP ROW */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* COLORED DOT (acts like icon placeholder) */}
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: color,
            }}
          />

          <Typography
            sx={{
              fontSize: 12,
              color: "#334155",
              fontWeight: 500,
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* INFO ICON */}
        <InfoOutlinedIcon
          sx={{
            fontSize: 16,
            color: "#94A3B8",
          }}
        />
      </Box>

      {/* VALUE */}
      <Typography
        sx={{
          fontSize: 18,
          fontWeight: 600,
          color: "#0F172A",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}