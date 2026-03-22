
import { useOrgStore } from "@/features/organization/store/org.store";

export const useScopedOrg = (overrideOrgId?: string) => {
  const globalOrg = useOrgStore((s) => s.selectedOrg);

  return overrideOrgId || globalOrg?.id;
};