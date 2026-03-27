import "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    skipOrg?: boolean;
    skipAuth?: boolean;
  }
}