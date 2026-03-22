// shared/api/axios.ts

import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { useAuthStore } from "@/features/auth/store/auth.store";
import { useOrgStore } from "@/features/organization/store/org.store";

// create instance
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8002/api",
  timeout: 10000,
});

// request interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = useAuthStore.getState().token;
    const org = useOrgStore.getState().selectedOrg;

    // attach token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // attach org_id (critical for your system)
    if (org?.id) {
      config.headers["org_id"] = org.id;
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

    // handle unauthorized globally
    if (status === 401) {
      useAuthStore.getState().logout();

      // optional: redirect
      window.location.href = "/login";
    }

    // you can extend this:
    // 403 → permission
    // 500 → toast/logging

    return Promise.reject(error);
  }
);