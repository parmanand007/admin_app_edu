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

  PROGRAMS: "/programs",
  PROGRAMS_LIBRARY: "/programs/library",
  PROGRAMS_ASSIGNED: "/programs/assigned",

  EDUCATION: "/education",
  EDUCATION_CREATE: "/education/create",
  EDUCATION_CUSTOM: "/education/custom",
};

const createLazy = (Component: React.ComponentType) =>
  React.lazy(() => Promise.resolve({ default: Component }));

const DashboardPage = React.lazy(() => import("@/features/dashboard/pages/DashboardPage"));
const UsersPage = React.lazy(() => import("@/features/users/pages/UsersPage"));
const UserGroupsPage = React.lazy(() => import("@/features/user-groups/pages/UserGroupsPage"));

const ProgramLayout = createLazy(() => <Outlet />);
const EducationLayout = createLazy(() => <Outlet />);

const ProgramLibraryPage = createLazy(() => <div>Program Library</div>);
const ProgramsAssignedPage = createLazy(() => <div>Programs Assigned</div>);

const EducationCreatePage = createLazy(() => <div>Create Education</div>);
const EducationCustomPage = createLazy(() => <div>Custom Assignments</div>);

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
    path: ROUTES.PROGRAMS,
    element: ProgramLayout,
    roles: ["csm", "client_admin", "clinical_team"],
    children: [
      {
        path: "library",
        element: ProgramLibraryPage,
      },
      {
        path: "assigned",
        element: ProgramsAssignedPage,
      },
    ],
  },
  {
    path: ROUTES.EDUCATION,
    element: EducationLayout,
    roles: ["csm", "client_admin", "clinical_team"],
    children: [
      {
        path: "create",
        element: EducationCreatePage,
      },
      {
        path: "custom",
        element: EducationCustomPage,
      },
    ],
  },
];