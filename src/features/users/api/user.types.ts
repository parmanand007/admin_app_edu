// features/users/api/user.types.ts

export interface UserItem {
  user_id: string;
  name: string;
  email: string;
  role: string;
  is_active: boolean;
  last_login: string | null;
  region: string | null;
  clinic: string | null;
}

export interface UsersResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: UserItem[];
}