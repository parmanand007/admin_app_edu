// features/dashboard/api/dashboard.hooks.ts

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import {
  getOrgStats,
  getProfile,
  getUserEngagement,
} from "./dashboard.api";

import { useOrgStore } from "@/features/organization/store/org.store";
import { useAuthStore } from "@/features/auth/store/auth.store";

export const useDashboardData = () => {
  const setOrganizations = useOrgStore((s) => s.setOrganizations);
   const setUser = useAuthStore((s) => s.setUser);
  // IMPORTANT: use reactive selector (not getState)
  const selectedOrg = useOrgStore((s) => s.selectedOrg);

  // PROFILE QUERY (no onSuccess in v5)
  const profile = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
    staleTime: 5 * 60 * 1000,
  });

  // SIDE EFFECT: sync profile → Zustand
  useEffect(() => {
    if (profile.data) {
      const orgs = profile.data.organizations || [];
      setOrganizations(orgs);
      setUser({
        // id: profile.data,
        first_name: profile.data.first_name,
        email: profile.data.email,
      });
    }
  }, [profile.data, setOrganizations]);

  // ORG STATS (wait until org exists)
  const stats = useQuery({
    queryKey: ["org-stats", selectedOrg?.org_id],
    queryFn: getOrgStats,
    enabled: !!selectedOrg,
  });

  // ENGAGEMENT (wait until org exists)
  const engagement = useQuery({
    queryKey: ["engagement", selectedOrg?.org_id],
    queryFn: getUserEngagement,
    enabled: !!selectedOrg,
  });

  return { profile, stats, engagement };
};