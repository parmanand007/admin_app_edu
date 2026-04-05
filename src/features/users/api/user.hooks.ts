// features/users/api/user.hooks.ts

import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./user.api";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};