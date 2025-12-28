'use client';

import { ThemeProvider } from './ThemeProvider';
import { AnimationProvider } from './AnimationProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <AnimationProvider>{children}</AnimationProvider>
    </ThemeProvider>
  );
}

export { ThemeProvider, AnimationProvider };
