// dashboard.hooks.ts

import { useQuery } from "@tanstack/react-query";
import { getOrgStats, getProfile, getUserEngagement } from "./dashboard.api";

export const useDashboardData = () => {
  const profile = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  const stats = useQuery({
    queryKey: ["org-stats"],
    queryFn: getOrgStats,
  });

  const engagement = useQuery({
    queryKey: ["engagement"],
    queryFn: getUserEngagement,
  });

  return { profile, stats, engagement };
};  