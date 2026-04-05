// features/users/components/table/UserTable.tsx

import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Chip,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useUsers } from "../../api/user.hooks";

function formatDate(date: string | null) {
  if (!date) return "--";
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function getRoleLabel(role: string) {
  return role === "CL" ? "Clinical User" : role;
}

export default function UserTable() {
  const { data, isLoading } = useUsers();

  if (isLoading) return <Typography>Loading...</Typography>;

  return (
    <Box
      sx={{
        border: "1px solid #E5E7EB",
        borderRadius: 2,
        backgroundColor: "#fff",
        overflowX: "auto", // IMPORTANT FIX
      }}
    >
      <Table sx={{ minWidth: 1100 }}>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>

            <TableCell>NAME</TableCell>
            <TableCell>EMAIL ID</TableCell>

            <TableCell>
              <Box display="flex" alignItems="center" gap={0.5}>
                LAST LOGIN
                <InfoOutlinedIcon sx={{ fontSize: 14 }} />
              </Box>
            </TableCell>

            <TableCell>ROLE</TableCell>
            <TableCell>STATUS</TableCell>
            <TableCell>REGION</TableCell>
            <TableCell>CLINIC</TableCell>
            <TableCell>ACTION</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data?.results.map((row) => (
            <TableRow key={row.user_id} hover>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>

              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>

              <TableCell>
                <Box display="flex" alignItems="center" gap={1}>
                  <AccessTimeIcon sx={{ fontSize: 16, color: "#94A3B8" }} />
                  {formatDate(row.last_login)}
                </Box>
              </TableCell>

              <TableCell>{getRoleLabel(row.role)}</TableCell>

              <TableCell>
                <Chip
                  label={row.is_active ? "Active" : "Inactive"}
                  size="small"
                  sx={{
                    border: "1px solid #10B981",
                    color: "#059669",
                    backgroundColor: "#ECFDF5",
                    fontWeight: 500,
                  }}
                />
              </TableCell>

              <TableCell>{row.region || "--"}</TableCell>
              <TableCell>{row.clinic || "--"}</TableCell>

              <TableCell>
                <MoreVertIcon sx={{ cursor: "pointer" }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}