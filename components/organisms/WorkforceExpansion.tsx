'use client';

import { Icon } from '@/components/atoms/Icon';
import { cn } from '@/utils/cn';
import Image from 'next/image';

interface EmployeeCardProps {
  avatars: string[];
  title: string;
  label: string;
  buttonText: string;
  className?: string;
  delay?: number;
}

function EmployeeCard({ avatars, title, label, buttonText, className, delay = 0 }: EmployeeCardProps) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="800"
      className={cn(
        'group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#f0ebe6] p-6 transition-all duration-500 hover:shadow-xl',
        className,
      )}
    >
      <div className="mb-8">
        <span className="inline-block rounded-full border border-gray-900 bg-white px-4 py-1.5 text-sm font-normal text-gray-900">
          {label}
        </span>
      </div>

      <div className="mb-6 flex items-center gap-1">
        {avatars.map((avatar, index) => (
          <div
            key={avatar}
            className={cn(
              'relative h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-gray-200',
              index > 0 && '-ml-3',
            )}
            style={{ zIndex: avatars.length - index }}
          >
            <Image
              src={avatar}
              alt={`Employee ${index + 1}`}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
        ))}
      </div>

      <div className="flex items-end justify-between">
        <h3 className="max-w-[70%] text-xl font-normal leading-tight text-gray-900 md:text-2xl">{title}</h3>
        <button
          type="button"
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-gray-900 bg-white text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white"
          aria-label={buttonText}
        >
          <Icon icon="ph:arrow-up-right-bold" size={18} />
        </button>
      </div>
    </div>
  );
}

interface ContractorCardProps {
  image: string;
  title: string;
  label: string;
  buttonText: string;
  className?: string;
  delay?: number;
}

function ContractorCard({ image, title, label, buttonText, className, delay = 0 }: ContractorCardProps) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="800"
      className={cn(
        'group relative flex flex-col justify-between overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-xl',
        className,
      )}
    >
      <div className="relative h-full w-full min-h-[280px]">
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 400px" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
      </div>

      <div className="absolute top-0 left-0 right-0 p-6">
        <span className="inline-block rounded-full border border-white bg-white/10 px-4 py-1.5 text-sm font-normal text-white backdrop-blur-sm">
          {label}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-end justify-between">
          <h3 className="max-w-[70%] text-xl font-normal leading-tight text-white md:text-2xl">{title}</h3>
          <button
            type="button"
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-gray-900"
            aria-label={buttonText}
          >
            <Icon icon="ph:arrow-up-right-bold" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

interface ProfileCardProps {
  image: string;
  name: string;
  title: string;
  location: string;
  tag: string;
  buttonText: string;
  variant?: 'light' | 'dark';
  className?: string;
  delay?: number;
}

function ProfileCard({
  image,
  name,
  title,
  location,
  tag,
  buttonText,
  variant = 'light',
  className,
  delay = 0,
}: ProfileCardProps) {
  const isLight = variant === 'light';

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="800"
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-xl',
        isLight ? 'bg-gray-300' : '',
        className,
      )}
    >
      {/* For light variant - structured layout */}
      {isLight ? (
        <>
          <div className="flex items-start justify-between p-6">
            <div className="relative h-48 w-36 overflow-hidden rounded-2xl">
              <Image src={image} alt={name} fill className="object-cover object-top" sizes="144px" />
            </div>
            <button
              type="button"
              className="rounded-full bg-white px-4 py-1.5 text-sm font-normal text-gray-900 transition-all duration-300 hover:bg-gray-100 flex items-center gap-1.5"
              aria-label={tag}
            >
              {tag}
              <Icon icon="ph:arrow-up-right-bold" size={14} />
            </button>
          </div>

          <div className="px-6 pb-6">
            <div className="mb-3">
              <h3 className="text-xl font-normal text-gray-900 md:text-2xl">{name}</h3>
              <p className="mt-1 text-sm text-gray-600">
                {title}, {location}
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm font-normal text-gray-900 transition-colors hover:text-gray-600"
              aria-label={buttonText}
            >
              {buttonText}
            </button>
          </div>
        </>
      ) : (
        <>
          {/* For dark variant - full background image */}
          <div className="relative h-full min-h-[400px] w-full">
            <Image src={image} alt={name} fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 400px" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
          </div>

          <div className="absolute top-6 right-6">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-normal text-white backdrop-blur-sm">
              {tag}
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="mb-3">
              <h3 className="text-xl font-normal text-white md:text-2xl">{name}</h3>
              <p className="mt-1 text-sm text-gray-200">
                {title}, {location}
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm font-normal text-white transition-colors hover:text-gray-300"
              aria-label={buttonText}
            >
              {buttonText}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export function WorkforceExpansion() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* First Column */}
          <div className="flex flex-col gap-6">
            {/* Title and Subtitle - First Row */}
            <div data-aos="fade-up" data-aos-duration="800">
              <h2 className="mb-4 text-4xl font-normal leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                Quickly Expand your
                <br />
                Workforce.
              </h2>
              <p className="text-base text-gray-600 md:text-lg">
                Take advantage of our global employment products to hire who you want, wherever you want - starting in
                just minutes
              </p>
            </div>

            {/* Employee and Force Cards - Second Row */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Employee Card */}
              <EmployeeCard
                avatars={[
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
                ]}
                title="Hire an Employees"
                label="Employees"
                buttonText="Learn more about hiring employees"
                delay={0}
              />

              {/* Contractor Card */}
              <ContractorCard
                image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
                title="Hire a Contractor"
                label="Force"
                buttonText="Learn more about hiring contractors"
                delay={100}
              />
            </div>
          </div>

          {/* Second Column - Profile Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {/* Profile Card 1 - Meeting */}
            <ProfileCard
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=600&fit=crop"
              name="Savannah Nguyen"
              title="CEO, Los Angeles"
              location="USA"
              tag="Meeting"
              buttonText="Read More."
              variant="light"
              delay={200}
            />

            {/* Profile Card 2 - HR Manager */}
            <ProfileCard
              image="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=600&fit=crop"
              name="Courtney Henry"
              title="SM, London"
              location="Great Britain"
              tag="HR & manager"
              buttonText="Read More."
              variant="dark"
              delay={300}
            />
          </div>
        </div>

        {/* Bottom Logos */}
        <div
          className="mt-16 md:mt-20 lg:mt-24"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="800"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {['Assembled', 'Thumbtack', 'Lattice', 'Benchling'].map((company) => (
              <div
                key={company}
                className="flex items-center gap-2 text-xl font-normal text-gray-900 md:text-2xl"
              >
                <Icon icon="ph:square-logo-bold" size={24} className="text-gray-900" />
                <span>{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
