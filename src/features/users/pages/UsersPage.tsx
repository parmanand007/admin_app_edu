// features/users/pages/UsersPage.tsx

import { Box, Typography, Stack, Button } from "@mui/material";
import UserStats from "../components/stats/UserStats";
import UserFilters from "../components/filters/UserFilters";
import UserTable from "../components/table/UserTable";
import { useOrgStore } from "@/features/organization/store/org.store";


export default function UsersPage() {
  const selectedOrg = useOrgStore((state) => state.selectedOrg);
  return (
    <Box
      sx={{
        px: 3,
        py: 2,
        maxWidth: "100%",
      }}
    >
      {/* HEADER */}
      <Box mb={3}>
        <Typography fontSize={22} fontWeight={600}>
          Users
        </Typography>

        <Typography fontSize={14} color="text.secondary">
          {selectedOrg?.name || "—"}
        </Typography>
      </Box>

      {/* STATS */}
      <UserStats />

      {/* FILTER + ACTION BAR */}
      <Box
        sx={{
          mb: 2,
          mt: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {/* LEFT - FILTERS */}
        <Box sx={{ flex: 1, minWidth: 600 }}>
          <UserFilters />
        </Box>
      </Box>

      {/* TABLE */}
      <UserTable />
    </Box>
  );
}