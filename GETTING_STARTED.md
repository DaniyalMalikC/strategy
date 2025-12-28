# Getting Started with Strategy

## Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open browser
# Visit http://localhost:3000
```

## What's Included

### Pages
- **Home (/)** - Landing page with features showcase
- **Demo (/demo)** - Interactive demo of all features
- **About (/about)** - About page with tech stack
- **404** - Custom not found page
- **Error** - Global error page
- **Loading** - Global loading state

### Components Built

#### Atoms
- **Button** - Multiple variants (primary, secondary, outline, ghost)
- **Icon** - Iconify integration with 200k+ icons
- **Spinner** - Loading indicator

#### Molecules
- **Card** - With header, title, description, content, footer
- **ThemeToggle** - Dark/Light mode switcher

#### Organisms
- **Header** - Sticky navigation with theme toggle
- **Footer** - Site footer with links
- **ErrorBoundary** - Catches and displays errors
- **Loading** - Full-screen loading component

### Hooks Ready to Use

```typescript
// Responsive design
import { useIsMobile, useIsTablet, useIsDesktop } from '@/hooks/useMediaQuery';

// Debounce
import { useDebounce } from '@/hooks/useDebounce';

// Scroll tracking
import { useScrollPosition, useIsScrolled } from '@/hooks/useScrollPosition';
```

### Stores Available

```typescript
// Theme management
import { useThemeStore } from '@/stores/themeStore';
const { theme, setTheme, toggleTheme } = useThemeStore();

// UI state
import { useUIStore } from '@/stores/uiStore';
const { isLoading, setLoading } = useUIStore();
```

### Utilities

```typescript
// ClassName merger
import { cn } from '@/utils/cn';

// SEO metadata
import { generateMetadata } from '@/utils/seo';
```

## Adding New Features

### 1. Create a New Page

```typescript
// app/contact/page.tsx
import { generateMetadata } from '@/utils/seo';

export const metadata = generateMetadata({
  title: 'Contact',
  description: 'Get in touch with us',
});

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1>Contact Us</h1>
    </div>
  );
}
```

### 2. Create a New Component

```typescript
// components/atoms/Badge.tsx
import { cn } from '@/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
  };

  return (
    <span className={cn('px-2 py-1 rounded text-sm font-medium', variants[variant], className)}>
      {children}
    </span>
  );
}
```

### 3. Create a New Store

```typescript
// stores/cartStore.ts
import { create } from 'zustand';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ items: [] }),
}));
```

### 4. Create a New Hook

```typescript
// hooks/useLocalStorage.ts
'use client';

import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.error(error);
    }
  }, [key]);

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}
```

### 5. Create an API Route

```typescript
// app/api/users/route.ts
import { NextResponse } from 'next/server';
import type { ApiResponse } from '@/types/common';

interface User {
  id: string;
  name: string;
  email: string;
}

export async function GET() {
  try {
    // Fetch data from database or external API
    const users: User[] = [
      { id: '1', name: 'John Doe', email: 'john@example.com' },
    ];

    return NextResponse.json({
      data: users,
      success: true,
    } as ApiResponse<User[]>);
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Failed to fetch users',
        success: false,
      } as ApiResponse,
      { status: 500 }
    );
  }
}
```

## Working with Animations

### Framer Motion

```typescript
import { motion } from 'framer-motion';

export function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Content
    </motion.div>
  );
}
```

### AOS (Scroll Animations)

```typescript
export function ScrollAnimation() {
  return (
    <div data-aos="fade-up" data-aos-delay="200">
      Content appears on scroll
    </div>
  );
}
```

### GSAP

```typescript
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function GSAPAnimation() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, {
        x: 100,
        duration: 1,
        ease: 'power2.inOut',
      });
    }
  }, []);

  return <div ref={boxRef}>Animated Box</div>;
}
```

## Styling Guide

### Using Tailwind

```typescript
<div className="flex items-center justify-between p-4 bg-white dark:bg-gray-900">
  Content
</div>
```

### Using cn() Utility

```typescript
import { cn } from '@/utils/cn';

const classes = cn(
  'base-class',
  isActive && 'active-class',
  'conditional-class'
);
```

### Custom SCSS

```scss
// styles/custom.module.scss
.container {
  @apply mx-auto px-4;

  max-width: 1200px;

  &__header {
    @apply mb-8;
  }
}
```

## Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_APP_NAME=Strategy
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## Best Practices

### 1. Component Structure
- Keep components small and focused
- Use composition over inheritance
- Export types with components

### 2. State Management
- Use Zustand for global state
- Use React state for local component state
- Persist important state to localStorage

### 3. Styling
- Use Tailwind utilities first
- Create reusable component variants
- Use dark mode classes: `dark:`

### 4. Type Safety
- Always type props and state
- Use TypeScript strict mode
- Define types in `/types` directory

### 5. Performance
- Use Next.js Image component
- Lazy load heavy components
- Memoize expensive computations

## Next Steps

1. Explore the demo page at `/demo`
2. Check out the components in `components/`
3. Review the example API route
4. Customize the theme colors in `tailwind.config.ts`
5. Add your own features and pages

## Need Help?

- Read the [Next.js Documentation](https://nextjs.org/docs)
- Check [Tailwind CSS Docs](https://tailwindcss.com/docs)
- Review [TypeScript Handbook](https://www.typescriptlang.org/docs)
- Explore [Framer Motion](https://www.framer.com/motion)

Happy coding!
