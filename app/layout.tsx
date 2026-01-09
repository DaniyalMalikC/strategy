import { ErrorBoundary } from '@/components/organisms/ErrorBoundary';
import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';
import { Providers } from '@/providers/index';
import type { Metadata } from 'next';
import { Bebas_Neue, Montserrat, Poppins } from 'next/font/google';
import '@/styles/globals.scss';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Amplixa - Amplify Your Digital Presence',
  description:
    'Transform your business with cutting-edge digital solutions. Amplixa delivers innovative strategies, stunning designs, and powerful technology to amplify your success.',
  keywords: [
    'Digital Marketing',
    'Web Development',
    'Brand Strategy',
    'Digital Solutions',
    'Business Growth',
    'Digital Transformation',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bebasNeue.variable} ${poppins.variable} ${montserrat.variable} bg-white dark:bg-[#0f0e0d] transition-colors duration-300`}>
        <ErrorBoundary>
          <Providers>
            <div className="flex min-h-screen flex-col bg-white dark:bg-[#0f0e0d]">
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
