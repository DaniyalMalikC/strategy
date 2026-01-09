'use client';

import { Icon } from '@/components/atoms/Icon';
import { TeamMemberCard } from '@/components/molecules/TeamMemberCard';
import { teamContent, teamMembers, teamTabs } from '@/constants/teams';
import { cn } from '@/utils/cn';
import { useEffect, useState } from 'react';

export function Teams() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(teamTabs[0].id);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  // Define card background colors
  const cardBackgrounds = ['bg-white', 'bg-[#f0ebe6]', 'bg-gray-300'];

  return (
    <>
      <section className="relative w-full overflow-hidden py-16 md:py-24 lg:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 ">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 md:px-6">
          {/* Heading */}
          <div className="mb-12 text-center" data-aos="fade-up" data-aos-duration="800">
            <h2 className="text-4xl font-normal leading-tight text-white md:text-5xl lg:text-6xl">
              {teamContent.heading}
            </h2>
          </div>

          {/* Main Content Card with Frosted Glass */}
          <div className="mx-auto ">
            <div
              className="overflow-hidden rounded-[2.25rem] bg-white/10 shadow-2xl backdrop-blur-lg md:rounded-[2.5rem]"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              {/* Close Button (Top Left) */}
              <div className="absolute left-6 top-6 md:left-8 md:top-8">
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                  aria-label="Close"
                >
                  <Icon icon="ph:x-bold" size={18} />
                </button>
              </div>

              {/* Expand Button (Top Right) */}
              <div className="absolute right-6 top-6 md:right-8 md:top-8">
                <button
                  type="button"
                  onClick={handleCardClick}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                  aria-label="Expand to fullscreen"
                >
                  <Icon icon="ph:arrows-out-simple-bold" size={18} />
                </button>
              </div>

              <div className="relative p-6 md:p-10 lg:p-12">
                {/* Tabs */}
                <div className="mb-8 flex flex-wrap justify-center gap-3" data-aos="fade-up" data-aos-duration="800">
                  {teamTabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        'rounded-full px-6 py-2.5 text-sm font-normal transition-all duration-300',
                        activeTab === tab.id
                          ? 'bg-white text-gray-900 shadow-lg'
                          : 'border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20',
                      )}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Content Grid: 3 Cards Left, Info Right */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
                  {/* Left Side - 3 Team Member Cards */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-1 lg:grid-cols-3">
                    {teamMembers.map((member, index) => (
                      <TeamMemberCard
                        key={member.name}
                        name={member.name}
                        location={member.location}
                        role={member.role}
                        image={member.image}
                        delay={index * 100}
                        className={cardBackgrounds[index % 3]}
                      />
                    ))}
                  </div>

                  {/* Right Side - Information Card (Larger, Less Background) */}
                  <div
                    className='col-span-1'
                    // className="flex flex-col justify-between rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur-sm lg:col-span-1"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="800"
                  >
                    {/* Top Tag */}
                    <div className="mb-8">
                      <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-normal text-white backdrop-blur-sm">
                        {teamContent.topTeamTag}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mb-8 flex-1">
                      <h3 className="mb-6 text-2xl font-normal leading-tight text-white md:text-3xl">
                        {teamContent.contentCard.title}
                      </h3>
                      <p className="text-base leading-relaxed text-gray-200">{teamContent.contentCard.description}</p>
                    </div>

                    {/* CTA */}
                    <div>
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 text-base font-normal text-white transition-colors hover:text-gray-300"
                        aria-label={teamContent.contentCard.cta}
                      >
                        {teamContent.contentCard.cta}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal - Expanded View */}
      {isModalOpen && (
        <dialog
          open
          className="fixed inset-0 z-50 overflow-y-auto"
          onClick={handleModalBackdropClick}
          onKeyDown={(e: React.KeyboardEvent<HTMLDialogElement>) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleModalBackdropClick(e as unknown as React.MouseEvent<HTMLDialogElement>);
            }
          }}
          aria-labelledby="modal-title"
        >
          {/* Full Background Image */}
          <div className="fixed inset-0 -z-10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop')`,
              }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Close Button (Top Left - Fixed) */}
          <div className="fixed left-6 top-6 z-20 md:left-8 md:top-8">
            <button
              type="button"
              onClick={handleCloseModal}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              aria-label="Close modal"
            >
              <Icon icon="ph:x-bold" size={18} />
            </button>
          </div>

          {/* Expand Button (Top Right - Fixed) */}
          <div className="fixed right-6 top-6 z-20 md:right-8 md:top-8">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              aria-label="Collapse view"
            >
              <Icon icon="ph:arrows-in-simple-bold" size={18} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="container mx-auto min-h-screen px-4 py-24 md:px-6 md:py-28">
            {/* Frosted Glass Content Card */}
            <div className="mx-auto w-full max-w-7xl">
              <div className="overflow-hidden rounded-[2.25rem] bg-white/10 shadow-2xl backdrop-blur-lg md:rounded-[2.5rem]">
                <div className="p-6 md:p-10 lg:p-12">
                  {/* Tabs */}
                  <div className="mb-8 flex flex-wrap justify-center gap-3">
                    {teamTabs.map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                          'rounded-full px-6 py-2.5 text-sm font-normal transition-all duration-300',
                          activeTab === tab.id
                            ? 'bg-white text-gray-900 shadow-lg'
                            : 'border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20',
                        )}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Expanded Grid - All Team Members */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {/* Show multiple copies or extended team list */}
                    {[...teamMembers, ...teamMembers, ...teamMembers].map((member, index) => (
                      <TeamMemberCard
                        key={`${member.name}-${index}`}
                        name={member.name}
                        location={member.location}
                        role={member.role}
                        image={member.image}
                        delay={0}
                        className={cardBackgrounds[index % 3]}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
