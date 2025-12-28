import { cn } from '@/utils/cn';
import { Icon as IconifyIcon } from '@iconify/react';

interface IconProps {
  icon: string;
  className?: string;
  size?: number;
}

export function Icon({ icon, className, size = 24 }: IconProps) {
  return (
    <IconifyIcon icon={icon} className={cn('inline-block', className)} width={size} height={size} />
  );
}
