// features/dashboard/api/dashboard.api.ts

import { api } from "@/shared/api/axios";
import {
  ProfileResponse,
  OrgStatsResponse,
  EngagementResponse,
} from "./dashboard.types";

export const getProfile = async (): Promise<ProfileResponse> => {
  const res = await api.get<ProfileResponse>("v1/profile/");
  return res.data;
};

export const getOrgStats = async (): Promise<OrgStatsResponse> => {
  const res = await api.get<OrgStatsResponse>("v1/organizations/org_code/");
  return res.data;
};

export const getUserEngagement = async (): Promise<EngagementResponse> => {
  const res = await api.get<EngagementResponse>("v1/reports/user_engagement/");
  return res.data;
};