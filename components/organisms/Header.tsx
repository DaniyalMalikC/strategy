'use client';

import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { Logo } from '@/components/atoms/Logo';
import { ROUTES } from '@/constants';
import { useIsScrolled } from '@/hooks/useScrollPosition';
import { cn } from '@/utils/cn';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Product', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Career', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'About', href: ROUTES.ABOUT },
];

export function Header() {
  const isScrolled = useIsScrolled();

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4',
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href={ROUTES.HOME} className="flex items-center gap-2 group">
          <Logo size="sm" />
          <span className="font-heading text-xl font-bold tracking-tight transition-colors group-hover:text-gray-600">
            Lattice
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button className="hidden rounded-full bg-black px-6 py-2 text-sm font-medium text-white hover:bg-gray-800 md:inline-flex items-center gap-1">
            Login <Icon icon="ph:arrow-up-right-bold" size={14} />
          </Button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition-colors hover:bg-gray-50"
          >
            <Icon icon="ph:magnifying-glass-bold" size={18} />
          </button>

          <Button
            variant="outline"
            className="hidden rounded-full border-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 md:inline-flex items-center gap-2"
          >
            Menu <Icon icon="ph:list-bold" size={16} />
          </Button>

          {/* Mobile Menu Toggle (visible only on mobile) */}
          <button type="button" className="md:hidden p-2">
            <Icon icon="ph:list-bold" size={24} />
          </button>
        </div>
      </nav>
    </header>
  );
}
