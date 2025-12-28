'use client';

import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { FloatingCard } from '@/components/molecules/FloatingCard';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

const AVATARS = [
  {
    name: 'Floyd Miles',
    role: 'SEO Specialist',
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces',
  },
  {
    name: 'Brooklyn Simmons',
    role: 'Barone LLC.',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
  },
  {
    name: 'Eleanor Pena',
    role: 'Marketing Coordinator',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
  },
  {
    name: 'Savannah Nguyen',
    role: 'Medical Assistant',
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces',
  },
  {
    name: 'Kristin Watson',
    role: 'Acme Co.',
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces',
  },
  {
    name: 'Ronald Richards',
    role: 'Abstergo Ltd.',
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces',
  },
  {
    name: 'Esther Howard',
    role: 'President of Sales',
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces',
  },
  {
    name: 'Courtney Henry',
    role: 'Biffco Enterprises Ltd.',
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces',
  },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const getAnimationProps = (delay = 0) => {
    if (shouldReduceMotion) {
      return { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0 } };
    }
    return {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay, ease: 'easeOut' },
    };
  };

  return (
    <section className="relative w-full overflow-hidden bg-white pb-20 pt-10 md:pt-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Content */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            {...getAnimationProps(0)}
            className="font-heading text-5xl font-medium tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1]"
          >
            Where Marketing Careers <br className="hidden md:block" /> are Build.
          </motion.h1>

          <motion.p
            {...getAnimationProps(0.15)}
            className="mx-auto mt-6 max-w-2xl text-base text-gray-600 md:text-lg"
          >
            We bring ideas to life by combining years of experiences of our very talented team.
          </motion.p>

          <motion.div
            {...getAnimationProps(0.3)}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button className="h-12 rounded-full bg-black px-8 text-base font-medium text-white hover:bg-gray-800">
              Build career <Icon icon="ph:arrow-up-right-bold" className="ml-2" />
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-full border-gray-200 px-8 text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              Contact us <Icon icon="ph:arrow-up-right-bold" className="ml-2" />
            </Button>
          </motion.div>
        </div>

        {/* Hero Image Section */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }
          }
          className="relative mt-16 h-[500px] w-full overflow-hidden rounded-[2rem] bg-gray-100 md:h-[600px] md:rounded-[2.5rem]"
        >
          {/* Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Team working together"
            fill
            className="object-cover opacity-90"
            priority
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Top Left Tag */}
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 p-1.5 pr-4 shadow-sm backdrop-blur-sm md:left-8 md:top-8">
            <Badge variant="default" className="bg-white text-[10px] font-bold tracking-widest">
              EVENT
            </Badge>
            <span className="text-xs font-medium text-gray-900 md:text-sm">Building career</span>
            <Icon icon="ph:caret-right-bold" className="text-gray-400" size={14} />
          </div>

          {/* Top Right Button */}
          <div className="absolute right-4 top-4 md:right-8 md:top-8">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full bg-white/30 px-4 py-2 text-xs font-medium text-white shadow-sm backdrop-blur-md transition-all hover:bg-white/40 md:px-6 md:py-3 md:text-sm"
            >
              Match yours <Icon icon="ph:arrow-down-right-bold" size={14} />
            </button>
          </div>

          {/* Floating Cards Grid */}
          <div className="absolute bottom-24 right-4 hidden max-w-[650px] md:right-8 lg:block">
            <div className="grid grid-cols-4 gap-3">
              {/* Row 1 */}
              <FloatingCard
                {...AVATARS[0]}
                delay={shouldReduceMotion ? 0 : 0.7}
                className="col-start-1"
              />
              <FloatingCard
                {...AVATARS[1]}
                delay={shouldReduceMotion ? 0 : 0.75}
                className="col-start-2 -translate-y-4"
              />
              <FloatingCard
                {...AVATARS[2]}
                delay={shouldReduceMotion ? 0 : 0.8}
                className="col-start-3"
              />
              <FloatingCard
                {...AVATARS[3]}
                delay={shouldReduceMotion ? 0 : 0.85}
                className="col-start-4 -translate-y-3"
              />

              {/* Row 2 */}
              <FloatingCard
                {...AVATARS[4]}
                delay={shouldReduceMotion ? 0 : 0.9}
                className="col-start-1 translate-y-2"
              />
              <FloatingCard
                {...AVATARS[5]}
                delay={shouldReduceMotion ? 0 : 0.95}
                className="col-start-2"
              />
              <FloatingCard
                {...AVATARS[6]}
                delay={shouldReduceMotion ? 0 : 1.0}
                className="col-start-3 translate-y-3"
              />
              <FloatingCard
                {...AVATARS[7]}
                delay={shouldReduceMotion ? 0 : 1.05}
                className="col-start-4"
              />
            </div>
          </div>

          {/* Bottom Left Content */}
          <div className="absolute bottom-6 left-4 max-w-sm text-white md:bottom-8 md:left-8 md:max-w-md">
            <div className="mb-3 inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wide backdrop-blur-sm md:px-4 md:py-1.5 md:text-xs">
              Job Opportunities
            </div>
            <h2 className="mb-2 text-2xl font-medium leading-tight text-white md:mb-3 md:text-3xl lg:text-4xl">
              Efficiently transform your <br /> candidate experience.
            </h2>
            <p className="text-xs leading-relaxed text-white/75 md:text-sm">
              ModernLoop is the Hiring Experience Platform that automates interview scheduling to
              perfection, so you stay focused on the talent.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
