'use client';

import { Icon } from '@/components/atoms/Icon';
import { cn } from '@/utils/cn';
import Image from 'next/image';

interface TeamMemberCardProps {
  name: string;
  location: string;
  role: string;
  image: string;
  onClick?: () => void;
  className?: string;
  delay?: number;
}

export function TeamMemberCard({
  name,
  location,
  role,
  image,
  onClick,
  className,
  delay = 0,
}: TeamMemberCardProps) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="800"
      className={cn(
        'group relative flex h-[300px] w-full flex-col items-center justify-between rounded-3xl p-4 transition-all duration-500',
        className,
      )}
    >
      {/* Name and Location - Top (Left Aligned) */}
      <div className="mb-4 w-full text-left">
        <h3 className="text-lg font-normal text-gray-900">{name}</h3>
        <p className="mt-1 text-sm text-gray-600">{location}</p>
      </div>

      {/* Profile Image - Center (Circular) */}
      <div className="relative mb-4 h-36 w-36 flex-shrink-0 overflow-hidden rounded-full">
        <Image src={image} alt={name} fill className="object-cover object-center" sizes="128px" />
      </div>

      {/* Role and Action Button - Bottom */}
      <div className="flex w-full items-center justify-between">
        <span className="text-base font-semibold text-gray-900">{role}</span>
        <button
          type="button"
          onClick={onClick}
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-gray-900 bg-white text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white"
          aria-label={`View details for ${name}`}
        >
          <Icon icon="ph:arrow-up-right-bold" size={18} />
        </button>
      </div>
    </div>
  );
}
