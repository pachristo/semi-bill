import { createWithEqualityFn } from 'zustand/traditional';
import { persist } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';

import { encryptedStore } from '.';
import {
  LoginResponse,
  UpdateDetailsRequest,
  UserData,
} from '../types/api/auth.types';

export interface AuthStore {
  loginResponse: LoginResponse | null;

  updateProfile: (value: UpdateDetailsRequest) => void;
  updateAdminDetails: (value: UserData) => void;
  logout: () => void;
  setLoginResponse: (value: LoginResponse) => void;
  getLoggedInUserID: () => string;
}

export const authStoreName = 'useAuthStore';

export const authStore = createWithEqualityFn(
  persist<AuthStore>(
    (set, get) => ({
      // DEFAULT STATE
      loginResponse: null,
      profileResponse: null,

      //   ACTIONS OR MUTATORS
      logout: () => set(() => ({ loginResponse: null })),

      getLoggedInUserID: () => get().loginResponse?.data?.id,

      setLoginResponse: (loginResponse) => set(() => ({ loginResponse })),
      updateProfile: (profile) =>
        set(() => ({
          loginResponse: {
            ...get().loginResponse,
            data: { ...get().loginResponse?.data, ...profile },
          },
        })),
      updateAdminDetails: (details) =>
        set(() => ({
          loginResponse: {
            ...get().loginResponse,
            data: { ...get().loginResponse?.data, ...details },
          },
        })),
    }),
    {
      name: authStoreName,
      storage: encryptedStore(),
    }
  ),
  shallow
);
