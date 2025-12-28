'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/molecules/ThemeToggle';
import { Logo } from '@/components/atoms/Logo';
import { ROUTES, LABELS } from '@/constants';
import { useIsScrolled } from '@/hooks/useScrollPosition';
import { cn } from '@/utils/cn';

export function Header() {
  const isScrolled = useIsScrolled();

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b backdrop-blur-md transition-all',
        'bg-background/80 border-border',
        isScrolled && 'shadow-sm',
      )}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href={ROUTES.HOME} className="transition-opacity hover:opacity-80">
          <Logo size="sm" />
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href={ROUTES.ABOUT}
            className="font-heading text-sm font-medium transition-colors hover:text-[var(--brand-primary)]"
            style={{ color: 'var(--foreground)' }}
          >
            {LABELS.nav.about}
          </Link>
          <Link
            href={ROUTES.DEMO}
            className="font-heading text-sm font-medium transition-colors hover:text-[var(--brand-primary)]"
            style={{ color: 'var(--foreground)' }}
          >
            Demo
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
