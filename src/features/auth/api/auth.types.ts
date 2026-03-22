// auth/api/auth.types.ts

export interface RequestOtpPayload {
  email: string;
  recaptcha: string;
}

export interface VerifyOtpPayload {
  email: string;
  otp: string;
}

export interface VerifyOtpResponse {
  token: string;
  is_active: boolean;
  type: "csm" | "client_admin" | "clinical_team"; 
}