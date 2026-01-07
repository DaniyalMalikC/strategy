'use client';

import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { FloatingCard } from '@/components/molecules/FloatingCard';
import { heroAvatars, heroContent } from '@/constants/hero';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
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

        {/* Hero Image Section */}
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

          {/* Color Wash and soft left focus */}

          {/* Top Left Tag */}
          <div
            className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/55 px-2 py-1.5 shadow-sm backdrop-blur-lg md:left-8 md:top-8"
          >
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
          <div className="absolute bottom-4 left-1/3 w-full max-w-6xl  px-2 sm:px-4 md:bottom-8 md:px-6 lg:bottom-10 fade-left">
            <div className="relative overflow-hidden">

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
      </div>
    </section>
  );
}
