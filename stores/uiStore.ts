import { create } from 'zustand';

interface UIStore {
  isSidebarOpen: boolean;
  isModalOpen: boolean;
  isLoading: boolean;
  toggleSidebar: () => void;
  openModal: () => void;
  closeModal: () => void;
  setLoading: (loading: boolean) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isSidebarOpen: false,
  isModalOpen: false,
  isLoading: false,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  setLoading: (loading) => set({ isLoading: loading }),
}));
