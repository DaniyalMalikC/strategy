'use client';

import { cn } from '@/utils/cn';

interface TeamContentProps {
  title: string;
  description: string;
  cta: string;
  className?: string;
  delay?: number;
}

export function TeamContent({ title, description, cta, className, delay = 0 }: TeamContentProps) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="800"
      className={cn(
        'group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 transition-all duration-500 hover:shadow-xl md:p-10 lg:p-12',
        className,
      )}
    >
      {/* Top Tag */}
      <div className="mb-8">
        <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-normal text-white backdrop-blur-sm">
          Top team together
        </span>
      </div>

      {/* Content */}
      <div className="mb-8 flex-1">
        <h3 className="mb-6 text-2xl font-normal leading-tight text-white md:text-3xl lg:text-4xl">{title}</h3>
        <p className="text-base leading-relaxed text-gray-300 md:text-lg">{description}</p>
      </div>

      {/* CTA */}
      <div>
        <button
          type="button"
          className="inline-flex items-center gap-2 text-base font-normal text-white transition-colors hover:text-gray-300"
          aria-label={cta}
        >
          {cta}
        </button>
      </div>
    </div>
  );
}
