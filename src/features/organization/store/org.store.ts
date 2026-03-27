// features/organization/store/org.store.ts

import { create } from "zustand";

interface Organization {
  org_id: string;
  name: string;
}

interface OrgState {
  organizations: Organization[];
  selectedOrg: Organization | null;

  setOrganizations: (orgs: Organization[]) => void;

  // support both direct + functional update
  setSelectedOrg: (
    org:
      | Organization
      | null
      | ((prev: Organization | null) => Organization | null)
  ) => void;

  // helper utilities (important for real apps)
  resetOrg: () => void;
}

export const useOrgStore = create<OrgState>((set, get) => ({
  organizations: [],
  selectedOrg: null,

  setOrganizations: (orgs) => {
    set((state) => {
      // if current selectedOrg is not in new list → reset
      const isValidSelected = orgs.some(
        (o) => o.org_id === state.selectedOrg?.org_id
      );

      return {
        organizations: orgs,
        selectedOrg: isValidSelected
          ? state.selectedOrg
          : orgs.length > 0
          ? orgs[0] // auto-select first org
          : null,
      };
    });
  },

  setSelectedOrg: (org) => {
    set((state) => ({
      selectedOrg:
        typeof org === "function"
          ? org(state.selectedOrg)
          : org,
    }));
  },

  resetOrg: () =>
    set({
      organizations: [],
      selectedOrg: null,
    }),
}));