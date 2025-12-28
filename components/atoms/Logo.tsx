import { cn } from '@/utils/cn';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className, variant = 'full', size = 'md' }: LogoProps) {
  const sizes = {
    sm: { width: 120, height: 32, iconSize: 32 },
    md: { width: 160, height: 40, iconSize: 40 },
    lg: { width: 200, height: 50, iconSize: 50 },
  };

  const { iconSize } = sizes[size];

  if (variant === 'icon') {
    return (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('', className)}
      >
        <title>Amplixa logo icon</title>
        <path
          d="M20 2L35 12V28L20 38L5 28V12L20 2Z"
          fill="var(--brand-primary)"
          stroke="var(--brand-secondary)"
          strokeWidth="2"
        />
        <path d="M20 10L28 15V25L20 30L12 25V15L20 10Z" fill="var(--brand-secondary)" />
        <text
          x="20"
          y="24"
          fontSize="14"
          fontWeight="bold"
          fill="white"
          textAnchor="middle"
          fontFamily="var(--font-bebas)"
        >
          A
        </text>
      </svg>
    );
  }

  if (variant === 'text') {
    return (
      <span
        className={cn('font-logo text-3xl font-normal tracking-wider', className)}
        style={{ color: 'var(--brand-primary)' }}
      >
        AMPLIXA
      </span>
    );
  }

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Amplixa logo icon</title>
        <path
          d="M20 2L35 12V28L20 38L5 28V12L20 2Z"
          fill="var(--brand-primary)"
          stroke="var(--brand-secondary)"
          strokeWidth="2"
        />
        <path d="M20 10L28 15V25L20 30L12 25V15L20 10Z" fill="var(--brand-secondary)" />
        <text
          x="20"
          y="24"
          fontSize="14"
          fontWeight="bold"
          fill="white"
          textAnchor="middle"
          fontFamily="var(--font-bebas)"
        >
          A
        </text>
      </svg>
      <span
        className="font-logo text-2xl font-normal tracking-wider"
        style={{ color: 'var(--brand-primary)' }}
      >
        AMPLIXA
      </span>
    </div>
  );
}
