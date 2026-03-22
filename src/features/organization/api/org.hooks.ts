// features/organization/api/org.hooks.ts
import { useEffect } from "react";
import { api } from "@/shared/api/axios";
import { useAuthStore } from "@/features/auth/store/auth.store";
import { useOrgStore } from "../store/org.store";

export const useInitializeOrganizations = () => {
  const type = useAuthStore((s) => s.type);
  const { setOrganizations, setSelectedOrg } = useOrgStore();

  useEffect(() => {
    const fetch = async () => {
      const res = await api.get("/organizations");

      if (type === "client_admin") {
        setOrganizations([res.data]);
        setSelectedOrg(res.data);
      } else {
        setOrganizations(res.data);
        setSelectedOrg(res.data[0]);
      }
    };

    fetch();
  }, [type]);
};