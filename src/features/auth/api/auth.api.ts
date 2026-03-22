import api from "../../../utils/axios";

export const requestOtp = (data: {
  email: string;
  recaptcha: string;
}) => {
  return api.post("/v2/login/get_otp/", data);
};

export const verifyOtp = (data: {
  email: string;
  otp: string;
}) => {
  return api.post("/v2/login/", data);
};