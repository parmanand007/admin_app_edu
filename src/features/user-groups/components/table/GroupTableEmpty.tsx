// features/user-groups/components/table/GroupTableEmpty.tsx

import { TableRow, TableCell, Typography } from "@mui/material";

export default function GroupTableEmpty() {
  return (
    <TableRow>
      <TableCell colSpan={6} align="center">
        <Typography variant="body2" color="text.secondary">
          No user groups found
        </Typography>
      </TableCell>
    </TableRow>
  );
}