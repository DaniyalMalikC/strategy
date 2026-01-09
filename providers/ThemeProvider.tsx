'use client';

import { useThemeStore } from '@/stores/themeStore';
import { useEffect } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore((state) => state.theme);

  // Apply theme on mount and when it changes
  useEffect(() => {
    const root = window.document.documentElement;

    const applyTheme = (themeToApply: string) => {
      // Remove all theme classes
      root.classList.remove('light', 'dark');

      if (themeToApply === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
        root.classList.add(systemTheme);
      } else {
        root.classList.add(themeToApply);
      }
    };

    // Apply theme immediately
    applyTheme(theme);

    // Listen for system theme changes when in system mode
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme('system');

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    return undefined;
  }, [theme]);

  return <>{children}</>;
}
