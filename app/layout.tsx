import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/providers/index';
import { ErrorBoundary } from '@/components/organisms/ErrorBoundary';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import '@styles/globals.scss';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Strategy - Production Ready Next.js Boilerplate',
  description:
    'A clean, scalable, and production-ready Next.js boilerplate with TypeScript, Tailwind CSS, and more.',
  keywords: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'GSAP',
    'Zustand',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ErrorBoundary>
          <Providers>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
