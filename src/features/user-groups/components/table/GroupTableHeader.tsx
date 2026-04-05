// features/user-groups/components/table/GroupTableHeader.tsx

import { TableHead, TableRow, TableCell, Checkbox } from "@mui/material";

export default function GroupTableHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox />
        </TableCell>

        <TableCell>Group Name</TableCell>
        <TableCell>Organization</TableCell>
        <TableCell>Created Date</TableCell>
        <TableCell>Total Users</TableCell>
        <TableCell />
      </TableRow>
    </TableHead>
  );
}