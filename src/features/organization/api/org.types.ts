// Organization API Response Type

export interface OrganizationStats {
  organization: string;
  is_active: boolean;
  org_code: string;
  customer: string;

  active_users: number;
  active_licenses: number;
  remaining_licenses: number;
  pending_users: number;
  total_users: number;

  remaining_nc_licenses: number;
  remaining_cl_licenses: number;

  classical_training_enabled: boolean;
  ai_solutions_enabled: boolean;

  configuration: {
    show_tailored_section: boolean;
  };
}