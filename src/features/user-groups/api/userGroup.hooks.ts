// features/user-groups/api/userGroup.hook.ts

import { useQuery } from "@tanstack/react-query";
import { getUserGroups } from "./userGroup.api";
import { userGroupQueryKeys } from "./userGroup.queryKey";
import { UserGroupQueryParams } from "./userGroup.types";
import { useOrgStore } from "@/features/organization/store/org.store";

export const useUserGroups = (
  params: UserGroupQueryParams = {}
) => {
  const { selectedOrg } = useOrgStore();
  const organizationId = selectedOrg?.org_id ?? "";

  return useQuery({
    queryKey: userGroupQueryKeys.list(params, organizationId),
    queryFn: () => getUserGroups(params, organizationId),
    enabled: !!organizationId,
  });
};