// shared/config/sidebar.config.ts

import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import LayersIcon from "@mui/icons-material/Layers";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AssessmentIcon from "@mui/icons-material/Assessment";
import LockIcon from "@mui/icons-material/Lock";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import QuizIcon from "@mui/icons-material/Quiz";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ArticleIcon from "@mui/icons-material/Article";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export interface SidebarItem {
  label: string;
  path?: string;
  icon?: React.ElementType;
  children?: SidebarItem[];
  section?: string; // for grouping like ACCOUNT
}

const COMMON_ITEMS: SidebarItem[] = [
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
  {
    label: "Reports",
    path: "/reports",
    icon: AssessmentIcon,
  },
  {
    label: "Secure Vault",
    path: "/secure-vault",
    icon: LockIcon,
  },
  {
    label: "User Groups",
    path: "/user_groups",
    icon: PeopleAltIcon,
  },
  {
    label: "License Management",
    path: "/license-management",
    icon: WorkspacePremiumIcon,
  },
  {
    label: "Target Management",
    path: "/target-management",
    icon: TrackChangesIcon,
  },
  {
    label: "Questions Database",
    path: "/questions",
    icon: QuizIcon,
  },

  // Programs
  {
    label: "Programs",
    icon: LayersIcon,
    children: [
      {
        label: "Programs Builder",
        path: "/programs/builder",
      },
      {
        label: "Programs Assignment",
        path: "/programs/assignment",
      },
      {
        label: "Survey Questions",
        path: "/programs/survey-questions",
      },
      {
        label: "Survey Module",
        path: "/programs/survey-module",
      },
      {
        label: "Survey Assignment",
        path: "/programs/survey-assignment",
      },
    ],
  },

  // Modules
  {
    label: "Modules",
    path: "/modules",
    icon: ViewModuleIcon,
  },

  // Tournament Builder
  {
    label: "Tournament Builder",
    icon: EmojiEventsIcon,
    children: [
      {
        label: "Tournament Creation",
        path: "/tournaments/create",
      },
      {
        label: "Tournament Management",
        path: "/tournaments/manage",
      },
      {
        label: "Contest Assignment",
        path: "/tournaments/assignment",
      },
    ],
  },

  // Support
  {
    label: "Contact Support",
    path: "/support",
    icon: SupportAgentIcon,
  },

  // Content
  {
    label: "Content",
    icon: ArticleIcon,
    children: [
      {
        label: "Videos",
        path: "/content/videos",
      },
      {
        label: "Articles",
        path: "/content/articles",
      },
      {
        label: "Tips & Pearls",
        path: "/content/tips",
      },
      {
        label: "Content Assignment",
        path: "/content/assignment",
      },
    ],
  },

  // Account Section
  {
    label: "Settings",
    path: "/settings",
    icon: SettingsIcon,
    section: "ACCOUNT",
  },
  {
    label: "Log Out",
    path: "/logout",
    icon: LogoutIcon,
    section: "ACCOUNT",
  },
];

export const SIDEBAR_CONFIG: Record<string, SidebarItem[]> = {
  csm: [...COMMON_ITEMS],
  client_admin: [...COMMON_ITEMS],

  clinical_team: [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: DashboardIcon,
    },
    {
      label: "Programs",
      icon: LayersIcon,
      children: [
        {
          label: "Programs Builder",
          path: "/programs/builder",
        },
        {
          label: "Programs Assignment",
          path: "/programs/assignment",
        },
      ],
    },
  ],
};