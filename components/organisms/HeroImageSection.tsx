'use client';

import { Badge } from '@/components/atoms/Badge';
import { Icon } from '@/components/atoms/Icon';
import { HeroFloatingMarquee } from '@/components/organisms/HeroFloatingMarquee';
import type {HeroAvatar} from '@/constants/hero'
import { heroContent } from '@/constants/hero';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeroImageSectionProps {
  shouldReduceMotion: boolean;
  marqueeClass: string;
  firstRow: HeroAvatar[];
  secondRow: HeroAvatar[];
}

export function HeroImageSection({ shouldReduceMotion, marqueeClass, firstRow, secondRow }: HeroImageSectionProps) {
  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }
      }
      className="relative mt-14 h-[520px] w-full overflow-hidden rounded-[2.25rem] bg-[#c7bcb0] md:mt-16 md:h-[640px] md:rounded-[2.5rem]"
    >
      {/* Background Image */}
      <Image
        src={heroContent.heroImage.src}
        alt={heroContent.heroImage.alt}
        fill
        className="object-cover object-center brightness-[0.98] saturate-[0.92]"
        priority
      />

      {/* Top Left Tag */}
      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/55 px-2 py-1.5 shadow-sm backdrop-blur-lg md:left-8 md:top-8">
        <Badge variant="default" className="bg-white text-[10px] font-bold tracking-widest uppercase">
          {heroContent.topTag.badge}
        </Badge>
        <span className="text-xs font-medium text-gray-900 md:text-sm">{heroContent.topTag.label}</span>
        <Icon icon="ph:caret-right-bold" className="text-gray-400" size={14} />
      </div>

      {/* Top Right Button */}
      <div className="absolute right-4 top-4 md:right-8 md:top-8">
        <button
          type="button"
          aria-label={heroContent.topAction.ariaLabel}
          className="flex items-center gap-2 rounded-full border border-white/30 bg-white/35 px-4 py-2 text-xs font-semibold text-white text-shadow-sm shadow-sm backdrop-blur-lg transition-all hover:bg-white/45 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-transparent md:px-6 md:py-3 md:text-sm"
        >
          {heroContent.topAction.label} <Icon icon={heroContent.topAction.icon} size={20} />
        </button>
      </div>

      {/* Floating Cards Marquee */}
      <div className="absolute bottom-4 left-1/3 w-full max-w-6xl px-2 sm:px-4 md:bottom-8 md:px-6 lg:bottom-10 fade-left">
        <div className="relative overflow-hidden">
          <HeroFloatingMarquee
            firstRow={firstRow}
            secondRow={secondRow}
            marqueeClass={marqueeClass}
            shouldReduceMotion={shouldReduceMotion}
          />
        </div>
      </div>

      {/* Bottom Left Content */}
      <div className="absolute bottom-6 left-4 max-w-sm text-white md:bottom-8 md:left-8 md:max-w-md">
        <div className="mb-3 inline-flex rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[10px] font-medium uppercase tracking-wide backdrop-blur-sm md:px-4 md:py-1.5 md:text-xs">
          {heroContent.bottomContent.kicker}
        </div>
        <h2 className="mb-2 text-2xl font-medium leading-tight text-white md:mb-3 md:text-3xl lg:text-4xl">
          {heroContent.bottomContent.headline.split('\n').map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="text-xs leading-relaxed text-white/80 md:text-sm">
          {heroContent.bottomContent.description}
        </p>
      </div>
    </motion.div>
  );
}
