import { useMutation } from "@tanstack/react-query";
import { requestOtp, verifyOtp } from "./auth.api";
import {
  RequestOtpPayload,
  VerifyOtpPayload,
  VerifyOtpResponse,
} from "./auth.types";

export const useRequestOtp = () => {
  return useMutation<void, Error, RequestOtpPayload>({
    mutationFn: requestOtp,
  });
};

export const useVerifyOtp = () => {
  return useMutation<VerifyOtpResponse, Error, VerifyOtpPayload>({
    mutationFn: verifyOtp,
  });
};