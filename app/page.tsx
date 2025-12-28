'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/molecules/Card';
import { ROUTES } from '@/constants/app';

export default function HomePage() {
  const features = [
    {
      icon: 'ph:lightning-bold',
      title: 'Fast & Modern',
      description: 'Built with Next.js 16 and React 19 for optimal performance',
    },
    {
      icon: 'ph:palette-bold',
      title: 'Beautiful UI',
      description: 'Tailwind CSS with dark mode support out of the box',
    },
    {
      icon: 'ph:code-bold',
      title: 'Type Safe',
      description: 'Strict TypeScript configuration for better DX',
    },
    {
      icon: 'ph:puzzle-piece-bold',
      title: 'Atomic Design',
      description: 'Scalable component architecture with reusability',
    },
    {
      icon: 'ph:rocket-launch-bold',
      title: 'Production Ready',
      description: 'Error boundaries, SEO, and performance optimized',
    },
    {
      icon: 'ph:database-bold',
      title: 'State Management',
      description: 'Zustand for lightweight and efficient state',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.section
        className="mb-24 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto mb-8 max-w-3xl">
          <h1 className="mb-6 text-5xl font-bold lg:text-6xl">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Strategy
            </span>
          </h1>
          <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
            A production-ready Next.js boilerplate with TypeScript, Tailwind CSS, and
            modern best practices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={ROUTES.DEMO}>
              <Button variant="primary" size="lg">
                <Icon icon="ph:play-bold" size={20} className="mr-2" />
                View Demo
              </Button>
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                <Icon icon="mdi:github" size={20} className="mr-2" />
                GitHub
              </Button>
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-16 aspect-video max-w-4xl overflow-hidden rounded-2xl border border-gray-200 shadow-2xl dark:border-gray-800">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop"
            alt="Dashboard Preview"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="mb-12 text-center text-3xl font-bold lg:text-4xl">
          Features
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card hover>
                <CardHeader>
                  <div className="mb-4 inline-flex rounded-lg bg-primary-100 p-3 dark:bg-primary-950">
                    <Icon
                      icon={feature.icon}
                      size={32}
                      className="text-primary-600"
                    />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mt-24 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto max-w-2xl rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 p-12 text-white">
          <h2 className="mb-4 text-3xl font-bold">Ready to get started?</h2>
          <p className="mb-8 text-lg opacity-90">
            Explore the demo to see all features in action.
          </p>
          <Link href={ROUTES.DEMO}>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Icon icon="ph:arrow-right-bold" size={20} className="mr-2" />
              Explore Demo
            </Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
