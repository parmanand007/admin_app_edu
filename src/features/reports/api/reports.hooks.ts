// features/reports/api/reports.hooks.ts

import { useQuery } from "@tanstack/react-query";
import { getReports } from "./reports.api";

export const useReports = () => {
  return useQuery({
    queryKey: ["reports"],
    queryFn: getReports,
    staleTime: 5 * 60 * 1000,
  });
};