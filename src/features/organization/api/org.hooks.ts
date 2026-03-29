// features/organization/api/org.hooks.ts

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useOrgStore } from "../store/org.store";
import { getProfile } from "@/features/dashboard/api/dashboard.api";
import { fetchOrganizationStats } from "./org.api";

export const useInitializeOrganizations = () => {
  const { setOrganizations, setSelectedOrg } = useOrgStore();

  const token = localStorage.getItem("auth-storage"); // or from store

  const { data, isSuccess } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
    enabled: !!token, // critical fix
    retry: false, // avoid infinite retry loop during debug
  });

  useEffect(() => {
    if (!isSuccess || !data) return;

    const orgs = data.organizations.map((org) => ({
      org_id: org.org_id,
      name: org.name,
    }));

    setOrganizations(orgs);

    if (orgs.length > 0) {
      setSelectedOrg(orgs[0]);
    }
  }, [data, isSuccess]);
};


export const useOrganizationStats = () => {
  return useQuery({
    queryKey: ["organization-stats"],
    queryFn: fetchOrganizationStats,
  });
};