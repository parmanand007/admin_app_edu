
import { api } from "@/shared/api/axios";
import { OrganizationStats } from "./org.types";

// Fetch organization stats
export const fetchOrganizationStats = async (): Promise<OrganizationStats> => {
  const res = await api.get<OrganizationStats>("v1/organizations/org_code/");
    return res.data;
};