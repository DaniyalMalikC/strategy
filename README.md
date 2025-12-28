# Strategy

A production-ready Next.js boilerplate with TypeScript, Tailwind CSS, and modern best practices.

## Features

- **Next.js 16** with App Router
- **React 19** with latest features
- **TypeScript** with strict configuration
- **Tailwind CSS** with custom configuration
- **Framer Motion** for animations
- **GSAP** for advanced animations
- **Zustand** for state management
- **Atomic Design** architecture
- **SEO optimized** with metadata generation
- **Error Boundaries** for robust error handling
- **Dark Mode** with theme persistence
- **Biome** for linting and formatting
- **Production ready** configuration

## Tech Stack

- **Framework:** Next.js 16.1, React 19.2
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS 4.1, SCSS (modern @use syntax)
- **Animations:** Framer Motion, GSAP, Lenis, AOS
- **State Management:** Zustand
- **Icons:** Iconify
- **Linting:** Biome
- **Package Manager:** PNPM

## Documentation

For detailed documentation, see the `readme_instructions/` folder:
- Project Structure & Architecture
- Getting Started Guide
- SCSS Architecture (modern @use syntax)
- Tailwind v4 Upgrade Details
- Complete Feature Summary
- Testing Checklist

## Project Structure

```
strategy/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── demo/              # Demo page
│   ├── about/             # About page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── loading.tsx        # Global loading
│   ├── error.tsx          # Error page
│   └── not-found.tsx      # 404 page
├── components/            # React components
│   ├── atoms/            # Basic building blocks
│   ├── molecules/        # Simple component groups
│   └── organisms/        # Complex components
├── features/             # Feature modules
├── hooks/                # Custom React hooks
├── providers/            # Context providers
├── stores/               # Zustand stores
├── services/             # API services
├── utils/                # Utility functions
├── types/                # TypeScript types
├── styles/               # Global styles
├── constants/            # App constants
└── public/               # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+
- PNPM

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd strategy
```

2. Install dependencies:
```bash
pnpm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run Biome linter
- `pnpm lint:fix` - Fix linting issues
- `pnpm format` - Format code with Biome

## Architecture

### Atomic Design

Components are organized following Atomic Design principles:

- **Atoms:** Basic building blocks (Button, Icon, Spinner)
- **Molecules:** Simple component groups (Card, ThemeToggle)
- **Organisms:** Complex components (Header, Footer, ErrorBoundary)

### State Management

Global state is managed using Zustand with separate stores:

- `themeStore` - Theme management with persistence
- `uiStore` - UI state (modals, loading, etc.)

### Hooks

Reusable custom hooks for common patterns:

- `useMediaQuery` - Responsive design detection
- `useDebounce` - Debounce values
- `useScrollPosition` - Track scroll position

### Services

API service layer with typed responses for clean data fetching.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy

The project includes a `vercel.json` configuration file.

## Environment Variables

See `.env.example` for available environment variables:

- `NEXT_PUBLIC_APP_NAME` - Application name
- `NEXT_PUBLIC_APP_URL` - Application URL
- `NEXT_PUBLIC_API_URL` - API endpoint URL

## License

MIT
