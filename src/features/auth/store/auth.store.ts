// features/auth/store/auth.store.ts

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserType = "csm" | "client_admin" | "clinical_team";

// User model (keep it flexible for backend changes)
interface User {
  first_name: string;
  email: string;
}

interface AuthState {
  token: string | null;
  type: UserType | null;
  isActive: boolean;

  user: User | null;

  setAuth: (data: {
    token: string;
    type: UserType;
    isActive: boolean;
  }) => void;

  setUser: (user: User | null) => void;

  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      type: null,
      isActive: false,
      user: null,

      // Only auth-related data
      setAuth: ({ token, type, isActive }) =>
        set({ token, type, isActive }),

      // Separate user setter (important)
      setUser: (user) => set({ user }),

      // Full reset
      logout: () =>
        set({
          token: null,
          type: null,
          isActive: false,
          user: null,
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);