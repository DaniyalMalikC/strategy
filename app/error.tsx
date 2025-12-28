'use client';

import { useEffect } from 'react';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4">
      <div className="text-center">
        <Icon
          icon="ph:x-circle-bold"
          size={80}
          className="mx-auto mb-6 text-red-600"
        />
        <h1 className="mb-2 text-4xl font-bold text-red-600">Oops!</h1>
        <h2 className="mb-4 text-2xl font-semibold">Something went wrong</h2>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          We apologize for the inconvenience. Please try again.
        </p>
        <Button variant="primary" size="lg" onClick={reset}>
          <Icon icon="ph:arrow-clockwise-bold" size={20} className="mr-2" />
          Try Again
        </Button>
      </div>
    </div>
  );
}
