// features/users/api/user.api.ts

import { api } from "@/shared/api/axios";
import { UsersResponse } from "./user.types";

export const getUsers = async (): Promise<UsersResponse> => {
  const res = await api.get<UsersResponse>(
    "v1/organizations/users/",
    {
      params: {
        page: 1,
        page_size: 10,
        ordering: "-joined_on",
        is_active: true,
      },
    }
  );

  return res.data;
};