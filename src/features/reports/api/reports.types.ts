// features/reports/api/reports.types.ts

export type ReportType = "EDU" | "PDAP";

export interface Report {
  id: number;
  mapping_id: string;
  report_type: ReportType;
  name: string;
  description: string | null;
  thumbnail: string | null;
  order: number;
  is_enabled: boolean;
}

export interface ReportsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Report[];
}