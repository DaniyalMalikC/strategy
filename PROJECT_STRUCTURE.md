# Strategy - Project Structure

## Overview
Strategy is a production-ready Next.js 16 boilerplate with TypeScript, featuring atomic design architecture and modern best practices.

## Tech Stack

### Core
- **Next.js 16.1.1** - Latest stable version with Turbopack
- **React 19.2.3** - Latest stable React version
- **TypeScript 5.7.2** - Strict type checking enabled
- **PNPM** - Fast, disk space efficient package manager

### Styling
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **SCSS** - CSS preprocessor support
- **CSS Modules** - Component-scoped styles
- **Framer Motion 11.15** - Production-ready animations
- **GSAP 3.12** - Advanced animation library
- **AOS 2.3** - Scroll animations
- **Lenis 1.1** - Smooth scrolling

### State & Data
- **Zustand 5.0** - Lightweight state management
- **TypeScript Types** - Fully typed API layer

### Code Quality
- **Biome 1.9** - Fast linter and formatter
- **Strict TypeScript** - Maximum type safety

### Icons & Images
- **Iconify** - 200,000+ icons
- **Next/Image** - Optimized image loading
- **Unsplash** - High-quality images

## Directory Structure

```
strategy/
│
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   └── hello/               # Example API endpoint
│   ├── demo/                    # Demo page
│   ├── about/                   # About page
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── loading.tsx              # Global loading state
│   ├── error.tsx                # Error page
│   └── not-found.tsx            # 404 page
│
├── components/                   # React components (Atomic Design)
│   ├── atoms/                   # Basic building blocks
│   │   ├── Button.tsx           # Reusable button component
│   │   ├── Icon.tsx             # Icon wrapper
│   │   ├── Spinner.tsx          # Loading spinner
│   │   └── index.ts             # Barrel exports
│   │
│   ├── molecules/               # Simple component groups
│   │   ├── Card.tsx             # Card components
│   │   ├── ThemeToggle.tsx      # Theme switcher
│   │   └── index.ts             # Barrel exports
│   │
│   └── organisms/               # Complex components
│       ├── Header.tsx           # Site header
│       ├── Footer.tsx           # Site footer
│       ├── Loading.tsx          # Loading component
│       ├── ErrorBoundary.tsx    # Error boundary
│       └── index.ts             # Barrel exports
│
├── features/                     # Feature modules (empty, ready for features)
│
├── hooks/                        # Custom React hooks
│   ├── useMediaQuery.ts         # Responsive breakpoint detection
│   ├── useDebounce.ts           # Debounce hook
│   ├── useScrollPosition.ts     # Scroll tracking
│   └── index.ts                 # Barrel exports
│
├── providers/                    # Context providers
│   ├── ThemeProvider.tsx        # Theme context
│   ├── AnimationProvider.tsx    # AOS animation setup
│   └── index.tsx                # Combined providers
│
├── stores/                       # Zustand stores
│   ├── themeStore.ts            # Theme state with persistence
│   ├── uiStore.ts               # UI state (modals, loading, etc.)
│   └── index.ts                 # Barrel exports
│
├── services/                     # API services
│   ├── api.ts                   # API client with typed methods
│   └── index.ts                 # Barrel exports
│
├── utils/                        # Utility functions
│   ├── cn.ts                    # className merger
│   ├── seo.ts                   # SEO metadata generator
│   └── index.ts                 # Barrel exports
│
├── types/                        # TypeScript types
│   ├── common.ts                # Shared types
│   └── index.ts                 # Barrel exports
│
├── styles/                       # Global styles
│   └── globals.scss             # Global CSS with Tailwind
│
├── constants/                    # App constants
│   ├── app.ts                   # App-wide constants
│   └── index.ts                 # Barrel exports
│
├── public/                       # Static assets
│   ├── images/                  # Images
│   ├── fonts/                   # Custom fonts
│   └── icons/                   # Static icons
│
├── .env.local                    # Local environment variables
├── .env.example                  # Environment variables template
├── .gitignore                    # Git ignore rules
├── biome.json                    # Biome configuration
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.ts            # Tailwind configuration
├── next.config.ts                # Next.js configuration
├── postcss.config.mjs            # PostCSS configuration
├── vercel.json                   # Vercel deployment config
├── package.json                  # Dependencies and scripts
├── README.md                     # Documentation
└── PROJECT_STRUCTURE.md          # This file
```

## Key Features

### 1. Atomic Design Architecture
Components are organized following atomic design principles:
- **Atoms**: Basic building blocks (Button, Icon, Spinner)
- **Molecules**: Simple component groups (Card, ThemeToggle)
- **Organisms**: Complex components (Header, Footer, ErrorBoundary)

### 2. Type Safety
- Strict TypeScript configuration
- Typed API responses
- Type-safe component props
- Path aliases for clean imports

### 3. State Management
- Zustand for global state
- Theme store with localStorage persistence
- UI store for app-wide UI state

### 4. Custom Hooks
- `useMediaQuery` - Responsive design detection
- `useDebounce` - Debounce values/inputs
- `useScrollPosition` - Track scroll state
- `useIsMobile`, `useIsTablet`, `useIsDesktop` - Device detection

### 5. SEO Optimization
- Metadata generation utility
- Open Graph tags
- Twitter cards
- Canonical URLs

### 6. Error Handling
- Global error boundary
- Custom error pages
- 404 page
- Loading states

### 7. Theme System
- Light/Dark/System modes
- Persistent theme selection
- CSS custom properties
- Tailwind dark mode classes

### 8. Production Ready
- Vercel deployment configuration
- Environment variables setup
- Security headers
- Performance optimized
- Image optimization

## Scripts

```bash
# Development
pnpm dev              # Start dev server

# Production
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run Biome linter
pnpm lint:fix         # Fix linting issues
pnpm format           # Format code
```

## Path Aliases

All imports use absolute paths for better maintainability:

```typescript
import { Button } from '@/components/atoms/Button';
import { useThemeStore } from '@/stores/themeStore';
import { cn } from '@/utils/cn';
```

## Getting Started

1. Install dependencies: `pnpm install`
2. Copy environment: `cp .env.example .env.local`
3. Run development: `pnpm dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Deployment

The project is optimized for Vercel deployment:

1. Push to GitHub
2. Import in Vercel
3. Deploy automatically

## Contributing

This is a boilerplate project. Fork and customize for your needs.

## License

MIT
