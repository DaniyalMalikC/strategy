import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { ROUTES } from '@/constants/app';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4">
      <div className="text-center">
        <Icon
          icon="ph:warning-circle-bold"
          size={80}
          className="mx-auto mb-6 text-primary-600"
        />
        <h1 className="mb-2 text-6xl font-bold">404</h1>
        <h2 className="mb-4 text-2xl font-semibold">Page Not Found</h2>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href={ROUTES.HOME}>
          <Button variant="primary" size="lg">
            <Icon icon="ph:house-bold" size={20} className="mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
