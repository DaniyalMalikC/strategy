'use client';

import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { Logo } from '@/components/atoms/Logo';
import { ROUTES } from '@/constants';
import { useIsScrolled } from '@/hooks/useScrollPosition';
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

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-[#f6f3ef]/95 backdrop-blur-md' : 'bg-[#f6f3ef]',
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
              className="text-[15px] font-normal text-gray-900 transition-colors hover:text-gray-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          <Button className="hidden rounded-full bg-black px-5 py-2 text-[14px] font-medium text-white hover:bg-gray-800 md:inline-flex items-center gap-1.5 shadow-none">
            Login <Icon icon="ph:arrow-up-right-bold" size={14} />
          </Button>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-gray-100 md:h-10 md:w-10"
            aria-label="Search"
          >
            <Icon icon="ph:magnifying-glass-bold" size={18} className="text-gray-700" />
          </button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-[14px] font-medium text-gray-900 transition-colors hover:bg-gray-50 md:hidden"
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span>Menu</span>
            <Icon icon={isMobileMenuOpen ? 'ph:x-bold' : 'ph:equals-bold'} size={18} className="text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-[#f6f3ef]">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[15px] font-normal text-gray-900 transition-colors hover:text-gray-600 py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Button className="rounded-full bg-black px-5 py-2 text-[14px] font-medium text-white hover:bg-gray-800 inline-flex items-center justify-center gap-1.5 shadow-none mt-2">
                Login <Icon icon="ph:arrow-up-right-bold" size={14} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
