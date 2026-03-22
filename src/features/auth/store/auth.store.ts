
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserType = "csm" | "client_admin" | "clinical_team";

interface AuthState {
  token: string | null;
  type: UserType | null;
  isActive: boolean;

  setAuth: (data: { token: string; type: UserType; isActive: boolean }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      type: null,
      isActive: false,

      setAuth: ({ token, type, isActive }) =>
        set({ token, type, isActive }),

      logout: () =>
        set({ token: null, type: null, isActive: false }),
    }),
    {
      name: "auth-storage", // key in localStorage
    }
  )
);