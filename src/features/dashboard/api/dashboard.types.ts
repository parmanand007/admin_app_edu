export interface Organization {
  name: string;
  org_id: string;
}

export interface ProfileResponse {
  first_name: string;
  last_name: string;
  email: string;
  type: "csm" | "client_admin" | "clinical_team";
  organizations: Organization[];
}

export interface OrgStatsResponse {
  organization: string;
  total_users: number;
  active_users: number;
  active_licenses: number;
  pending_users: number;
}

export interface EngagementResponse {
  logged_in: number;
  programs_started: number;
  programs_completed: number;
}