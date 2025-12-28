import { Spinner } from '@/components/atoms/Spinner';
import { cn } from '@/utils/cn';

interface LoadingProps {
  fullScreen?: boolean;
  message?: string;
  className?: string;
}

export function Loading({ fullScreen = true, message, className }: LoadingProps) {
  const containerClass = fullScreen
    ? 'fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-950'
    : 'flex items-center justify-center p-8';

  return (
    <div className={cn(containerClass, className)}>
      <div className="flex flex-col items-center gap-4">
        <Spinner size="lg" />
        {message && <p className="text-sm text-gray-600 dark:text-gray-400">{message}</p>}
      </div>
    </div>
  );
}
