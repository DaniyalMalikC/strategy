import { Icon } from '@/components/atoms/Icon';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Icon icon="ph:strategy-bold" size={24} className="text-primary-600" />
            <span className="font-semibold">Strategy</span>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Strategy. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500"
              aria-label="GitHub"
            >
              <Icon icon="mdi:github" size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500"
              aria-label="Twitter"
            >
              <Icon icon="mdi:twitter" size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
