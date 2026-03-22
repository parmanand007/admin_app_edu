
import { api } from "@/shared/api/axios";
import {
  RequestOtpPayload,
  VerifyOtpPayload,
  VerifyOtpResponse,
} from "./auth.types";

export const requestOtp = async (data: RequestOtpPayload): Promise<void> => {
  await api.post("/v2/login/get_otp/", data);
};

export const verifyOtp = async (
  data: VerifyOtpPayload
): Promise<VerifyOtpResponse> => {
  const response = await api.post<VerifyOtpResponse>("/v2/login/", data);
  return response.data;
};