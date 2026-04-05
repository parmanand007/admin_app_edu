// features/user-groups/components/table/GroupTableRow.tsx

import {
  TableRow,
  TableCell,
  Checkbox,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { UserGroup } from "../../api/userGroup.types";

interface Props {
  group: UserGroup;
}

export default function GroupTableRow({ group }: Props) {
  return (
    <TableRow hover>
      <TableCell padding="checkbox">
        <Checkbox />
      </TableCell>

      <TableCell sx={{ fontWeight: 500 }}>
        {group.title}
      </TableCell>

      <TableCell>{group.organization_name}</TableCell>

      <TableCell>
        {new Date(group.added_on).toLocaleDateString()}
      </TableCell>

      <TableCell>{group.users.length}</TableCell>

      <TableCell align="right">
        <IconButton size="small">
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}