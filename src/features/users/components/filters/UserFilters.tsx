// features/users/components/UserFilters.tsx

import { Box, TextField, MenuItem, Button, Typography } from "@mui/material";

const filters = [
  { label: "Status", value: "Active" },
  { label: "Region", value: "All" },
  { label: "Clinic", value: "All" },
  { label: "Role", value: "All" },
  { label: "User Type", value: "All" },
];

export default function UserFilters() {
  return (
    <Box mb={3}>
      {/* FILTER ROW */}
      <Box
        sx={{
          display: "flex",
          gap: 1.5,
          flexWrap: "wrap",
          mb: 2,
        }}
      >
        {filters.map((f) => (
          <Box key={f.label}>
            {/* LABEL */}
            <Typography
              sx={{
                fontSize: 12,
                color: "#64748B",
                mb: 0.5,
              }}
            >
              {f.label}
            </Typography>

            {/* SELECT */}
            <TextField
              select
              size="small"
              value={f.value}
              sx={{
                minWidth: 140,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  fontSize: 13,
                  height: 36,
                },
              }}
            >
              <MenuItem value={f.value}>{f.value}</MenuItem>
            </TextField>
          </Box>
        ))}
      </Box>

      {/* SEARCH + ACTIONS */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* SEARCH */}
        <TextField
          size="small"
          placeholder="Type to search name and email"
          sx={{
            width: 420,
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              height: 36,
              fontSize: 13,
            },
          }}
        />

        {/* ACTIONS */}
        <Box sx={{ display: "flex", gap: 1.5 }}>
          <Button
            variant="outlined"
            sx={{ minWidth: 120 }}
          >
            Deactivate
          </Button>

          <Button
            variant="contained"
            sx={{ minWidth: 140 }}
          >
            + New User
          </Button>
          <Button
            variant="outlined"
            sx={{ minWidth: 120 }}
          >
            Scheduled Email
          </Button>

          <Button
            variant="outlined"
            sx={{ minWidth: 100 }}
          >
            Export
          </Button>
        </Box>
      </Box>
    </Box>
  );
}