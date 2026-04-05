// features/reports/api/reports.api.ts

import { api } from "@/shared/api/axios";
import { ReportsResponse } from "./reports.types";

export const getReports = async (): Promise<ReportsResponse> => {
  const res = await api.get("v2/looker_report/mappings/");
  return res.data;
};