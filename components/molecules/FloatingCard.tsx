import { Avatar } from '@/components/atoms/Avatar';
import { cn } from '@/utils/cn';
import { motion, useReducedMotion } from 'framer-motion';

interface FloatingCardProps {
  src: string;
  name: string;
  role: string;
  className?: string;
  delay?: number;
}

export function FloatingCard({ src, name, role, className, delay = 0 }: FloatingCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const animationProps = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0, y: 20, scale: 0.9 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: {
          duration: 0.5,
          delay,
          type: 'spring',
          stiffness: 100,
          damping: 15,
        },
      };

  return (
    <motion.div
      {...animationProps}
      whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
      className={cn(
        'flex items-center gap-3 rounded-full bg-white/95 p-2 pr-5 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl',
        className,
      )}
    >
      <Avatar src={src} alt={name} size="md" />
      <div className="flex flex-col">
        <span className="text-sm font-bold text-gray-900 leading-tight">{name}</span>
        <span className="text-xs text-gray-500 leading-tight">{role}</span>
      </div>
    </motion.div>
  );
}
