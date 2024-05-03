import { GenericAPIResponse } from './index.types';

export interface UserData {
  id: string;
  roleId: number;
  isAdmin: boolean;
  activityStatus: number;
  email: string;
  profilePic: string | null;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface GetAdminProfile extends GenericAPIResponse {
  data: UserData;
}

export interface LoginResponse extends GenericAPIResponse {
  message: string;
  data: UserData;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface ForgotPasswordReq {
  email: string;
}

export interface ResetPasswordReq {
  email: string;
  password: string;
  confirmPassword: string;
  token: string;
}

export interface ChangePasswordRequest {
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export interface UpdateDetailsRequest {
  firstName: string;
  lastName: string;
  phone: string;
}

export interface UpdatePasswordReq {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}
