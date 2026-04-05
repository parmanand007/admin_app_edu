// shared/config/sidebar.config.ts

import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import LayersIcon from "@mui/icons-material/Layers";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export interface SidebarItem {
  label: string;
  path?: string;
  icon?: React.ElementType;
  children?: SidebarItem[];
}

export const SIDEBAR_CONFIG: Record<string, SidebarItem[]> = {
  csm: [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: DashboardIcon,
    },
    {
      label: "Users",
      path: "/users",
      icon: GroupIcon,
    },
    {
      label: "User Groups",
      path: "/user_groups",
      icon: GroupIcon,
    },
    {
      label: "Programs",
      icon: LayersIcon,
      children: [
        {
          label: "Program Library",
          path: "/programs/library",
        },
        {
          label: "Programs Assigned",
          path: "/programs/assigned",
        },
      ],
    },
    {
      label: "Tailored Education",
      icon: MenuBookIcon,
      children: [
        {
          label: "Create",
          path: "/education/create",
        },
        {
          label: "Custom Assignments",
          path: "/education/custom",
        },
      ],
    },
  ],

  client_admin: [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: DashboardIcon,
    },
    {
      label: "Users",
      path: "/users",
      icon: GroupIcon,
    },
    {
      label: "User Groups", // added for consistency
      path: "/user_groups",
      icon: GroupIcon,
    },
    {
      label: "Programs",
      icon: LayersIcon,
      children: [
        {
          label: "Program Library",
          path: "/programs/library",
        },
        {
          label: "Programs Assigned",
          path: "/programs/assigned",
        },
      ],
    },
    {
      label: "Tailored Education",
      icon: MenuBookIcon,
      children: [
        {
          label: "Create",
          path: "/education/create",
        },
        {
          label: "Custom Assignments",
          path: "/education/custom",
        },
      ],
    },
  ],

  clinical_team: [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: DashboardIcon,
    },
    {
      label: "Users",
      path: "/users",
      icon: GroupIcon,
    },
    {
      label: "Programs",
      icon: LayersIcon,
      children: [
        {
          label: "Program Library",
          path: "/programs/library",
        },
        {
          label: "Programs Assigned",
          path: "/programs/assigned",
        },
      ],
    },
    {
      label: "Tailored Education",
      icon: MenuBookIcon,
      children: [
        {
          label: "Create",
          path: "/education/create",
        },
        {
          label: "Custom Assignments",
          path: "/education/custom",
        },
      ],
    },
  ],
};