// shared/config/routes.config.ts

import React from "react";
import { Outlet } from "react-router-dom";
import { UserType } from "@/features/auth/store/auth.store";

export interface AppRoute {
  path: string;
  element: React.LazyExoticComponent<React.ComponentType>;
  roles?: UserType[];
  children?: AppRoute[];
}

export const ROUTES = {
  LOGIN: "/login",
  VERIFY_OTP: "/verify-otp",

  DASHBOARD: "/dashboard",
  USERS: "/users",
  USER_GROUPS: "/user_groups",

  REPORTS: "/reports",
  SECURE_VAULT: "/secure-vault",
  LICENSE: "/license-management",
  TARGET: "/target-management",
  QUESTIONS: "/questions",

  PROGRAMS: "/programs",
  PROGRAMS_BUILDER: "/programs/builder",
  PROGRAMS_ASSIGNMENT: "/programs/assignment",
  SURVEY_QUESTIONS: "/programs/survey-questions",
  SURVEY_MODULE: "/programs/survey-module",
  SURVEY_ASSIGNMENT: "/programs/survey-assignment",

  MODULES: "/modules",

  TOURNAMENT: "/tournaments",
  TOURNAMENT_CREATE: "/tournaments/create",
  TOURNAMENT_MANAGE: "/tournaments/manage",
  TOURNAMENT_ASSIGNMENT: "/tournaments/assignment",

  SUPPORT: "/support",

  CONTENT: "/content",
  CONTENT_VIDEOS: "/content/videos",
  CONTENT_ARTICLES: "/content/articles",
  CONTENT_TIPS: "/content/tips",
  CONTENT_ASSIGNMENT: "/content/assignment",

  SETTINGS: "/settings",
  LOGOUT: "/logout",

  EDUCATION: "/education",
  EDUCATION_CREATE: "/education/create",
  EDUCATION_CUSTOM: "/education/custom",
};

const createLazy = (Component: React.ComponentType) =>
  React.lazy(() => Promise.resolve({ default: Component }));

// Core Pages
const DashboardPage = React.lazy(() => import("@/features/dashboard/pages/DashboardPage"));
const UsersPage = React.lazy(() => import("@/features/users/pages/UsersPage"));
const UserGroupsPage = React.lazy(() => import("@/features/user-groups/pages/UserGroupsPage"));
const ReportsPage = React.lazy(() => import("@/features/reports/pages/ReportsPage"));

// Layouts
const ProgramLayout = createLazy(() => <Outlet />);
const EducationLayout = createLazy(() => <Outlet />);
const TournamentLayout = createLazy(() => <Outlet />);
const ContentLayout = createLazy(() => <Outlet />);

// Programs
const ProgramsBuilderPage = createLazy(() => <div>Programs Builder</div>);
const ProgramsAssignmentPage = createLazy(() => <div>Programs Assignment</div>);
const SurveyQuestionsPage = createLazy(() => <div>Survey Questions</div>);
const SurveyModulePage = createLazy(() => <div>Survey Module</div>);
const SurveyAssignmentPage = createLazy(() => <div>Survey Assignment</div>);

// Education
const EducationCreatePage = createLazy(() => <div>Create Education</div>);
const EducationCustomPage = createLazy(() => <div>Custom Assignments</div>);

// Others
const SecureVaultPage = createLazy(() => <div>Secure Vault</div>);
const LicensePage = createLazy(() => <div>License Management</div>);
const TargetPage = createLazy(() => <div>Target Management</div>);
const QuestionsPage = createLazy(() => <div>Questions Database</div>);
const ModulesPage = createLazy(() => <div>Modules</div>);

// Tournament
const TournamentCreatePage = createLazy(() => <div>Tournament Creation</div>);
const TournamentManagePage = createLazy(() => <div>Tournament Management</div>);
const TournamentAssignmentPage = createLazy(() => <div>Contest Assignment</div>);

// Support
const SupportPage = createLazy(() => <div>Contact Support</div>);

// Content
const VideosPage = createLazy(() => <div>Videos</div>);
const ArticlesPage = createLazy(() => <div>Articles</div>);
const TipsPage = createLazy(() => <div>Tips & Pearls</div>);
const ContentAssignmentPage = createLazy(() => <div>Content Assignment</div>);

// Account
const SettingsPage = createLazy(() => <div>Settings</div>);
const LogoutPage = createLazy(() => <div>Logout</div>);

export const APP_ROUTES: AppRoute[] = [
  {
    path: ROUTES.DASHBOARD,
    element: DashboardPage,
    roles: ["csm", "client_admin", "clinical_team"],
  },
  {
    path: ROUTES.USERS,
    element: UsersPage,
    roles: ["csm", "client_admin", "clinical_team"],
  },
  {
    path: ROUTES.USER_GROUPS,
    element: UserGroupsPage,
    roles: ["csm", "client_admin"],
  },

  {
    path: ROUTES.REPORTS,
    element: ReportsPage,
    roles: ["csm", "client_admin"],
  },
  {
    path: ROUTES.SECURE_VAULT,
    element: SecureVaultPage,
    roles: ["csm", "client_admin"],
  },
  {
    path: ROUTES.LICENSE,
    element: LicensePage,
    roles: ["csm", "client_admin"],
  },
  {
    path: ROUTES.TARGET,
    element: TargetPage,
    roles: ["csm", "client_admin"],
  },
  {
    path: ROUTES.QUESTIONS,
    element: QuestionsPage,
    roles: ["csm", "client_admin"],
  },

  {
    path: ROUTES.PROGRAMS,
    element: ProgramLayout,
    roles: ["csm", "client_admin", "clinical_team"],
    children: [
      { path: "builder", element: ProgramsBuilderPage },
      { path: "assignment", element: ProgramsAssignmentPage },
      { path: "survey-questions", element: SurveyQuestionsPage },
      { path: "survey-module", element: SurveyModulePage },
      { path: "survey-assignment", element: SurveyAssignmentPage },
    ],
  },

  {
    path: ROUTES.EDUCATION,
    element: EducationLayout,
    roles: ["csm", "client_admin", "clinical_team"],
    children: [
      { path: "create", element: EducationCreatePage },
      { path: "custom", element: EducationCustomPage },
    ],
  },

  {
    path: ROUTES.MODULES,
    element: ModulesPage,
    roles: ["csm", "client_admin"],
  },

  {
    path: ROUTES.TOURNAMENT,
    element: TournamentLayout,
    roles: ["csm", "client_admin"],
    children: [
      { path: "create", element: TournamentCreatePage },
      { path: "manage", element: TournamentManagePage },
      { path: "assignment", element: TournamentAssignmentPage },
    ],
  },

  {
    path: ROUTES.SUPPORT,
    element: SupportPage,
    roles: ["csm", "client_admin", "clinical_team"],
  },

  {
    path: ROUTES.CONTENT,
    element: ContentLayout,
    roles: ["csm", "client_admin"],
    children: [
      { path: "videos", element: VideosPage },
      { path: "articles", element: ArticlesPage },
      { path: "tips", element: TipsPage },
      { path: "assignment", element: ContentAssignmentPage },
    ],
  },

  {
    path: ROUTES.SETTINGS,
    element: SettingsPage,
    roles: ["csm", "client_admin", "clinical_team"],
  },
  {
    path: ROUTES.LOGOUT,
    element: LogoutPage,
    roles: ["csm", "client_admin", "clinical_team"],
  },
];