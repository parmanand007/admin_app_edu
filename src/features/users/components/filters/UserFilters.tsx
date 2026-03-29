// features/users/components/UserFilters.tsx

import { Box, MenuItem, Select, TextField, Button } from "@mui/material";

export default function UserFilters() {
  return (
    <Box mb={3}>
      {/* FILTER DROPDOWNS */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 2,
          mb: 2,
        }}
      >
        <Select size="small" defaultValue="Active">
          <MenuItem value="Active">Active</MenuItem>
        </Select>

        <Select size="small" defaultValue="All">
          <MenuItem value="All">All</MenuItem>
        </Select>

        <Select size="small" defaultValue="All">
          <MenuItem value="All">All</MenuItem>
        </Select>

        <Select size="small" defaultValue="All">
          <MenuItem value="All">All</MenuItem>
        </Select>

        <Select size="small" defaultValue="All">
          <MenuItem value="All">All</MenuItem>
        </Select>

        <Select size="small" defaultValue="All">
          <MenuItem value="All">All</MenuItem>
        </Select>
      </Box>

      {/* SEARCH + ACTIONS */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <TextField
          size="small"
          fullWidth
          placeholder="Type to search name and email"
        />

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="outlined">Deactivate</Button>
          <Button variant="contained">+ New User</Button>
          <Button variant="outlined">Export</Button>
        </Box>
      </Box>
    </Box>
  );
}