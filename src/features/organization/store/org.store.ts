// features/organization/store/org.store.ts
import { create } from "zustand";

interface Organization {
  id: string;
  name: string;
}

interface OrgState {
  organizations: Organization[];
  selectedOrg: Organization | null;

  setOrganizations: (orgs: Organization[]) => void;
  setSelectedOrg: (org: Organization) => void;
}

export const useOrgStore = create<OrgState>((set) => ({
  organizations: [],
  selectedOrg: null,

  setOrganizations: (orgs) => set({ organizations: orgs }),

  setSelectedOrg: (org) => set({ selectedOrg: org }),
}));