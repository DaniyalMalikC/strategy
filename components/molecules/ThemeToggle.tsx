'use client';

import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { useThemeStore } from '@/stores/themeStore';

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <Button variant="ghost" size="sm" onClick={toggleTheme} aria-label="Toggle theme">
      <Icon
        icon={theme === 'dark' ? 'ph:sun-bold' : 'ph:moon-bold'}
        size={20}
        className="text-gray-700 dark:text-gray-300"
      />
    </Button>
  );
}
