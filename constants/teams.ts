export type TeamMember = {
  name: string;
  location: string;
  role: string;
  image: string;
};

export type TeamTab = {
  id: string;
  label: string;
};

export const teamTabs: TeamTab[] = [
  { id: 'our-best-team', label: 'Our best Team' },
  { id: 'customers-support', label: 'Customers Support' },
  { id: 'strategy-group', label: 'Strategy Group' },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Savannah Nguyen',
    location: 'Central African Republic',
    role: 'Sales Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces',
  },
  {
    name: 'Esther Howard',
    location: 'Aland Islands',
    role: 'Work Assistant',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces',
  },
  {
    name: 'Darlene Robertson',
    location: 'Saint Barthelemy',
    role: 'Louis Vuitton',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces',
  },
];

export const teamContent = {
  heading: 'The help you Need, When you Need it',
  topTeamTag: 'Top team together',
  contentCard: {
    title: 'Enhancing the Entire Employee and Team Impact Cycle',
    description:
      'Lattice People Platform simplifies HR operations across the entire employee and team impact cycle, offering a comprehensive solution for modern organizations. By integrating various HR functions into one cohesive system, it enhances efficiency and reduces administrative burdens. From onboarding new hires to managing performance reviews, Lattice ensures that every stage of the employee journey is seamless and productive.',
    cta: 'Read More.',
  },
};
