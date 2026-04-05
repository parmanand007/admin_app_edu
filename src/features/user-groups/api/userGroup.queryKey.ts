// features/user-groups/api/userGroup.queryKey.ts

import { UserGroupQueryParams } from "./userGroup.types";

export const userGroupQueryKeys = {
  all: ["user-groups"] as const,

  list: (params: UserGroupQueryParams, orgId: string) =>
    [...userGroupQueryKeys.all, "list", params, orgId] as const,
};