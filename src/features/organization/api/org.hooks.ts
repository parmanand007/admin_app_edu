// features/organization/api/org.hooks.ts

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useOrgStore } from "../store/org.store";
import { getProfile } from "@/features/dashboard/api/dashboard.api";

export const useInitializeOrganizations = () => {
  const { setOrganizations, setSelectedOrg } = useOrgStore();

  const { data, isSuccess } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  useEffect(() => {
    if (!isSuccess || !data) return;

    const orgs = data.organizations.map((org) => ({
      org_id: org.org_id,
      name: org.name,
    }));

    setOrganizations(orgs);

    // default selection
    if (orgs.length > 0) {
      setSelectedOrg(orgs[0]);
    }
  }, [data, isSuccess, setOrganizations, setSelectedOrg]);
};