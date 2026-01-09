import { Icon } from '@/components/atoms/Icon';
import { Logo } from '@/components/atoms/Logo';
import { ROUTES } from '@/constants/app';
import { BRAND, CONTACT, LABELS, SOCIAL } from '@/constants/copy';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-[#f6f3ef] dark:border-gray-700 dark:bg-[#1a1816]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Logo size="md" className="mb-4" />
            <p className="mb-4 max-w-md font-body text-sm text-gray-700 dark:text-gray-300">
              {BRAND.shortDescription}
            </p>
            <p className="font-body text-sm font-semibold text-[var(--brand-primary)]">
              {BRAND.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
              {LABELS.footer.company}
            </h3>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <Link
                  href={ROUTES.ABOUT}
                  className="text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  {LABELS.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.SERVICES}
                  className="text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  {LABELS.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.PORTFOLIO}
                  className="text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  {LABELS.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.CONTACT}
                  className="text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  {LABELS.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
              {LABELS.footer.contact}
            </h3>
            <ul className="space-y-2 font-body text-sm text-gray-700 dark:text-gray-300">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-[var(--brand-primary)]"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                  className="transition-colors hover:text-[var(--brand-primary)]"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="pt-2">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {CONTACT.hours}
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-700">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-body text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} {BRAND.name}. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={SOCIAL.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                aria-label={`Follow us on Twitter ${SOCIAL.handles.twitter}`}
              >
                <Icon icon="mdi:twitter" size={24} />
              </a>
              <a
                href={SOCIAL.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                aria-label="Follow us on LinkedIn"
              >
                <Icon icon="mdi:linkedin" size={24} />
              </a>
              <a
                href={SOCIAL.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                aria-label="Follow us on GitHub"
              >
                <Icon icon="mdi:github" size={24} />
              </a>
              <a
                href={SOCIAL.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                aria-label="Follow us on Instagram"
              >
                <Icon icon="mdi:instagram" size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
