// features/user-groups/pages/UserGroupsPage.tsx

import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import GroupTable from "../components/table/GroupTable";
import { useUserGroups } from "../api/userGroup.hooks";

export default function UserGroupsPage() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { data, isLoading, isFetching } = useUserGroups({
    page,
    page_size: pageSize,
  });

  const groups = data?.results || [];
  const total = data?.count || 0;

  return (
    <Box>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6">
          Total User Groups ({total})
        </Typography>

        <Button variant="contained">
          Create User Group
        </Button>
      </Box>

      {/* Table */}
      {isLoading ? (
        <CircularProgress />
      ) : (
        <GroupTable
          groups={groups}
          total={total}
          page={page}
          pageSize={pageSize}
          onPageChange={setPage}
          onPageSizeChange={(size) => {
            setPageSize(size);
            setPage(1); // reset page on size change
          }}
        />
      )}
    </Box>
  );
}