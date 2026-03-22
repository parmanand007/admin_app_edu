// auth/api/auth.hooks.ts

import { useMutation } from "@tanstack/react-query";
import { requestOtp, verifyOtp } from "./auth.api";

export const useRequestOtp = () => {
  return useMutation({
    mutationFn: requestOtp,
  });
};

export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: verifyOtp,
  });
};