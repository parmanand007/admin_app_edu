// shared/api/axios.ts

import axios, { AxiosError } from "axios";
import { useAuthStore } from "@/features/auth/store/auth.store";
import { useOrgStore } from "@/features/organization/store/org.store";

const serializeParams = (params: Record<string, any>) => {
  const searchParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    if (value === undefined || value === null) return;

    if (typeof value === "boolean") {
      searchParams.append(key, value ? "True" : "False");
    } else {
      searchParams.append(key, String(value));
    }
  });

  return searchParams.toString();
};

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8002/api",
  timeout: 10000,
  paramsSerializer: serializeParams,
});

// request interceptor
api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    const org = useOrgStore.getState().selectedOrg;

    if (!config.skipAuth && token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (!config.skipOrg && org?.org_id) {
      config.headers["organization"] = org.org_id;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// response interceptor
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const status = error.response?.status;

    if (status === 401) {
      useAuthStore.getState().logout();
    }

    return Promise.reject(error);
  }
);