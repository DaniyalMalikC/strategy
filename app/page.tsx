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
import { BRAND, HEADINGS, DESCRIPTIONS, CTA } from '@/constants/copy';

export default function HomePage() {
  const features = [
    {
      icon: 'ph:lightbulb-bold',
      title: 'Innovative Solutions',
      description: DESCRIPTIONS.features.innovative,
    },
    {
      icon: 'ph:chart-line-up-bold',
      title: 'Data-Driven Results',
      description: DESCRIPTIONS.features.datadriven,
    },
    {
      icon: 'ph:users-three-bold',
      title: 'Expert Team',
      description: DESCRIPTIONS.features.expert,
    },
    {
      icon: 'ph:palette-bold',
      title: 'Creative Excellence',
      description: DESCRIPTIONS.features.creative,
    },
    {
      icon: 'ph:rocket-launch-bold',
      title: 'Scalable Growth',
      description: DESCRIPTIONS.features.scalable,
    },
    {
      icon: 'ph:handshake-bold',
      title: 'Client-Focused',
      description: DESCRIPTIONS.features.clientfocused,
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
          <h1 className="font-logo mb-6 text-6xl font-normal lg:text-7xl" style={{ color: 'var(--foreground)' }}>
            {HEADINGS.home.hero}
          </h1>
          <p className="font-body mb-8 text-xl" style={{ color: 'var(--muted-foreground)' }}>
            {HEADINGS.home.subhero}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={ROUTES.CONTACT}>
              <Button variant="primary" size="lg">
                <Icon icon="ph:paper-plane-tilt-bold" size={20} className="mr-2" />
                {CTA.primary.contact}
              </Button>
            </Link>
            <Link href={ROUTES.SERVICES}>
              <Button variant="outline" size="lg">
                <Icon icon="ph:arrow-right-bold" size={20} className="mr-2" />
                {CTA.primary.explore}
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative mx-auto mt-16 aspect-video max-w-4xl overflow-hidden rounded-2xl shadow-2xl" style={{ borderWidth: '1px', borderColor: 'var(--border)' }}>
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop"
            alt="Digital Marketing Dashboard"
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
        <h2 className="font-heading mb-12 text-center text-4xl font-semibold lg:text-5xl" style={{ color: 'var(--foreground)' }}>
          {HEADINGS.home.features}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card hover>
                <CardHeader>
                  <div className="mb-4 inline-flex rounded-lg p-3" style={{ backgroundColor: 'var(--brand-primary-100)' }}>
                    <div style={{ color: 'var(--brand-primary)' }}>
                      <Icon
                        icon={feature.icon}
                        size={32}
                      />
                    </div>
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
        <div className="mx-auto max-w-2xl rounded-2xl p-12" style={{ background: 'linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-secondary) 100%)' }}>
          <h2 className="font-heading mb-4 text-3xl font-semibold text-white">{HEADINGS.home.cta}</h2>
          <p className="font-body mb-8 text-lg text-white opacity-90">
            {BRAND.shortDescription}
          </p>
          <Link href={ROUTES.CONTACT}>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Icon icon="ph:paper-plane-tilt-bold" size={20} className="mr-2" />
              {CTA.primary.contact}
            </Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
