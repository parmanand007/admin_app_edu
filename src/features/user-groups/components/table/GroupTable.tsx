// features/user-groups/components/table/GroupTable.tsx

import {
  Table,
  TableBody,
  Paper,
  TableContainer,
  TablePagination,
} from "@mui/material";

import GroupTableHeader from "./GroupTableHeader";
import GroupTableRow from "./GroupTableRow";
import GroupTableEmpty from "./GroupTableEmpty";
import { UserGroup } from "../../api/userGroup.types";

interface Props {
  groups: UserGroup[];
  total: number;
  page: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
}

export default function GroupTable({
  groups,
  total,
  page,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: Props) {
  return (
    <Paper sx={{ borderRadius: 2 }}>
      <TableContainer>
        <Table>
          <GroupTableHeader />

          <TableBody>
            {groups.length === 0 ? (
              <GroupTableEmpty />
            ) : (
              groups.map((group) => (
                <GroupTableRow key={group.group_id} group={group} />
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={total}
        page={page - 1}
        rowsPerPage={pageSize}
        onPageChange={(_, newPage) => onPageChange(newPage + 1)}
        onRowsPerPageChange={(e) =>
          onPageSizeChange(Number(e.target.value))
        }
        rowsPerPageOptions={[10, 20, 50]}
      />
    </Paper>
  );
}