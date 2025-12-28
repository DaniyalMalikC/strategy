'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/molecules/ThemeToggle';
import { Icon } from '@/components/atoms/Icon';
import { ROUTES } from '@/constants/app';
import { useIsScrolled } from '@/hooks/useScrollPosition';
import { cn } from '@/utils/cn';

export function Header() {
  const isScrolled = useIsScrolled();

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-md transition-shadow dark:bg-gray-950/80',
        isScrolled && 'shadow-sm',
      )}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href={ROUTES.HOME} className="flex items-center gap-2">
          <Icon icon="ph:strategy-bold" size={32} className="text-primary-600" />
          <span className="text-xl font-bold">Strategy</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href={ROUTES.DEMO}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
          >
            Demo
          </Link>
          <Link
            href={ROUTES.ABOUT}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
          >
            About
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
