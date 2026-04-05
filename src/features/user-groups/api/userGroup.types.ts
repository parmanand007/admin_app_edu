// features/user-groups/api/userGroup.types.ts

export interface GroupUser {
  first_name: string;
  last_name: string;
  email: string;
  organization: string;
  is_active: boolean;
}

export interface UserGroup {
  group_id: string;
  title: string;
  description: string;
  organization_name: string;
  organization_uuid: string;
  users: GroupUser[];
  added_on: string;
  organization: number;
}

export interface UserGroupListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: UserGroup[];
}

export interface UserGroupQueryParams {
  page?: number;
  page_size?: number;
  search?: string;
  ordering?: string;
}