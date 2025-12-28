import type { Metadata } from 'next';
import { BRAND, DESCRIPTIONS } from '@/constants/copy';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://amplixa.com';

interface PageMetadata {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
}

export function createMetadata({
  title,
  description,
  path = '/',
  keywords = [],
  ogImage,
}: PageMetadata): Metadata {
  const fullTitle = title === BRAND.name ? title : `${title} | ${BRAND.name}`;
  const url = `${APP_URL}${path}`;
  const defaultOgImage = `${APP_URL}/og-image.jpg`;

  const defaultKeywords = [
    'Digital Marketing',
    'Web Development',
    'Brand Strategy',
    'Digital Solutions',
    'Business Growth',
    'Digital Transformation',
    'Marketing Agency',
    'Creative Agency',
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...keywords, ...defaultKeywords],
    authors: [{ name: BRAND.name }],
    creator: BRAND.name,
    publisher: BRAND.name,
    metadataBase: new URL(APP_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      title: fullTitle,
      description,
      siteName: BRAND.name,
      images: [
        {
          url: ogImage || defaultOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage || defaultOgImage],
      creator: '@amplixa',
      site: '@amplixa',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Pre-configured metadata for common pages
export const PAGE_METADATA = {
  home: createMetadata({
    title: BRAND.name,
    description: DESCRIPTIONS.seo.home,
    path: '/',
  }),
  about: createMetadata({
    title: 'About Us',
    description: DESCRIPTIONS.seo.about,
    path: '/about',
  }),
  services: createMetadata({
    title: 'Our Services',
    description: DESCRIPTIONS.seo.services,
    path: '/services',
  }),
  contact: createMetadata({
    title: 'Contact Us',
    description: DESCRIPTIONS.seo.contact,
    path: '/contact',
  }),
} as const;
