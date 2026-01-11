'use client';

import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { Logo } from '@/components/atoms/Logo';
import { ROUTES } from '@/constants';
import { useIsScrolled } from '@/hooks/useScrollPosition';
import { useThemeStore } from '@/stores/themeStore';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Product', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Career', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'About', href: ROUTES.ABOUT },
];

export function Header() {
  const isScrolled = useIsScrolled();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header
      className={cn(
        'fixed z-50 w-full transition-all duration-500',
        isScrolled ? 'top-2' : 'top-0',
      )}
    >
      <div
        className={cn(
          'mx-auto transition-all duration-500',
          isScrolled
            ? 'max-w-7xl rounded-2xl bg-[color-mix(in_srgb,var(--brand-primary)_95%,transparent)] backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12),0_2px_10px_rgb(0,0,0,0.08),inset_0_1px_0_rgb(255,255,255,0.1)] animate-in slide-in-from-top-2 bounce-in mx-3 sm:mx-4 lg:mx-auto dark:bg-[#1a1816]/95 dark:shadow-[0_8px_30px_rgb(0,0,0,0.4),0_2px_10px_rgb(0,0,0,0.3),inset_0_1px_0_rgb(255,255,255,0.05)]'
            : 'w-full bg-[var(--brand-primary)] dark:bg-[#1a1816]',
        )}
      >
        <nav className="container mx-auto flex items-center justify-between px-6 py-3 md:px-8 md:py-4">
        {/* Logo */}
        <Link href={ROUTES.HOME} className="flex items-center gap-2 group">
          <Logo size="sm" />
        </Link>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden items-center gap-6 lg:gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] font-normal text-gray-900 transition-colors hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          <Button className="hidden rounded-full bg-black px-5 py-2 text-[14px] font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 md:inline-flex items-center gap-1.5 shadow-none">
            Login <Icon icon="ph:arrow-up-right-bold" size={14} />
          </Button>

          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 md:h-10 md:w-10"
            aria-label="Toggle theme"
          >
            <Icon
              icon={theme === 'dark' ? 'ph:sun-bold' : 'ph:moon-bold'}
              size={18}
              className="text-gray-700 dark:text-gray-300"
            />
          </button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-2 rounded-full border border-[var(--color-secondary)] bg-white px-4 py-2 text-[14px] font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:border-[var(--color-secondary)] dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 md:hidden"
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span>Menu</span>
            <Icon icon={isMobileMenuOpen ? 'ph:x-bold' : 'ph:equals-bold'} size={18} className="text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-[var(--color-secondary)] bg-[var(--brand-primary)] dark:border-[var(--color-secondary)] dark:bg-[#1a1816] md:hidden">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 text-[15px] font-normal text-gray-900 transition-colors hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
                >
                  {link.label}
                </Link>
              ))}
              <Button className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-black px-5 py-2 text-[14px] font-medium text-white shadow-none hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Login <Icon icon="ph:arrow-up-right-bold" size={14} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
