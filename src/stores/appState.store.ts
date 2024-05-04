import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

interface AppStateStore {
  activeModal: AppModalProps | null;
  isModalLoading?: boolean;

  closeActiveModal: () => void;
  setActiveModal: (value: AppModalProps) => void;
  setIsModalLoading: (value: boolean) => void;
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
  }),
  shallow
);
