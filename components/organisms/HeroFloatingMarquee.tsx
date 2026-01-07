'use client';

import { FloatingCard } from '@/components/molecules/FloatingCard';
import type { HeroAvatar } from '@/constants/hero';
import { motion } from 'framer-motion';

interface HeroFloatingMarqueeProps {
  firstRow: HeroAvatar[];
  secondRow: HeroAvatar[];
  marqueeClass: string;
  shouldReduceMotion: boolean;
}

export function HeroFloatingMarquee({
  firstRow,
  secondRow,
  marqueeClass,
  shouldReduceMotion,
}: HeroFloatingMarqueeProps) {
  return (
    <div className="flex flex-col gap-3 md:gap-4 -z-10">
      <motion.div
        className={marqueeClass}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: ['0%', '-55%'],
                transition: {
                  duration: 30,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'linear',
                },
              }
        }
      >
        {[...firstRow, ...firstRow].map((avatar, index) => (
          <FloatingCard
            key={`row1-${avatar.name}-${index}`}
            {...avatar}
            delay={shouldReduceMotion ? 0 : 0.3 + (index % firstRow.length) * 0.05}
            className="shadow-md backdrop-blur"
          />
        ))}
      </motion.div>

      <motion.div
        className={marqueeClass}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: ['-55%', '0%'],
                transition: {
                  duration: 30,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'linear',
                },
              }
        }
      >
        {[...secondRow, ...secondRow].map((avatar, index) => (
          <FloatingCard
            key={`row2-${avatar.name}-${index}`}
            {...avatar}
            delay={shouldReduceMotion ? 0 : 0.35 + (index % secondRow.length) * 0.05}
            className="shadow-md backdrop-blur"
          />
        ))}
      </motion.div>
    </div>
  );
}
