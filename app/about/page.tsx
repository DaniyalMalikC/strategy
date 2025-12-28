import { generateMetadata as generateSEOMetadata } from '@/utils/seo';
import { Icon } from '@/components/atoms/Icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/molecules/Card';

export const metadata = generateSEOMetadata({
  title: 'About',
  description: 'Learn more about Strategy - a production-ready Next.js boilerplate',
  keywords: ['Next.js', 'TypeScript', 'Boilerplate', 'React'],
});

export default function AboutPage() {
  const tech = [
    { name: 'Next.js 16', icon: 'simple-icons:nextdotjs' },
    { name: 'React 19', icon: 'simple-icons:react' },
    { name: 'TypeScript', icon: 'simple-icons:typescript' },
    { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
    { name: 'Framer Motion', icon: 'simple-icons:framer' },
    { name: 'Zustand', icon: 'ph:database-bold' },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-center">About Strategy</h1>
        <p className="mb-12 text-center text-lg text-gray-600 dark:text-gray-400">
          A modern, production-ready Next.js boilerplate with best practices
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              <Icon icon="ph:info-bold" size={24} className="mr-2 inline" />
              What is Strategy?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Strategy is a comprehensive Next.js boilerplate designed to kickstart your
                next project with modern tools and best practices. It combines the power of
                Next.js 16, React 19, and TypeScript with a scalable architecture.
              </p>
              <p>
                Built with production in mind, it includes essential features like error
                boundaries, SEO optimization, theme management, and a robust component
                library following atomic design principles.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              <Icon icon="ph:stack-bold" size={24} className="mr-2 inline" />
              Technology Stack
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {tech.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 dark:border-gray-800"
                >
                  <Icon icon={item.icon} size={32} className="text-primary-600" />
                  <span className="font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              <Icon icon="ph:lightbulb-bold" size={24} className="mr-2 inline" />
              Key Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <Icon icon="ph:check-circle-bold" size={20} className="mr-2 mt-0.5 text-green-600" />
                <span>Atomic Design architecture for scalable components</span>
              </li>
              <li className="flex items-start">
                <Icon icon="ph:check-circle-bold" size={20} className="mr-2 mt-0.5 text-green-600" />
                <span>Strict TypeScript configuration for type safety</span>
              </li>
              <li className="flex items-start">
                <Icon icon="ph:check-circle-bold" size={20} className="mr-2 mt-0.5 text-green-600" />
                <span>Global state management with Zustand</span>
              </li>
              <li className="flex items-start">
                <Icon icon="ph:check-circle-bold" size={20} className="mr-2 mt-0.5 text-green-600" />
                <span>Built-in dark mode with theme persistence</span>
              </li>
              <li className="flex items-start">
                <Icon icon="ph:check-circle-bold" size={20} className="mr-2 mt-0.5 text-green-600" />
                <span>SEO optimized with metadata generation</span>
              </li>
              <li className="flex items-start">
                <Icon icon="ph:check-circle-bold" size={20} className="mr-2 mt-0.5 text-green-600" />
                <span>Error boundaries and loading states</span>
              </li>
              <li className="flex items-start">
                <Icon icon="ph:check-circle-bold" size={20} className="mr-2 mt-0.5 text-green-600" />
                <span>Animations with Framer Motion and GSAP</span>
              </li>
              <li className="flex items-start">
                <Icon icon="ph:check-circle-bold" size={20} className="mr-2 mt-0.5 text-green-600" />
                <span>Production-ready deployment configuration</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
