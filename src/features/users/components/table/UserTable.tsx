// features/users/components/UserTable.tsx

import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Chip,
} from "@mui/material";

export default function UserTable() {
  const rows = [
    {
      name: "Dinesh Hase",
      email: "dinesh.hase@doctustech.com",
      role: "Clinical User",
      status: "Active",
    },
  ];

  return (
    <Box
      sx={{
        border: "1px solid #E5E7EB",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>

              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>

              <TableCell>
                <Chip label={row.status} color="success" size="small" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}