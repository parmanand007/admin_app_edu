// features/organization/store/org.store.ts

import { queryClient } from "@/shared/api/queryClient";
import { create } from "zustand";

interface Organization {
  org_id: string;
  name: string;
}

interface OrgState {
  organizations: Organization[];
  selectedOrg: Organization | null;

  setOrganizations: (orgs: Organization[]) => void;

  setSelectedOrg: (
    org:
      | Organization
      | null
      | ((prev: Organization | null) => Organization | null)
  ) => void;

  resetOrg: () => void;
}

export const useOrgStore = create<OrgState>((set, get) => ({
  organizations: [],
  selectedOrg: null,

  // Set org list and ensure valid selection
  setOrganizations: (orgs) => {
    const prevSelected = get().selectedOrg;

    const isValidSelected = orgs.some(
      (o) => o.org_id === prevSelected?.org_id
    );

    const nextSelected =
      isValidSelected ? prevSelected : orgs.length > 0 ? orgs[0] : null;

    set({
      organizations: orgs,
      selectedOrg: nextSelected,
    });

    // If selected org changed → refetch queries
    if (prevSelected?.org_id !== nextSelected?.org_id) {
      queryClient.invalidateQueries();
    }
  },

  // Change selected org
  setSelectedOrg: (org) => {
    const prevOrg = get().selectedOrg;

    const nextOrg =
      typeof org === "function" ? org(prevOrg) : org;

    // Prevent unnecessary updates
    if (prevOrg?.org_id === nextOrg?.org_id) return;

    set({
      selectedOrg: nextOrg,
    });

    // CRITICAL: refetch all active queries
    queryClient.invalidateQueries();
  },

  // Reset everything (logout / org change)
  resetOrg: () => {
    set({
      organizations: [],
      selectedOrg: null,
    });

    // Clear entire cache (important for auth/org switch)
    queryClient.clear();
  },
}));