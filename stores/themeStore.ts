import type { Theme } from '@/types/common';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: 'light',
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => {
        const currentTheme = get().theme;
        // If system, get actual theme and toggle it
        if (currentTheme === 'system') {
          const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          const newTheme = systemTheme === 'light' ? 'dark' : 'light';
          set({ theme: newTheme });
        } else {
          const newTheme = currentTheme === 'light' ? 'dark' : 'light';
          set({ theme: newTheme });
        }
      },
    }),
    {
      name: 'theme-storage',
    },
  ),
);
