export type HeroAvatar = {
  name: string;
  role: string;
  src: string;
};

export const heroContent = {
  heading: 'Where Marketing Careers are Build.',
  subheading: 'We bring ideas to life by combining years of experiences of our very talented team.',
  primaryCta: { label: 'Build career', icon: 'ph:arrow-up-right-bold' },
  secondaryCta: { label: 'Contact us', icon: 'ph:arrow-up-right-bold' },
  heroImage: {
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2070&auto=format&fit=crop',
    alt: 'Professional woman in business setting',
  },
  topTag: { badge: 'EVENT', label: 'Building career' },
  topAction: { label: 'Match yours', icon: 'ph:arrow-down-right-bold', ariaLabel: 'Match yours' },
  bottomContent: {
    kicker: 'Job Opportunities',
    headline: 'Efficiently transform your\n candidate experience.',
    description:
      'ModernLoop is the Hiring Experience Platform that automates interview scheduling to perfection, so you stay focused on the talent.',
  },
};

export const heroAvatars: HeroAvatar[] = [
  {
    name: 'Floyd Miles',
    role: 'SEO Specialist',
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces',
  },
  {
    name: 'Brooklyn Simmons',
    role: 'Barone LLC.',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
  },
  {
    name: 'Eleanor Pena',
    role: 'Marketing Coordinator',
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces',
  },
  {
    name: 'Savannah Nguyen',
    role: 'Medical Assistant',
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces',
  },
  {
    name: 'Kristin Watson',
    role: 'Acme Co.',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
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
