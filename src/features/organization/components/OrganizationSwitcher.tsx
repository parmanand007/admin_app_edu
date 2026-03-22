
import { useOrgStore } from "../store/org.store";

export default function OrganizationSwitcher() {
  const { organizations, selectedOrg, setSelectedOrg } = useOrgStore();

  return (
    <select
      value={selectedOrg?.id || ""}
      onChange={(e) => {
        const org = organizations.find((o) => o.id === e.target.value);
        if (org) setSelectedOrg(org);
      }}
    >
      {organizations.map((org) => (
        <option key={org.id} value={org.id}>
          {org.name}
        </option>
      ))}
    </select>
  );
}