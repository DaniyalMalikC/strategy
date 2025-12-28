/**
 * Amplixa Marketing Copy
 * Centralized content for consistency across the app
 */

export const BRAND = {
  name: 'Amplixa',
  tagline: 'Amplify Your Digital Presence',
  shortDescription: 'Transform your business with cutting-edge digital solutions.',
  longDescription:
    'Amplixa delivers innovative strategies, stunning designs, and powerful technology to amplify your success. We combine creativity with data-driven insights to create digital experiences that drive real business growth.',
} as const;

export const HEADINGS = {
  home: {
    hero: 'Amplify Your Digital Presence',
    subhero: 'Transform your business with cutting-edge digital solutions',
    features: 'Why Choose Amplixa',
    cta: 'Ready to Amplify Your Success?',
  },
  about: {
    main: 'About Amplixa',
    mission: 'Our Mission',
    values: 'Our Core Values',
    team: 'Meet Our Team',
    approach: 'Our Approach',
  },
  services: {
    main: 'Our Services',
    digital: 'Digital Marketing',
    development: 'Web Development',
    branding: 'Brand Strategy',
    consulting: 'Digital Consulting',
  },
  contact: {
    main: 'Get In Touch',
    form: 'Send Us a Message',
    info: 'Contact Information',
  },
} as const;

export const DESCRIPTIONS = {
  seo: {
    home: 'Transform your business with cutting-edge digital solutions. Amplixa delivers innovative strategies, stunning designs, and powerful technology to amplify your success.',
    about:
      'Learn about Amplixa - your partner in digital transformation. Discover our mission, values, and the team behind your success.',
    services:
      'Explore our comprehensive suite of digital services including marketing, development, branding, and consulting solutions tailored to your business needs.',
    contact:
      'Ready to amplify your digital presence? Get in touch with our team today and start your transformation journey.',
  },
  features: {
    innovative:
      'Cutting-edge solutions powered by the latest technology and creative thinking',
    datadriven: 'Strategic decisions backed by analytics and real-world performance metrics',
    customized: 'Tailored strategies designed specifically for your unique business goals',
    results: 'Proven track record of delivering measurable business growth and ROI',
    expert: 'Experienced professionals dedicated to your success and growth',
    creative: 'Stunning designs that capture attention and elevate your brand',
    scalable: 'Solutions that grow with your business and adapt to market changes',
    clientfocused: 'Your success is our priority with transparent communication and support',
  },
} as const;

export const CTA = {
  primary: {
    default: 'Get Started',
    contact: 'Contact Us',
    learn: 'Learn More',
    explore: 'Explore Services',
    demo: 'Request Demo',
  },
  secondary: {
    view: 'View Case Studies',
    read: 'Read More',
    discover: 'Discover How',
    watch: 'Watch Video',
  },
} as const;

export const LABELS = {
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    portfolio: 'Portfolio',
    blog: 'Blog',
    contact: 'Contact',
  },
  footer: {
    company: 'Company',
    services: 'Services',
    resources: 'Resources',
    legal: 'Legal',
    social: 'Follow Us',
    contact: 'Contact',
  },
  form: {
    name: 'Your Name',
    email: 'Email Address',
    phone: 'Phone Number',
    company: 'Company Name',
    message: 'Your Message',
    submit: 'Send Message',
    sending: 'Sending...',
    success: 'Message Sent!',
    error: 'Something went wrong',
  },
} as const;

export const SOCIAL = {
  links: {
    twitter: 'https://twitter.com/amplixa',
    linkedin: 'https://linkedin.com/company/amplixa',
    instagram: 'https://instagram.com/amplixa',
    facebook: 'https://facebook.com/amplixa',
    github: 'https://github.com/amplixa',
  },
  handles: {
    twitter: '@amplixa',
    instagram: '@amplixa',
    github: '@amplixa',
  },
} as const;

export const CONTACT = {
  email: 'hello@amplixa.com',
  phone: '+1 (555) 123-4567',
  address: {
    street: '123 Digital Avenue',
    city: 'Innovation City',
    state: 'CA',
    zip: '94000',
    country: 'United States',
  },
  hours: 'Monday - Friday: 9:00 AM - 6:00 PM PST',
} as const;
