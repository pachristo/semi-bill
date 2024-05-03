import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';
import { GetAllCryptoTransactionsByTypeAndStatusRes } from '../types/api/crypto.types';
import { GetAllReferredUsersByTypeRes } from '../types/api/users.types';

interface AppStateStore {
  activeModal: AppModalProps | null;
  isModalLoading?: boolean;
  singleUserCrytoRes: GetAllCryptoTransactionsByTypeAndStatusRes | null;
  singleUserReferralsRes: GetAllReferredUsersByTypeRes | null;

  closeActiveModal: () => void;
  setActiveModal: (value: AppModalProps) => void;
  setIsModalLoading: (value: boolean) => void;
  setSingleUserCrytoRes: (
    value: GetAllCryptoTransactionsByTypeAndStatusRes | null
  ) => void;
  setSingleUserReferralsRes: (
    value: GetAllReferredUsersByTypeRes | null
  ) => void;
}

export const appStateStore = createWithEqualityFn<AppStateStore>(
  (set) => ({
    activeModal: null,
    isModalLoading: false,
    singleUserCrytoRes: null,
    singleUserReferralsRes: null,

    closeActiveModal: () => set(() => ({ activeModal: null })),
    setActiveModal: (activeModal) => set(() => ({ activeModal })),
    setIsModalLoading: (isModalLoading) => set(() => ({ isModalLoading })),
    setSingleUserCrytoRes: (singleUserCrytoRes) =>
      set(() => ({ singleUserCrytoRes })),
    setSingleUserReferralsRes: (singleUserReferralsRes) =>
      set(() => ({ singleUserReferralsRes })),
  }),
  shallow
);
