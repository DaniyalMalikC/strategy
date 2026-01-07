'use client';

import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { HeroImageSection } from '@/components/organisms/HeroImageSection';
import { heroAvatars, heroContent } from '@/constants/hero';
import { motion, useReducedMotion } from 'framer-motion';

export function Hero() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const firstRow = heroAvatars.slice(0, 4);
  const secondRow = heroAvatars.slice(4, 8);
  const marqueeClass = shouldReduceMotion
    ? 'flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5'
    : 'flex min-w-max items-center gap-3 sm:gap-4 md:gap-5';

  const getAnimationProps = (delay = 0) => {
    if (shouldReduceMotion) {
      return { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0 } };
    }
    return {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    };
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f6f3ef] pb-24 pt-12 md:pt-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Content */}
        <div className="mx-auto max-w-5xl text-center">
          <motion.h1
            {...getAnimationProps(0)}
            className="font-heading text-[2.875rem] font-medium leading-[1.05] tracking-tight text-gray-900 sm:text-6xl md:text-[4.25rem] lg:text-[5.5rem]"
          >
            {heroContent.heading}
          </motion.h1>

          <motion.p
            {...getAnimationProps(0.15)}
            className="mx-auto mt-6 max-w-3xl text-base text-gray-600 md:text-lg"
          >
            {heroContent.subheading}
          </motion.p>

          <motion.div
            {...getAnimationProps(0.3)}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button className="h-12 rounded-full bg-black px-8 text-base font-medium text-white shadow-none hover:bg-gray-800 focus:ring-gray-800">
              {heroContent.primaryCta.label}{' '}
              <Icon icon={heroContent.primaryCta.icon} className="ml-2" />
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-full border-gray-300 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              {heroContent.secondaryCta.label}{' '}
              <Icon icon={heroContent.secondaryCta.icon} className="ml-2" />
            </Button>
          </motion.div>
        </div>

        <HeroImageSection
          shouldReduceMotion={shouldReduceMotion}
          marqueeClass={marqueeClass}
          firstRow={firstRow}
          secondRow={secondRow}
        />
      </div>
    </section>
  );
}
