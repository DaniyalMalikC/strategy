'use client';

import { Hero } from '@/components/organisms/Hero';
import { WorkforceExpansion } from '@/components/organisms/WorkforceExpansion';
import { Teams } from '@/components/organisms/Teams';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <WorkforceExpansion />
      <Teams />
    </main>
  );
}
