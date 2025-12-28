import type { Metadata } from 'next';
import type { SEOMetadata } from '@/types/common';
import { APP_NAME, APP_URL } from '@/constants/app';

export function generateMetadata(seo: SEOMetadata): Metadata {
  const {
    title,
    description,
    keywords = [],
    ogImage = `${APP_URL}/og-image.jpg`,
    canonical,
  } = seo;

  const fullTitle = title.includes(APP_NAME) ? title : `${title} | ${APP_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: APP_NAME }],
    creator: APP_NAME,
    publisher: APP_NAME,
    metadataBase: new URL(APP_URL),
    alternates: {
      canonical: canonical || APP_URL,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonical || APP_URL,
      title: fullTitle,
      description,
      siteName: APP_NAME,
      images: [
        {
          url: ogImage,
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
      images: [ogImage],
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

export function generatePageTitle(title: string): string {
  return `${title} | ${APP_NAME}`;
}
