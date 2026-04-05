// features/user-groups/api/userGroup.api.ts

import { api } from "@/shared/api/axios";
import {
  UserGroupListResponse,
  UserGroupQueryParams,
} from "./userGroup.types";

export const getUserGroups = async (
  params: UserGroupQueryParams,
  organizationId: string
): Promise<UserGroupListResponse> => {
  const res = await api.get<UserGroupListResponse>(
    "v2/groups/",
    {
      params: {
        page: params.page ?? 1,
        page_size: params.page_size ?? 10,
        search: params.search,
        ordering: params.ordering ?? "-added_on",
      },
      headers: {
        organization: organizationId,
      },
    }
  );

  return res.data;
};