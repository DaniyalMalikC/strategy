'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/molecules/Card';
import { useThemeStore } from '@/stores/themeStore';
import { useUIStore } from '@/stores/uiStore';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { useDebounce } from '@/hooks/useDebounce';

export default function DemoPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  const { theme, setTheme } = useThemeStore();
  const { isLoading, setLoading } = useUIStore();
  const isMobile = useIsMobile();

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-4 text-center">Demo Page</h1>
        <p className="mb-12 text-center text-gray-600 dark:text-gray-400">
          Explore the features and components of this boilerplate
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>
                <Icon icon="ph:palette-bold" size={24} className="mr-2 inline" />
                Theme Management
              </CardTitle>
              <CardDescription>
                Zustand store for global theme state with persistence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm">
                  Current theme: <span className="font-semibold">{theme}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={theme === 'light' ? 'primary' : 'outline'}
                    onClick={() => setTheme('light')}
                  >
                    <Icon icon="ph:sun-bold" size={16} className="mr-2" />
                    Light
                  </Button>
                  <Button
                    variant={theme === 'dark' ? 'primary' : 'outline'}
                    onClick={() => setTheme('dark')}
                  >
                    <Icon icon="ph:moon-bold" size={16} className="mr-2" />
                    Dark
                  </Button>
                  <Button
                    variant={theme === 'system' ? 'primary' : 'outline'}
                    onClick={() => setTheme('system')}
                  >
                    <Icon icon="ph:monitor-bold" size={16} className="mr-2" />
                    System
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>
                <Icon icon="ph:spinner-bold" size={24} className="mr-2 inline" />
                Loading State
              </CardTitle>
              <CardDescription>
                UI store for managing global loading states
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm">
                  Loading: <span className="font-semibold">{isLoading ? 'Yes' : 'No'}</span>
                </p>
                <Button
                  onClick={handleLoadingDemo}
                  isLoading={isLoading}
                  variant="primary"
                >
                  Trigger Loading
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>
                <Icon icon="ph:devices-bold" size={24} className="mr-2 inline" />
                Media Queries
              </CardTitle>
              <CardDescription>
                Custom hooks for responsive design detection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm">
                  Device type:{' '}
                  <span className="font-semibold">
                    {isMobile ? 'Mobile' : 'Desktop/Tablet'}
                  </span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Resize your browser to see this change
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>
                <Icon icon="ph:timer-bold" size={24} className="mr-2 inline" />
                Debounce Hook
              </CardTitle>
              <CardDescription>
                Optimized search with debounce functionality
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Type to search..."
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                />
                <p className="text-sm">
                  Debounced value: <span className="font-semibold">{debouncedSearch || 'None'}</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle>
                <Icon icon="ph:magic-wand-bold" size={24} className="mr-2 inline" />
                Framer Motion Animations
              </CardTitle>
              <CardDescription>
                Smooth animations powered by Framer Motion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                {[1, 2, 3, 4].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-24 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 text-2xl font-bold text-white shadow-lg"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle>
                <Icon icon="ph:paint-brush-bold" size={24} className="mr-2 inline" />
                Button Variants
              </CardTitle>
              <CardDescription>
                Multiple button styles and sizes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
