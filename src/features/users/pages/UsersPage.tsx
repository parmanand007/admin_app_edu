// features/users/pages/UsersPage.tsx

import { Box, Typography } from "@mui/material";
import UserStats from "../components/stats/UserStats";
import UserFilters from "../components/filters/UserFilters";
import UserTable from "../components/table/UserTable";

export default function UsersPage() {
  return (
    <Box>
      {/* PAGE TITLE */}
      <Box mb={2}>
        <Typography fontSize={22} fontWeight={600}>
          Users
        </Typography>

        <Typography fontSize={14} color="#64748B">
          Quality team internal
        </Typography>
      </Box>

      {/* STATS */}
      <UserStats />

      {/* FILTERS */}
      <UserFilters />

      {/* TABLE */}
      <UserTable />
    </Box>
  );
}